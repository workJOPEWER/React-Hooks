import React, {useState, useCallback} from 'react';
import ItemsList from "./../ItemsList";

function App() {
    // useCallback получает на функцию и массив аргументов,
    // и возвращает одну и туже функцию, до тех пор,
    // пока аргументы не изменились
    // useMemo отличается тем, что он возвращает не саму функцию, а результат её выполнения

    //useCallback не изменяется при рендере/ кэшировалась
    // / отсутствие рекурсивных вызовов/ исключаем стороннии проблемы

    const [colored, setColored] = useState(false);
    const [count, setCount] = useState(1);

    const styles = {
        color: colored ? 'darkred' : 'black'
    };

    //создаем массив длинной count
    //fill заполняем пустыми строчками
    //map трансформируем массив в новый массив
    //(_, i) - индекс вторым параметром. элемент _ не интересен
    // const generateItemFromAPI = useCallback(() => {
    //     return new Array(count).fill('').map((_, i) => `Элемент ${i + 1}`)
    // },[count])

    const generateItemFromAPI = useCallback((indexnumber) => {
        return new Array(count).fill('').map((_, i) => `Элемент ${i + indexnumber}`)
    }, [count])

    // useEffect(() => {
    // }, []);

    return (
        <div>
            <h1 style={styles}>Количество элементов : {count} </h1>
            <button onClick={() => setCount(prev => prev + 1)} className="btn btn-outline-success btn-sm">Добавить
            </button>
            &nbsp;
            <button onClick={() => setColored(prev => !prev)} className="btn btn-outline-danger btn-sm">Изменить
            </button>

            <ItemsList getItems={generateItemFromAPI}/>

        </div>
    );
}

export default App;
