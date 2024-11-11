'use client';

import {  useState } from "react";
import { addMedicationReminder } from "@/services/medicationService";
import { sendSMSNotification } from "@/services/notificationService";
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

        if (!user.phoneNumber) {
            alert("Número de telefone não encontrado.");
            return;
        }

        const phoneNumber = user.phoneNumber;
        const newMedication: MedicationProps = {
            name: medicationName,
            dosage,
            time,
        };

        await addMedicationReminder(user.uid, newMedication);
        await requestNotificationPermission();

        const currentTime = new Date();
        const medicationTime = new Date();
        const [hours, minutes] = time.split(':').map(Number);
        medicationTime.setHours(hours, minutes, 0, 0);

        if (medicationTime < currentTime) {
            medicationTime.setDate(medicationTime.getDate() + 1);
        }
        
        const timeDifference = medicationTime.getTime() - currentTime.getTime();

        if (timeDifference > 0) {
            setTimeout(async () => {
                try {
                    const message = `Lembrete: Tome sua medicação "${medicationName}" (${dosage}) às ${time}.`;
                    const response = await sendSMSNotification(phoneNumber, message);
                } catch (error) {
                    console.error("Erro ao enviar SMS:", error);
                }
            }, timeDifference);
        } else {
            console.warn("Horário de medicação já passou.");
        }
        
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
                    <ButtonComponent size="medium" fullWidth>Adicionar Lembrete</ButtonComponent>
                </form>
            </ContainerMedicamentForm>
        </>
    );
}