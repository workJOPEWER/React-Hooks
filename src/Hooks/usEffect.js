import React, {useState, useEffect} from 'react';


function App() {
    const [type, setType] = useState('users');
    const [data, setData] = useState([]);
    const [pos, setPos] = useState({
        x: 0, y: 0
    });

    //вызывается при каждом рендеринге
    //отслеживаем каждый рендеринг
    // useEffect(() => {
    // },[]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json))

        // зачистка при каждом входе в данный колбэк
        // return () => {
        //     console.log('clean type')
        // }

    }, [type]);

    const mouseMoveHandler = e => {
        setPos({
            x: e.clientX,
            y: e.clientY
        })
    };

    //имитируем готовность компонента
    //компонент зарендерился
    useEffect(() => {
        console.log('ComponentDidMount');
        // прослушиваем движение мыши
        window.addEventListener('mousemove', mouseMoveHandler);

        // удаляем прослушивателя
        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler)
        }
    }, []);

    return (
        <div>
            <h1>Resurs : {type}</h1>
            <button onClick={() => setType('users')} className="btn btn-outline-success btn-sm">Пользователи</button>
            &nbsp;
            <button onClick={() => setType('todos')} className="btn btn-outline-danger btn-sm">Блокнот</button>
            &nbsp;
            <button onClick={() => setType('posts')} className="btn btn-outline-secondary btn-sm">Посты</button>

            {/*вывод данных*/}
            {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
            <pre>{JSON.stringify(pos, null, 2)}</pre>
        </div>
    );
}

export default App;
