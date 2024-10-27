
import { ContactProps, EmailResultProps } from "@/types";
import emailjs from '@emailjs/browser';

export const notifyContacts = (contacts: ContactProps[], locationInfo: string): Promise<EmailResultProps[]> => {
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
    const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || '';

    if (!SERVICE_ID || !TEMPLATE_ID || !USER_ID) {
        console.error("Variáveis de ambiente do EmailJS estão ausentes.");
        return Promise.resolve([]);
    }
    
    const emailPromises = contacts.map(contact => {
        return emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            {
                location_info: locationInfo,
                to_email: contact.email,
            },
            USER_ID
        )
        .then(response => {
            console.log('E-mail enviado com sucesso:', response.status, response.text);
            return { success: true, contact: contact.email };
        })
        .catch(error => {
            console.error(`Erro ao enviar e-mail para ${contact.email}:`, error);
            return { success: false, contact: contact.email, error };
        });
    });

    return Promise.all(emailPromises);
};