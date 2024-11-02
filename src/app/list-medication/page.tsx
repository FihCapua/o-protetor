'use client'

import ProtectedRoute from "@/components/ProtectedRoute";
import Header from "@/components/Header";
import { MedicationList } from "@/components/MedicationList";

const AddMedicationPage = () => {
    return (
        <ProtectedRoute>
            <Header />
            <div style={{ padding: "20px" }}>
                <MedicationList />
            </div>
        </ProtectedRoute>
    );
};

export default AddMedicationPage;