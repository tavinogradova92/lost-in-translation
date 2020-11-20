import React, { createContext, useState } from 'react';

export const AppContext = createContext();

function AppProvider(props) {

    const [ username, setUsername ] = useState(null);
    const [ isLoggedIn, changeLoginStatus ] = useState(false);

    const appState = {
        username,
        setUsername,
        isLoggedIn,
        changeLoginStatus
    }

    return (
        <AppContext.Provider value={ appState }>
            { props.children }
        </AppContext.Provider>
    )
}

export default AppProvider;