import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'


const initialState = {
    transactions: [
        { id: 1, text: "groceries", amount:-25 },
        { id:2, text: "bills", amount: 170}
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions
        }}>
            {children}
        </GlobalContext.Provider>
    );
}