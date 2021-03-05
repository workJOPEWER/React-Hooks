import React, {useContext} from 'react';
import {useAlert} from "./AlertContext";

export default function Alert() {
    const alert = useAlert();

    if (!alert.visible) return null

    return (
        <div className="alert alert-danger" role="alert" onClick={alert.toggle}>
            A simple danger alert—check it out!
        </div>
    )

}