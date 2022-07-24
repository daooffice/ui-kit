import { useEffect, useState } from 'react'
import { Switch } from '@/shared/ui'
import { service } from '@/shared/api'
import reactLogo from '@/shared/ui/icons/react.svg'

import './App.css'
import '../index.css'

const App = () => {
  const [count, setCount] = useState('')

  return (
    <div className="App">
      <header className="header">
        <div>
          <a href="https://vitejs.dev">
            {/* <img src="/vite.svg" className="logo" alt="Vite logo" /> */}
          </a>
          <a href="https://reactjs.org">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 className="font-bold bg-red-500">Vite + React</h1>
        <h4 className="text-slate-500">Some new text</h4>
      </header>

      <main>
        <button
          className="bg-blue-500 text-white border-slate-700 px-2 rounded-md 
        hover:bg-violet-600
        hover:opacity-75
        ">
          text
        </button>

        <Switch />
      </main>
    </div>
  )
}

export default App
