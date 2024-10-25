'use client'

import { useEffect, useState } from "react";
import { getContacts } from "@/services/contactService";
import { ContactProps } from "@/types";
import { TitleComponent } from "../Typography";

const ContactList = () => {
    const [contacts, setContacts] = useState<ContactProps[]>([]);

    useEffect(() => {
        const loadContacts = async () => {
            const contactsList = await getContacts();
            setContacts(contactsList);
        };
        loadContacts();
    }, []);

    return (
        <div>
            <TitleComponent as="h3">Contatos de Emergência</TitleComponent>
            <ul>
                {contacts.map((contact) => (
                    <li key={contact.id}>
                        {contact.name} - {contact.email} - {contact.phone}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactList;