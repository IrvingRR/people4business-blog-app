import { useState } from "react";
import { createContext } from "react";

export const InternetConnectionContext = createContext();

export const InternetConnectionProvider = ({children}) => {

    const [isOnline, setIsOnline] = useState(true);
    const [isOffline, setIsOffline] = useState(false);

    const chekConnection = async () => {
        try {
            const connection = await window.navigator.onLine;
            return connection;
        } catch (error) {
            console.log('Error connection:', error);
        }
    };

    setInterval(async () => {
        const connectionStatus = await chekConnection();
        if (connectionStatus) {
            setIsOnline(connectionStatus);
            setIsOffline(false);
        } else {
            setIsOffline(true);
            setIsOnline(false);
        }
    }, 5000);

    return (
        <InternetConnectionContext.Provider value={{ isOnline, isOffline }}>
            {children}
        </InternetConnectionContext.Provider>
    );
};