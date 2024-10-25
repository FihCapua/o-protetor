'use client'

import Header from "@/components/Header";
import ProtectedRoute from "@/components/ProtectedRoute";
import ContactList from "@/components/ContactList";


const ContactsPage = () => {
    return (
        <ProtectedRoute>
            <Header />
            <div style={{ padding: "20px" }}>
                <ContactList />
            </div>
        </ProtectedRoute>
    );
};

export default ContactsPage;