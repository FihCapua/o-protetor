import { database } from "@/app/firebase/firebaseConfig";
import { addDoc, getDocs, collection } from "firebase/firestore";
import { MedicationProps } from "@/types";

export const addMedicationReminder = async (medication: MedicationProps) => {
    try {
        await addDoc(collection(database, 'medications'), medication);
        alert("Lembrete de medicação adicionado com sucesso!");
    } catch (error) {
        console.error("Erro ao adicionar lembrete de medicação:", error);
        alert("Erro ao adicionar lembrete. Por favor, tente novamente.");
    }
}

export const getMedications = async (): Promise<MedicationProps[]> => {
    try {
        const medicationsSnapshot = await getDocs(collection(database, 'medications'));
        return medicationsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        })) as MedicationProps[];
    } catch (error) {
        console.error("Erro ao buscar lembretes da medicação:", error);
        return [];
    }
}