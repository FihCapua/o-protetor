'use client'

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig"
import { Button, Container, ErrorMessage, Form, Input, Label, SuccessMessage, Title } from "./style";

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
      <Title>Registrar-se</Title>
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
        <Button type="submit">Registrar</Button>
      </Form>
    </Container>
      );
}

export default AuthClient