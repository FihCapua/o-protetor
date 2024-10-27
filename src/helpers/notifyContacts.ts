
import { postRequest } from "@/services/api/httpClient";
import emailjs from '@emailjs/browser';
import { ContactProps, EmailResultProps } from "@/types";

const sendEmergencySMS = async (phoneNumber: string, message: string): Promise<EmailResultProps> => {
    const url = process.env.NEXT_PUBLIC_TEXTBELT_URL ?? 'https://textbelt.com/text';
    const apiKey = process.env.NEXT_PUBLIC_TEXTBELT_KEY
    const countryCode = "+55"
    const formattedPhoneNumber = countryCode + phoneNumber;

    const data = {
        phone: formattedPhoneNumber,
        message: message,
        key: apiKey,
    };
  
    try {
      const result = await postRequest(url, data);
  
      if (result.success) {
        return { success: true, contact: phoneNumber };
      } else {
        return { success: false, contact: phoneNumber, error: result.error };
      }
    } catch (error) {
      return { success: false, contact: phoneNumber, error };
    }
  };

export const notifyContacts = async (contacts: ContactProps[], locationInfo: string): Promise<EmailResultProps[]> => {
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
    const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || '';

    if (!SERVICE_ID || !TEMPLATE_ID || !USER_ID) {
        return Promise.resolve([]);
    }
    
    const notificationPromises = contacts.map(contact => {
        const emailPromise = emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            location_info: locationInfo,
            to_email: contact.email,
          },
          USER_ID
        )
        .then(response => {
          return { success: true, contact: contact.email };
        })
        .catch(error => {
          return { success: false, contact: contact.email, error };
        });
    
        const smsPromise = sendEmergencySMS(contact.phone, `Emergência! Localização: ${locationInfo}`);
    
        return Promise.all([emailPromise, smsPromise]);
      });

      const results = await Promise.all(notificationPromises);
      return results.flat();
};