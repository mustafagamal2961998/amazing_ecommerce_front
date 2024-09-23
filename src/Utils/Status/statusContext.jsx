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
    billMood: false,
    setBillMood: () => false,
    billsMood: true,
    setBillsMood: () => true,
    salesBills: false,
    setSalesBills: () => false,
    purchasesBills: false,
    setPurchasesBills: () => false,
});

export const StatusContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState(null);
    const [err, setErr] = useState(null);
    const [billMood, setBillMood] = useState(false);
    const [billsMood, setBillsMood] = useState(true);
    const [salesBills, setSalesBills] = useState(false);
    const [purchasesBills, setPurchasesBills] = useState(false);
    const [settingsMood, setSettingsMood] = useState(false);
    const [addCompanyMood, setAddCompanyMood] = useState(false);
    const [showCompanyMood, setShowCompanyMood] = useState(false);
    const [maintenanceMood, setMaintenanceMood] = useState(false);
    const [sidebar, setSidebar] = useState(true);
    const [ordersMood, setOrdersMood] = useState('khazanty');
    const [manufacturingMood, setManufacturingMood] = useState('clientData');

    return (
        <StatusContext.Provider 
        value={{ 
            isLoggedIn, 
            setIsLoggedIn, 
            isLoading, 
            setIsLoading, 
            successMsg, 
            setSuccessMsg, 
            err, 
            setErr, 
            billMood, 
            setBillMood, 
            billsMood, 
            setBillsMood, 
            purchasesBills, 
            setPurchasesBills, 
            salesBills, 
            setSalesBills, 
            settingsMood, 
            setSettingsMood,
            addCompanyMood, 
            setAddCompanyMood,
            showCompanyMood,
            setShowCompanyMood,
            maintenanceMood, 
            setMaintenanceMood,
            sidebar,
            setSidebar,
            ordersMood, 
            setOrdersMood,
            manufacturingMood, 
            setManufacturingMood
        }}>
            { children }
        </StatusContext.Provider>
    );
};

export const useStatusContext = () => useContext(StatusContext);