'use client'

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, database } from "../firebase/firebaseConfig"
import { doc, setDoc } from "firebase/firestore";
import { TitleComponent } from "@/components/Typography";
import { Container, ErrorMessage, Form, Input, Label, SuccessMessage } from "./style";
import { ButtonComponent } from "@/components/Button";

const AuthClient = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState('');

    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value);

    const handleAuthRegister = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let formattedPhoneNumber = phoneNumber.replace(/\D/g, '');

        if (formattedPhoneNumber.length < 11) {
          setError("O número de telefone deve incluir o DDD e ter pelo menos 11 dígitos.");
          return;
      }

      if (!formattedPhoneNumber.startsWith("55")) {
          formattedPhoneNumber = `55${formattedPhoneNumber}`;
      }
      formattedPhoneNumber = `+${formattedPhoneNumber}`;

        setError('');
        setMessage('');

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(database, "users", user.uid), {
              name,
              email,
              phoneNumber: formattedPhoneNumber,
              userId: user.uid,
          });
          
            setMessage('Usuário registrado com sucesso!');
            setName('');
            setEmail('');
            setPassword('');
            setPhoneNumber('');
        } catch (error: Error | any) {
            setError(`Erro ao registrar o usuário: ${error.message}`);
            setName('');
            setEmail('');
            setPassword('');
            setPhoneNumber('');
        }
    }

    return (
      <Container>
      <TitleComponent as="h1">Registrar-se</TitleComponent>
      <Form onSubmit={handleAuthRegister}>
        <Label htmlFor="name">Nome:</Label>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          />
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
          <Input
            id="phone"
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
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