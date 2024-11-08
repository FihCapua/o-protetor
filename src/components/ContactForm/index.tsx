'use client'

import { useState } from "react";
import { addContact } from "@/services/contactService";
import { useAuth } from "@/providers/AuthProvider";
import { TitleComponent } from "../Typography";
import { ContainerContactForm } from "./style";
import { InputField } from "../Input";
import { ButtonComponent } from "../Button";

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const { user } = useAuth();

    
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!user || !user.uid) {
            alert("Usuário não autenticado ou ID de usuário não encontrado.");
            return;
        }

        await addContact(user.uid, name, email, phone);
        setName('');
        setEmail('');
        setPhone('');
    }

    return (
        <>
            <TitleComponent as="h3">Cadastrar contato(s) de emergência</TitleComponent>
            <ContainerContactForm>
                <form onSubmit={handleSubmit}>
                        <InputField value={name} placeholder="Nome:" onChange={(e) => setName(e.target.value)} required />
                    
                        <InputField type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                    
                        <InputField value={phone} placeholder="Telefone" onChange={(e) => setPhone(e.target.value)} />
                    <ButtonComponent size="small" fullWidth>Adicionar Contato</ButtonComponent>
                </form>
            </ContainerContactForm>
        </>
    )
}

export default ContactForm;