import { fetchData } from "@/services/api/httpClient";

const buildReverseGeocodeUrl = (latitude: number, longitude: number): string => {
    const baseUrl = process.env.NEXT_PUBLIC_NOMINATIM_BASE_URL;
    return `${baseUrl}/reverse?lat=${latitude}&lon=${longitude}&format=json`;
};

export const getAddressFromCoordinates = async (latitude: number, longitude: number): Promise<string | null> => {
    const url = buildReverseGeocodeUrl(latitude, longitude);
    const response = await fetchData(url);

    if (response && response.data && response.data.display_name) {
        return response.data.display_name;
    } else {
        console.error("Nenhum endereço encontrado para as coordenadas fornecidas.");
        return null;
    }
}