import {createContext, useContext, useState} from 'react';

const AppContext = createContext({});


export function AppWrapper({children}) {
    const [user, setUser] = useState()
    const [web3Context, setWeb3Context] = useState()
    const sharedState = {user, setUser,web3Context,setWeb3Context}
    return (
        <AppContext.Provider value={sharedState}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
