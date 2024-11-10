import { fetchData } from "@/services/api/httpClient";

const buildReverseGeocodeUrl = (latitude: number, longitude: number): string => {
    const baseUrl = process.env.NEXT_PUBLIC_NOMINATIM_BASE_URL;
    return `${baseUrl}/reverse?lat=${latitude}&lon=${longitude}&format=json`;
};

export const getAddressFromCoordinates = async (latitude: number, longitude: number): Promise<string | null> => {
    const url = buildReverseGeocodeUrl(latitude, longitude);

    try {
        const response = await fetchData(url);

        if (response && response.data && response.data.address) {
            const { road, neighbourhood, suburb, city, state, country, postcode } = response.data.address;
            const addressParts = [road, neighbourhood, suburb, city, state, postcode, country].filter(Boolean);
            const address = addressParts.join(', ');

            return address || "Endereço não encontrado";
        } else {
            console.warn("Nenhum endereço encontrado para as coordenadas fornecidas.");
            return `Coordenadas: Latitude ${latitude}, Longitude ${longitude}`;
        }
    } catch (error) {
        console.error("Erro ao buscar o endereço:", error);
        return `Coordenadas: Latitude ${latitude}, Longitude ${longitude}`;
    }
};