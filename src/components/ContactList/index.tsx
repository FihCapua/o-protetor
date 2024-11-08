'use client'

import { useEffect, useState } from "react";
import { getContacts } from "@/services/contactService";
import { useAuth } from "@/providers/AuthProvider";
import { ContactProps } from "@/types";
import { TextComponent, TitleComponent } from "../Typography";
import { ListContactsContainer, ListDetailsContainer } from "./style";

const ContactList = () => {
    const [contacts, setContacts] = useState<ContactProps[]>([]);
    const { user } = useAuth();

    useEffect(() => {
        const loadContacts = async () => {
            if (user && user.uid) {
                const contactsList = await getContacts(user.uid);
                setContacts(contactsList);
            }
        };
        loadContacts();
    }, [user]);

    return (
        <ListContactsContainer>
            <TitleComponent as="h3">Contatos de Emergência: </TitleComponent>
            <ListDetailsContainer>
                <ul>
                    {contacts.map((contact) => (
                        <li key={contact.id}>
                            <TextComponent> - Nome: {contact.name}</TextComponent>
                            <TextComponent> - Email: {contact.email}</TextComponent>
                            <TextComponent> - Telefone: {contact.phone}</TextComponent>
                        </li>
                    ))}
                </ul>
            </ListDetailsContainer>
        </ListContactsContainer>
    );
};

export default ContactList;