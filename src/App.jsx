// 外部資源(node_modules)
import { useEffect, useState } from 'react'
import axios from 'axios'

// 以下三個是內部資源 有斜線的
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// https://randomuser.me/
function App() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        (async () => {
            const res = await axios.get('https://randomuser.me/api/');
            console.log(res); // 會看到兩個回傳值，是因為main.jsx的StrictMode - 嚴格模式，可在react的官網找到相關解釋 會先檢查過一次看有沒有甚麼問題
        })()
    }, []);
    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React testtt</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
