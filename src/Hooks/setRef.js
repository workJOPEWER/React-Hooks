import React, {useState, useEffect, useRef} from 'react';

//переменная все компонента. плохая практика.
// let renderCount = 1;

function Ref() {
    //useRef сохраняет состояние при работе с компонентом при рендере,
    // но сам не вызывает рендер

    // const [renderCount, setRenderCount] = useState(1);
    const [value, setValue] = useState('initial');

    //не просто значение, а объект со своиством current
    //состояния сохраняются между рендерами компонента и не хотим перерисовывать
    const renderCount = useRef(1);

    //получаем ссылки на дом елементы
    const inputRef = useRef(null);

    //получаем значение предыдущего стейта вэлью
    const prevValue = useRef('');

    //бесконечный луп
    // useEffect(() => {
    //     setRenderCount(prev => prev + 1)
    // })

    useEffect(() => {

        //обращаемся к своиству current
        renderCount.current++;
        console.log(inputRef.current.value)
    });

    useEffect(() => {
        prevValue.current = value
    }, [value]);

    const focus = () => {
        // дом эллемент inputRef.current
        inputRef.current.focus()
    }

    return (
        <div>
            <h1>Количество рендеров : {renderCount.current} </h1>
            <h2>Прошлое состояние : {prevValue.current} </h2>
            <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value}/>
            <button type="button" className="btn btn-success" onClick={focus}>Фокус</button>
        </div>
    );
}

export default Ref;
