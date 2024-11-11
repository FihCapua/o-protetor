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
                    <Link href="/list-contact" target='_self'>
                        <ButtonComponent size="medium" fullWidth>
                            Ver Contatos
                        </ButtonComponent>
                    </Link>
                    <Link href="/new-contact" target='_self'>
                        <ButtonComponent size="medium" fullWidth>
                            Cadastrar Contato
                        </ButtonComponent>
                    </Link>
                </Block>

                <Block>
                    <Title as="h2">Minhas medicações</Title>
                    <Text as="p">Programe lembretes para tomar seus medicamentos no horário certo.</Text>
                    <Link href="/list-medication" target='_self'>
                        <ButtonComponent size="medium" fullWidth>
                            Ver Medicamentos
                        </ButtonComponent>
                    </Link>
                    <Link href="/new-medication" target='_self'>
                        <ButtonComponent size="medium" fullWidth>
                            Cadastrar Medicamento
                        </ButtonComponent>
                    </Link>
                </Block>

                <Block>
                    <Title as="h2">Dicas de Segurança Diárias</Title>
                    <Text as="p">Veja dicas diárias para garantir sua saúde, segurança e bem-estar.</Text>
                    <Link href="/tip-of-the-day" target='_self'>
                        <ButtonComponent size="medium" fullWidth>
                            Ver dica do dia
                        </ButtonComponent>
                    </Link>
                </Block>

                <FullWidthBlock>
                    <Title as="h2">Jogos que estimulam a mente</Title>
                    <Text as="p">Estimule agora sua mente com jogos que ajudam na memória e cognição.</Text>
                    <Link href="/game-list" target='_self'>
                        <ButtonComponent size="medium" fullWidth>
                            Ver lista de jogos
                        </ButtonComponent>
                    </Link>
                </FullWidthBlock>
            </Container>
        </ProtectedRoute>
    );
};

export default Dashboard;