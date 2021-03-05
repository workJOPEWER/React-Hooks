import React, {useState} from 'react';

//вычисляем значение
function computeInitialCounter() {
    console.log('some ....');
    return Math.trunc(Math.random() * 20)
}

function State() {
    // const [counter, setCounter] = useState(0);
    // const [counter, setCounter] = useState(computeInitialCounter()); //вызывается повторно

    //оптимизируем состояние и исключаем повторный рендер за счет добавления колбэка в стэйт
    const [counter, setCounter] = useState(() => {
        return computeInitialCounter()
    });

    //стейт в формате объекта
    const [state, setState] = useState({
        title: 'Счетчик',
        date: Date.now()
    });


    function increment() {
        //шаг + 1
        // setCounter(counter + 1)

        //шаг счетчика + 2
        setCounter((prevCounter) => {
            return prevCounter + 1
        });
        setCounter(prev => prev + 1)
    }

    function decrement() {
        setCounter(counter - 1)
    }

    //формируем новый объект основываясь на предыдущем состоянии
    function updateTitle() {
        setState(prev => {
            return {
                ...prev,
                title: 'New state'
            }
        })
    }

    return (
        <div>
            <h1>Счетчик : {counter}</h1>
            <button onClick={increment} className="btn btn-outline-success btn-sm">Добавить</button>
            &nbsp;
            <button onClick={decrement} className="btn btn-outline-danger btn-sm">Убрать</button>

            {/*данная запись полностью меняет объект*/}
            {/*<button onClick={() => setState({title: 'New state'})} className="btn btn-default btn-sm">Изменить состояние</button>*/}

            <button onClick={updateTitle} className="btn btn-default btn-sm">Изменить состояние</button>

            {/*вывелили состояние*/}
            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
    );
}

export default State;
