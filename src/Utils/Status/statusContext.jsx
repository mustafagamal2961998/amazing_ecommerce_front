"use client";
import { createContext, useContext, useState } from "react";

const StatusContext = createContext({
    isLoggedIn: false,
    setIsLoggedIn: () => false,
    isLoading: false,
    setIsLoading: () => false,
    successMsg: null,
    setSuccessMsg: () => null,
    err: null,
    setErr: () => null,
});

export const StatusContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState(null);
    const [err, setErr] = useState(null);

    return (
        <StatusContext.Provider value={{ isLoggedIn, setIsLoggedIn, isLoading, setIsLoading, successMsg, setSuccessMsg, err, setErr }}>
            { children }
        </StatusContext.Provider>
    );
};

export const useStatusContext = () => useContext(StatusContext);