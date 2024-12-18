'use client'

import { useEffect, useState } from 'react'
import { redirect } from 'next/navigation'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../firebase/firebaseConfig"
import { useAuth } from '@/providers/AuthProvider'
import { Container, ErrorMessage, Form, Input, Label, SuccessMessage, Title } from './style'
import { ButtonComponent } from '@/components/Button'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const { user } = useAuth()

      if (user) {
        redirect("/dashboard")
      }
  
    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      setError('')
      setMessage('')

      if (!auth) {
        setError("Erro ao inicializar o serviço de autenticação.");
        return;
      }
  
      try {
        await signInWithEmailAndPassword(auth, email, password)
        setMessage('Login realizado com sucesso!')
      } catch (error: Error | any) {
        setError('Erro ao fazer login: ' + error.message)
      }
    }

    if (user) {
      return null
    }
  
    return (
      <Container>
        <Title>Login</Title>
        <Form onSubmit={handleLogin}>
          <Label htmlFor="email">Email:</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
            required
          />
          <Label htmlFor="password">Senha:</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
            required
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {message && <SuccessMessage>{message}</SuccessMessage>}
          <ButtonComponent size='medium' variant='secondary' fullWidth>Entrar</ButtonComponent>
        </Form>
      </Container>
    )
}

export default Login