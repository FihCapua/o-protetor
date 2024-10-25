'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/providers/AuthProvider";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { user } = useAuth();
    const router = useRouter();
  
    useEffect(() => {
      if (!user) {
        router.push("/login");
      }
    }, [user, router]);
  
    if (!user) return <p>Carregando...</p>;
  
    return <>{children}</>;
  };
  
  export default ProtectedRoute;