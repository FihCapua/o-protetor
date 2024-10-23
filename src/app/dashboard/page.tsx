'use client'

import { useEffect } from "react";
import { useAuth } from "@/providers/AuthProvider";
import { useRouter } from "next/router";

const Dashboard = () => {
    const { user, logout } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
        router.push("/login")
        }
    }, [user, router]);

    if (!user) return <p>Carregando...</p>

    return (
        <div>
        <h1>Bem-vindo, {user.email}!</h1>
        <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Dashboard;