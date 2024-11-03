'use client';

import { useEffect, useState } from "react";
import { addMedicationReminder } from "@/services/medicationService";
import { requestNotificationPermission } from "@/helpers/requestNotificationPermission";
import { useAuth } from "@/providers/AuthProvider";
import { MedicationProps } from "@/types";
import { ButtonComponent } from "@/components/Button";
import { TitleComponent } from "../Typography";
import { ContainerMedicamentForm } from "./style";
import { InputField } from "../Input";



export const MedicationForm = () => {
    const [medicationName, setMedicationName] = useState('');
    const [dosage, setDosage] = useState('');
    const [time, setTime] = useState('');

    const { user } = useAuth();

    
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!user) {
            alert("Usuário não autenticado.");
            return;
        }

        const newMedication: MedicationProps = {
            name: medicationName,
            dosage,
            time,
        };

        await addMedicationReminder(user.uid, newMedication);
        await requestNotificationPermission();
        
        setMedicationName('');
        setDosage('');
        setTime('');
    };

    return (
        <>
            <TitleComponent as="h3">Cadastrar medicamentos</TitleComponent>

            <ContainerMedicamentForm>
                <form onSubmit={handleSubmit}>
                    <InputField
                        type="text"
                        placeholder="Nome da Medicação:"
                        value={medicationName}
                        onChange={(e) => setMedicationName(e.target.value)}
                        required
                    />
                    <InputField
                        type="text"
                        placeholder="Dosagem:"
                        value={dosage}
                        onChange={(e) => setDosage(e.target.value)}
                        required
                    />
                    <InputField
                        type="time"
                        placeholder="Horário:"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    />
                    <ButtonComponent size="small" fullWidth>Adicionar Lembrete</ButtonComponent>
                </form>
            </ContainerMedicamentForm>
        </>
    );
}