    import { database } from "@/app/firebase/firebaseConfig";
    import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
    import { ContactProps } from "@/types";

    /** 
     * This function is responsible for adding a new contact to the database.
     *  @param name - The name of the contact.
     *  @param email - The email of the contact.
     *  @param phone - The phone number of the contact.
     */

    export const addContact = async (userId: string, name: string, email: string, phone: string): Promise<void> => {
        if (!database) {
            alert("Erro ao inicializar o serviço de banco de dados.");
            return;
        }

        try {
            await addDoc(collection(database, 'contacts'), {
                userId,
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

    export const getContacts = async (userId: string): Promise<ContactProps[]> => {
        if (!database) {
            alert("Erro ao inicializar o serviço de banco de dados.");
            return [];
        }

        try {
            const contactsRef = collection(database, 'contacts');
            const q = query(contactsRef, where("userId", "==", userId));
            const contactsSnapshot = await getDocs(q);

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