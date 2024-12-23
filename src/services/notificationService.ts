import axios from "axios";

export const sendSMSNotification = async (phoneNumber: string, message: string) => {
    const baseURL = process.env.NEXT_PUBLIC_TEXT_BELT_BASE_URL;
    const apiKey = process.env.NEXT_PUBLIC_TEXTBELT_KEY;

    if (!baseURL) {
        throw new Error("Base URL is not defined");
    }

    if (!apiKey) {
        throw new Error("API key is not defined");
    }

    try {
        const response = await axios.post(baseURL, {
            phone: phoneNumber,
            message: message,
            key: apiKey,
        });

        return response.data;
    } catch (error) {
        console.error("Erro ao enviar SMS:", error);
        throw error;
    }
};