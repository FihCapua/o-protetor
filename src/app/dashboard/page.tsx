'use client'

import { useEffect } from "react";
import { useAuth } from "@/providers/AuthProvider";
import { redirect } from "next/navigation";

const Dashboard = () => {
    const { user, logout } = useAuth();

        if (!user) {
            redirect("/login")
        }

    if (!user) return <p>Carregando...</p>

    return (
        <div>
        <h1>Bem-vindo, {user.email}!</h1>
        <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Dashboard;