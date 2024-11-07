'use client'

import { Block, Container, FullWidthBlock } from "./style";
import { Title } from "../login/style";
import ProtectedRoute from "@/components/ProtectedRoute";
import Header from "@/components/Header";
import { Text } from "@/components/Typography/style";
import { ButtonComponent } from "@/components/Button";
import { EmergencyButton } from "@/components/EmergencyButton";
import Link from "@/components/Link";

const Dashboard = () => {

    return (
        <ProtectedRoute>
            <Header />
            <Container>
                <Block>
                    <Title as="h2">Botão de Emergência</Title>
                    <Text as="p">Envie sua localização para contatos de emergência com um clique.</Text>
                    <EmergencyButton />
                </Block>

                <Block>
                    <Title as="h2">Contatos de Emergência</Title>
                    <Text as="p">Tenha acesso rápido a seus contatos de emergência.</Text>
                    <ButtonComponent size="small" fullWidth>
                        <Link href="/list-contact">Ver Contatos</Link>
                    </ButtonComponent>
                    <ButtonComponent size="small" fullWidth>
                        <Link href="/new-contact">Cadastrar Contato</Link>
                    </ButtonComponent>
                </Block>

                <Block>
                    <Title as="h2">Minhas medicações</Title>
                    <Text as="p">Programe lembretes para tomar seus medicamentos no horário certo.</Text>
                    <ButtonComponent size="small" fullWidth>
                        <Link href="/list-medication">Ver Medicamentos</Link>
                    </ButtonComponent>
                    <ButtonComponent size="small" fullWidth>
                        <Link href="/new-medication">Cadastrar Medicamento</Link>
                    </ButtonComponent>
                </Block>

                <Block>
                    <Title as="h2">Dicas de Segurança Diárias</Title>
                    <Text as="p">Veja dicas diárias para garantir sua saúde, segurança e bem-estar.</Text>
                    <ButtonComponent size="small" fullWidth>
                        <Link href="/tip-of-the-day">Ver dica do dia</Link>
                    </ButtonComponent>
                </Block>

                <FullWidthBlock>
                    <Title as="h2">Jogos que estimulam a mente</Title>
                    <Text as="p">Estimule agora sua mente com jogos que ajudam na memória e cognição.</Text>
                    <ButtonComponent size="small" fullWidth>
                        <Link href="/game-list">Ver lista de jogos</Link>
                    </ButtonComponent>
                </FullWidthBlock>
            </Container>
        </ProtectedRoute>
    );
};

export default Dashboard;