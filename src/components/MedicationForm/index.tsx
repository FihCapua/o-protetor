'use client';

import { useState } from "react";
import { addMedicationReminder } from "@/services/medicationService";
import { MedicationProps } from "@/types";
import { ButtonComponent } from "@/components/Button";
import { TitleComponent } from "../Typography";
import { ContainerMedicamentForm } from "./style";
import { InputField } from "../Input";

const requestNotificationPermission = async () => {
    if ('Notification' in window) {
        const permission = await Notification.requestPermission();
        if (permission !== 'granted') {
            console.warn('Permissão de notificação não concedida.');
        }
    }
};

const scheduleDailyNotification = (medication: MedicationProps) => {
    const now = new Date();
    const [hours, minutes] = medication.time.split(':').map(Number);
    const notificationTime = new Date();
    notificationTime.setHours(hours, minutes, 0, 0);

    if (notificationTime.getTime() <= now.getTime()) {
        notificationTime.setDate(notificationTime.getDate() + 1);
    }

    const scheduleNextNotification = () => {
        const delay = notificationTime.getTime() - new Date().getTime();
        
        setTimeout(() => {
            if (Notification.permission === 'granted') {
                navigator.serviceWorker.ready.then(registration => {
                    registration.showNotification(`Hora de tomar o remédio: ${medication.name}`, {
                        body: `Dosagem: ${medication.dosage}`,
                        // icon: '/icon-192x192.png',
                    });
                });
            }
            notificationTime.setDate(notificationTime.getDate() + 1);
            scheduleNextNotification();
        }, delay);
    };

    scheduleNextNotification(); 
};

export const MedicationForm = () => {
    const [medicationName, setMedicationName] = useState('');
    const [dosage, setDosage] = useState('');
    const [time, setTime] = useState('');
    
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const newMedication: MedicationProps = {
            name: medicationName,
            dosage,
            time,
        };

        await addMedicationReminder(newMedication);
        await requestNotificationPermission();
        scheduleDailyNotification(newMedication);
        
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