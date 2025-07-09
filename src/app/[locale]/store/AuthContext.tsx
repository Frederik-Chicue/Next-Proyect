"use client"

import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode
} from "react";

type AuthContextType = {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
    isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const storedAuth = localStorage.getItem("isLoggedIn");
        if (storedAuth === "true") {
        setIsAuthenticated(true);
        }
        setIsLoading(false);
    }, []);

    const login = () => {
        localStorage.setItem("isLoggedIn", "true");
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem("isLoggedIn");
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, isLoading }}>
        {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth debe usarse dentro de AuthProvider");
    return context;
};
