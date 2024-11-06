import { database } from "@/app/firebase/firebaseConfig";
import { collection, query, where, getDocs, doc, setDoc } from "firebase/firestore";
import { MedicationProps } from "@/types";

export const addMedicationReminder = async (userId: string, medication: MedicationProps) => {
  const medicationDocRef = doc(collection(database, "medications"));
  await setDoc(medicationDocRef, {
      ...medication,
      userId,
      createdAt: new Date().toISOString()
  })
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