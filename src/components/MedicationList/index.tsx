'use client';

import { useEffect, useState } from "react";
import { getMedications } from "@/services/medicationService";
import { MedicationProps } from "@/types";
import { TextComponent, TitleComponent } from "@/components/Typography";
import { ListDetailsContainer, ListMedicationsContainer } from "./style";
import { auth } from "@/app/firebase/firebaseConfig";

export const MedicationList = () => {
    const [medications, setMedications] = useState<MedicationProps[]>([]);

    useEffect(() => {
        const fetchMedications = async () => {
            if (!auth || !auth.currentUser) {
                console.error("Usuário não autenticado ou serviço de autenticação não inicializado.");
                return;
            }
            
            const userId = auth.currentUser?.uid;
            if (userId) {
                const medicationList = await getMedications(userId);
                setMedications(medicationList);
            } else {
                console.error("Usuário não autenticado ou userId está indefinido.");
            }
        };
        fetchMedications();
    }, []);

    return (
        <ListMedicationsContainer>
            <TitleComponent as="h3">Lembretes de Medicação:</TitleComponent>
            <ListDetailsContainer>
                <ul>
                    {medications.map((medication) => (
                        <li key={medication.id}>
                            <TextComponent as="p">
                                {medication.name} - {medication.dosage} - {medication.time}
                            </TextComponent>
                        </li>
                    ))}
                </ul>
            </ListDetailsContainer>
        </ListMedicationsContainer>
    );
};