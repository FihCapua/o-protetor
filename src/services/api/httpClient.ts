import axios, { AxiosResponse } from "axios";

export const fetchData = async (url: string): Promise<AxiosResponse | null> => {
    try {
        return await axios.get(url);
    } catch (error) {
        console.error("Erro na requisição HTTP:", error);
        return null;
    }
};
