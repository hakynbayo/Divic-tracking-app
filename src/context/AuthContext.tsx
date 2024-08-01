import React, { createContext, useContext, useState, ReactNode } from 'react';

// The AuthContextType interface
interface AuthContextType {
    isAuthenticated: boolean; // Authentication state
    login: () => void; // Function to log in
    logout: () => void; // Function to log out
}

// Create the AuthContext with an undefined default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// The AuthProvider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false); // State to track authentication

    // Function to log in
    const login = () => {
        setIsAuthenticated(true);
    };

    // Function to log out
    const logout = () => {
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};