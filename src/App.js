import React, {useState, useEffect} from 'react';

//base custom hook
function useLogger(value) {
    useEffect(() => {
        console.log('Value changed :', value)
    }, [value])
}

//универсальный код
function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    const onChange = event => {
        setValue(event.target.value)
    };

    const clear = () => setValue(' ')
    return {
        bind: {value, onChange},
        value,
        clear
    }
}

function App() {
    // const [name, setName] = useState(' ')
    const input = useInput(' ');

    useLogger(input.value);

    return (
        <div className={'container pt-4'}>
            {/*<input type="text" value={input.value} onChange={input.onChange}/>*/}
            {/*ключи совпадают с пораметрами input, поэтому используем синтаксис реакта*/}
            <input type="text" {...input.bind} />
            &nbsp;
            <button onClick={() => input.clear()} className="btn btn-warning btn-sm">Очистить</button>
            <hr/>
            <h1>{input.value} </h1>
        </div>
    )
}

export default App;
