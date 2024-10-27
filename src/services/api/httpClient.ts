import axios, { AxiosResponse } from "axios";

export const fetchData = async (url: string): Promise<AxiosResponse | null> => {
    try {
        return await axios.get(url);
    } catch (error) {
        console.error("Erro na requisição HTTP:", error);
        return null;
    }
};

export const postRequest = async (url: string, data: any) => {
    try {
      const response = await axios.post(url, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Erro na requisição POST:', error);
      throw error;
    }
};