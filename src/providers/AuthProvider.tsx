'use client'

import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut, User as FirebaseUser } from "firebase/auth";
import { auth, database } from "@/app/firebase/firebaseConfig";
import { AuthContextType } from "@/types";
import { doc, getDoc } from "firebase/firestore";

type UserWithPhoneNumber = FirebaseUser & { phoneNumber?: string | null };

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: {children: React.ReactNode}) => {
    const [user, setUser] = useState<UserWithPhoneNumber | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                try {
                    const userDocRef = doc(database, "users", currentUser.uid);
                    const userDoc = await getDoc(userDocRef);

                    if (userDoc.exists()) {
                        const additionalData = userDoc.data();
                        setUser({
                            ...currentUser,
                            phoneNumber: additionalData.phoneNumber || null, // Adiciona o phoneNumber ao objeto user
                        });
                    } else {
                        setUser(currentUser);
                    }
                } catch (error) {
                    console.error("Erro ao buscar dados do usuário no Firestore:", error);
                    setUser(currentUser);
                }
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const logout = async () => {
        await signOut(auth);
    };

    return (
        <AuthContext.Provider value={{ user, loading, logout }}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
  };