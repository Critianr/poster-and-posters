import { useState } from 'react'
import {Header} from './components/Header/Header';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Main} from './components/Main.jsx';
// import reactLogo from './assets/react.svg'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)


  return (
    <div className="App">
      <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        
        <Route />
      </Routes>       
      </Router>
    </div>
  )
}

export default App
{/* <h1>Vite + React</h1>
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
      </p> */}