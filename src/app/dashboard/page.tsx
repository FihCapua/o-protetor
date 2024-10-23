'use client'

import { useEffect } from "react";
import { useAuth } from "@/providers/AuthProvider";
import { redirect } from "next/navigation";
import { Block, Button, Container, FullWidthBlock } from "./style";

const Dashboard = () => {
    const { user, logout } = useAuth();

        if (!user) {
            redirect("/login")
        }

    if (!user) return <p>Carregando...</p>

    return (
        <>
            <h1>Olá, seja bem-vindo, {user.email}!</h1>
            <button onClick={logout}>Logout</button>
            <Container>
                <Block>
                    <h2>Botão de Emergência</h2>
                    <p>Envie sua localização para contatos de emergência com um clique.</p>
                    <Button>Enviar localização</Button>
                </Block>

                <Block>
                    <h2>Contatos de Emergência</h2>
                    <p>Tenha acesso rápido a seus contatos de emergência.</p>
                    <Button>Ver Contatos</Button>
                </Block>

                <Block>
                    <h2>Minhas medicações</h2>
                    <p>Programe lembretes para tomar seus medicamentos no horário certo.</p>
                    <Button>Adicionar Lembrete</Button>
                </Block>

                <Block>
                    <h2>Dicas de Segurança Diárias</h2>
                    <p>Receba dicas diárias para garantir sua segurança e bem-estar.</p>
                    <Button>Ver Dicas</Button>
                </Block>

                <FullWidthBlock>
                    <h2>Jogos que estimulam a mente</h2>
                    <p>Estimule agora sua mente com jogos que ajudam na memória e cognição.</p>
                    <Button>Jogar Agora</Button>
                </FullWidthBlock>
            </Container>
        </>
    );
};

export default Dashboard;