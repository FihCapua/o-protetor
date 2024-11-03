'use client'

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, database } from "../firebase/firebaseConfig"
import { doc, setDoc } from "firebase/firestore";
import { TitleComponent } from "@/components/Typography";
import { Container, ErrorMessage, Form, Input, Label, SuccessMessage } from "./style";
import { ButtonComponent } from "@/components/Button";
import { PhoneInput } from "@/components/Input/PhoneInput";

const AuthClient = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState('');

    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value);

    const handleAuthRegister = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formattedPhoneNumber = `+55${phoneNumber.replace(/\D/g, '')}`;

        setError('');
        setMessage('');

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(database, "users", user.uid), {
              email,
              formattedPhoneNumber,
              userId: user.uid,
          });

            console.log("Usuário registrado com sucesso!", auth, email, password);
            setMessage('Usuário registrado com sucesso!');
            setEmail('');
            setPassword('');
            setPhoneNumber('');
        } catch (error: Error | any) {
            setError(`Erro ao registrar o usuário: ${error.message}`);
            setEmail('');
            setPassword('');
            setPhoneNumber('');
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
         <Label htmlFor="phone">Número de Telefone:</Label>
          <PhoneInput
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {message && <SuccessMessage>{message}</SuccessMessage>}
        <ButtonComponent fullWidth size="small">Registrar-se</ButtonComponent>
      </Form>
    </Container>
      );
}

export default AuthClient