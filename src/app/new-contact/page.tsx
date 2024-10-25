'use client'

import ProtectedRoute from "@/components/ProtectedRoute";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";

const AddContactPage = () => {
    return (
        <ProtectedRoute>
            <Header />
            <div style={{ padding: "20px" }}>
                <ContactForm />
            </div>
        </ProtectedRoute>
    );
};

export default AddContactPage;