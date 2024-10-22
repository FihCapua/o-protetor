'use client'

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig"

const AuthClient = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleAuthRegister = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log("Usuário criado com sucesso!");
        } catch (error: Error | any) {
            setError(error.message);
        }
    }

    return (
        <div>
          <h1>Registrar-se</h1>
          <form onSubmit={handleAuthRegister}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Senha:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p>{error}</p>}
            <button type="submit">Registrar</button>
          </form>
        </div>
      );
}

export default AuthClient