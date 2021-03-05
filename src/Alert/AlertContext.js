import React, {useContext, useState} from 'react'

const AlertContext = React.createContext();
// const AlertToogleContext = React.createContext();

export const useAlert = () => {
    return useContext(AlertContext)
}

// export const useAlertToogle = () => {
//     return useContext(AlertToogleContext)
// };

//реализуем изолированная логика относительно алерта

export const AlertProvider = ({children}) => {
    const [alert, setAlert] = useState(false);

    const toggle = () => setAlert(prev => !prev);

    return (
        <AlertContext.Provider value={{
            visible: alert,
            toggle
        }}>
                {children}
        </AlertContext.Provider>
    )
}