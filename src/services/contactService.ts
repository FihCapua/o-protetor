import { database } from "@/app/firebase/firebaseConfig";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { ContactProps } from "@/types";

/** 
 * This function is responsible for adding a new contact to the database.
 *  @param name - The name of the contact.
 *  @param email - The email of the contact.
 *  @param phone - The phone number of the contact.
 */

export const addContact = async (name: string, email: string, phone: string): Promise<void> => {
    try {
        await addDoc(collection(database, 'contacts'), {
            name,
            email,
            phone,
            lastLatitude: null,
            lastLongitude: null,
            lastUpdated: null,
        });
        alert("Contato adicionado com sucesso!");
    } catch (error) {
        alert("Erro ao adicionar contato. Por favor, tente novamente.");
    }
}

export const getContacts = async (): Promise<ContactProps[]> => {
    try {
        const contactsSnapshot = await getDocs(collection(database, 'contacts'));
        return contactsSnapshot.docs.map(doc => ({
            id: doc.id,
            name: doc.data().name || '',
            email: doc.data().email || '',
            phone: doc.data().phone || '',
        } as ContactProps));
    } catch (error) {
      console.error("Erro ao buscar contatos: ", error);
      return [];
    }
};