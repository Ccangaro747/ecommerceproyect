"use client"
import { auth } from "@/firebase/config"
import { signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { createContext, useContext, useEffect, useState } from "react"


const AuthContext = createContext()
export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState({
        logged: false,
        email: null,
        uid: null
    })

    const createUser = async (values) => {
        try {
            // Valido la dirección de correo electrónico
            if (!values.email || !values.email.trim()) {
                throw new Error("La dirección de correo electrónico no puede estar vacía.");
            }
    
            await createUserWithEmailAndPassword(auth, values.email, values.password);
            console.log("Usuario creado exitosamente");
        } catch (error) {
            console.error("Error al crear el usuario:", error.message);
            throw error;
        }
    };
    
    const registerUser = async (values) => {
        try {
            await createUserWithEmailAndPassword(auth, values.email, values.password);
            console.log("Usuario creado exitosamente");
        } catch (error) {
            console.error("Error al crear el usuario:", error.message);
            throw error;
        }
    };
    const loginUser = async (values) => {
        await signInWithEmailAndPassword(auth, values.email, values.password)
    }

    const logout = () => {
        signOut(auth)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log(user)
            if (user) {
                setUser({
                    logged: true,
                    email: user.email,
                    uid: user.uid
                })
            } else {
                setUser({
                    logged: false,
                    email: null,
                    uid: null
                })
            }
        })
    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            createUser,
            loginUser,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}