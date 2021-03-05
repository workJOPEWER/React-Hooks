import React from 'react';
import Main from './../Main';
import Alert from './../Alert/Alert';
import {AlertProvider} from "../Alert/AlertContext";

function Context() {
    return (
        <AlertProvider value={alert}>
            <div className={'container pt-4'}>
                <Alert/>
                <Main toggleAlert={() => {}}/>
            </div>
        </AlertProvider>
    )
}

export default Context;
