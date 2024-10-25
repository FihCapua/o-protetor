'use client'

import { Block, Container, FullWidthBlock } from "./style";
import { Title } from "../login/style";
import ProtectedRoute from "@/components/ProtectedRoute";
import Header from "@/components/Header";
import { Text } from "@/components/Typography/style";
import { ButtonComponent } from "@/components/Button";

const Dashboard = () => {
    return (
        <ProtectedRoute>
            <Header />
            <Container>
                <Block>
                    <Title as="h2">Botão de Emergência</Title>
                    <Text as="p">Envie sua localização para contatos de emergência com um clique.</Text>
                    <ButtonComponent size="small" fullWidth>Enviar localização</ButtonComponent>
                </Block>

                <Block>
                    <Title as="h2">Contatos de Emergência</Title>
                    <Text as="p">Tenha acesso rápido a seus contatos de emergência.</Text>
                    <ButtonComponent size="small" fullWidth>Ver Contatos</ButtonComponent>
                </Block>

                <Block>
                    <Title as="h2">Minhas medicações</Title>
                    <Text as="p">Programe lembretes para tomar seus medicamentos no horário certo.</Text>
                    <ButtonComponent size="small" fullWidth>Adicionar Lembrete</ButtonComponent>
                </Block>

                <Block>
                    <Title as="h2">Dicas de Segurança Diárias</Title>
                    <Text as="p">Receba dicas diárias para garantir sua segurança e bem-estar.</Text>
                    <ButtonComponent size="small" fullWidth>Ver Dicas</ButtonComponent>
                </Block>

                <FullWidthBlock>
                    <Title as="h2">Jogos que estimulam a mente</Title>
                    <Text as="p">Estimule agora sua mente com jogos que ajudam na memória e cognição.</Text>
                    <ButtonComponent size="small" fullWidth>Jogar Agora</ButtonComponent>
                </FullWidthBlock>
            </Container>
        </ProtectedRoute>
    );
};

export default Dashboard;