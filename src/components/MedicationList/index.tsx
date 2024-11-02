'use client';

import { useEffect, useState } from "react";
import { getMedications } from "@/services/medicationService";
import { MedicationProps } from "@/types";
import { TextComponent, TitleComponent } from "@/components/Typography";
import { ListDetailsContainer, ListMedicationsContainer } from "./style";

export const MedicationList = () => {
    const [medications, setMedications] = useState<MedicationProps[]>([]);

    useEffect(() => {
        const fetchMedications = async () => {
            const medicationList = await getMedications();
            setMedications(medicationList);
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