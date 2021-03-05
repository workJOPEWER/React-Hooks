import React from 'react'
import {useAlertToogle} from "./Alert/AlertContext";

export default function Main() {
    const toggle = useAlertToogle()
    return (
        <>
            <h1>Пример с Context example</h1>
            <button onClick={toggle} className="btn btn-outline-success btn-sm">Показать Алерт</button>
        </>
    )
}