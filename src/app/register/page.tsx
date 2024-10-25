'use client'

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig"
import { TitleComponent } from "@/components/Typography";
import { Container, ErrorMessage, Form, Input, Label, SuccessMessage } from "./style";
import { ButtonComponent } from "@/components/Button";

const AuthClient = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState('');

    const handleAuthRegister = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log("Usuário registrado com sucesso!", auth, email, password);
            setMessage('Usuário registrado com sucesso!');
            setEmail('');
            setPassword('');
        } catch (error: Error | any) {
            setError(`Erro ao registrar o usuário: ${error.message}`);
            setEmail('');
            setPassword('');
        }
    }

    return (
      <Container>
      <TitleComponent as="h1">Registrar-se</TitleComponent>
      <Form onSubmit={handleAuthRegister}>
        <Label htmlFor="email">Email:</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Label htmlFor="password">Senha:</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {message && <SuccessMessage>{message}</SuccessMessage>}
        <ButtonComponent fullWidth size="small">Registrar-se</ButtonComponent>
      </Form>
    </Container>
      );
}

export default AuthClient