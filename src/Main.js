import React from 'react'
import {useAlert} from "./Alert/AlertContext";

export default function Main() {
    const {show} = useAlert();
    return (
        <>
            <h1>Пример с Context example</h1>
            <button onClick={() => show('Privet iz Main.js')} className="btn btn-outline-success btn-sm">Показать
                Алерт
            </button>
        </>
    )
}