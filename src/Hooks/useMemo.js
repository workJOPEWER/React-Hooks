import React, {useState, useEffect, useMemo} from 'react';

// сложное вычисление. торможение - удар по производительности
function complexCompute(num) {
    let i = 0;
    while (i < 100000000) i++;
    return num * 2
}

function Memo() {
    // useMemo возвращает не саму функцию, а результат её выполнения.
    // useMemo взаимозаменямыми.
    // useMemo используется для сохранения результатов тяжёлых вычислений, например обработка массива.
    // useMemo вызывать только в случае крайней необходимости

    const [number, setNumber] = useState(42);
    const [colored, setColored] = useState(false);

    // const styles = {
    //     color: colored ? 'darkred' : 'black'
    // };
    const styles = useMemo(() => ({
        color: colored ? 'darkred' : 'black'
    }), [colored]);

    // useMemo кэшируем вычислительное свойство
    // оптимизирум код
    const computed = useMemo(() => {
        return complexCompute(number)
    }, [number]);

    useEffect(() => {
        console.log('Styles changed')
    }, [styles]);

    return (
        <div>
            <h1 style={styles}>Вычислительное свойство : {computed} </h1>
            <button onClick={() => setNumber(prev => prev + 1)} className="btn btn-outline-success btn-sm">Добавить
            </button>
            &nbsp;
            <button onClick={() => setNumber(prev => prev - 1)} className="btn btn-outline-danger btn-sm">Убрать
            </button>
            &nbsp;
            <button onClick={() => setColored(prev => !prev)} className="btn btn-outline-danger btn-sm">Изменить
            </button>

        </div>
    );
}

export default Memo;
