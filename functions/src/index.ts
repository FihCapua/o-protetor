import * as functions from "firebase-functions/v1";
import * as admin from "firebase-admin";
import axios from "axios";

admin.initializeApp();

const textbeltKey = functions.config().textbelt.key;

export const sendMedicationSMS = functions.pubsub
  .schedule("every 1 minutes")
  .onRun(async () => {
    const now = new Date();
    console.log("Horário atual:", now.toISOString());

    const medicationsRef = admin.firestore().collection("medications");

    const snapshot = await medicationsRef.get();
    snapshot.forEach(async (doc) => {
      const medicationData = doc.data();
      if (!medicationData || !medicationData.time || !medicationData.phoneNumber) return;

      console.log("Dados da medicação:", medicationData);

      const [hours, minutes] = medicationData.time.split(":").map(Number);
      const medicationDateTime = new Date();
      medicationDateTime.setHours(hours, minutes, 0, 0);

      console.log("Horário da medicação:", medicationDateTime.toISOString());

      const timeDifference = Math.abs(medicationDateTime.getTime() - now.getTime());
      console.log("Diferença de tempo em milissegundos:", timeDifference);

      if (timeDifference < 60000) {
        try {
          const response = await axios.post("https://textbelt.com/text", {
            phone: medicationData.phoneNumber,
            message: `Hora de tomar o remédio: ${medicationData.name}. 
              Dosagem: ${medicationData.dosage}. 
              Hora: ${medicationData.time}`,
            key: textbeltKey,
          });

          if (response.data.success) {
            console.log(`SMS enviado com sucesso para ${medicationData.phoneNumber}`);
          } else {
            console.error("Erro ao enviar SMS:", response.data.error);
          }
        } catch (error) {
          console.error("Erro ao enviar SMS:", error);
        }
      } else {
        console.log("O horário atual não está próximo do horário da medicação.");
      }
    });
  });