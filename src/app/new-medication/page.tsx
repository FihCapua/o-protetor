'use client'

import ProtectedRoute from "@/components/ProtectedRoute";
import Header from "@/components/Header";
import { MedicationForm } from "@/components/MedicationForm";

const AddMedicationPage = () => {
    return (
        <ProtectedRoute>
            <Header />
            <div style={{ padding: "20px" }}>
                <MedicationForm />
            </div>
        </ProtectedRoute>
    );
};

export default AddMedicationPage;