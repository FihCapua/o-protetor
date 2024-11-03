import { database } from "@/app/firebase/firebaseConfig";
import { collection, query, where, addDoc, getDocs, getDoc, doc } from "firebase/firestore";
import { MedicationProps } from "@/types";

export const addMedicationReminder = async (userId: string, medication: MedicationProps) => {
    try {
        const userDoc = await getDoc(doc(database, "users", userId));
        const userPhoneNumber = userDoc.exists() ? userDoc.data().phoneNumber : null;

    if (!userPhoneNumber) {
      console.error("Número de telefone do usuário não encontrado.");
      return;
    }

    const medicationWithPhone = {
      ...medication,
      phoneNumber: userPhoneNumber,
      userId,
    };

    await addDoc(collection(database, "medications"), medicationWithPhone);
    alert("Lembrete de medicação adicionado com sucesso!");
  } catch (error) {
    console.error("Erro ao adicionar lembrete de medicação:", error);
  }
}

export const getMedications = async (userId: string): Promise<MedicationProps[]> => {
    if (!userId) {
        console.error("userId está indefinido.");
        return [];
    }
    
    try {
        const medicationsRef = collection(database, 'medications');
        const queryMedications = query(medicationsRef, where("userId", "==", userId));
        const medicationsSnapshot = await getDocs(queryMedications);
        return medicationsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        })) as MedicationProps[];
    } catch (error) {
        console.error("Erro ao buscar lembretes da medicação:", error);
        return [];
    }
}