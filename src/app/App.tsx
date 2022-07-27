import { useEffect, useState } from 'react'
import { Switch, Button } from '@/shared/ui'
import { service } from '@/shared/api'
import reactLogo from '@/shared/ui/icons/react.svg'
import { Routing } from '@/pages'
import { withRouter } from '@/app/providers/with-router'
import { Link } from 'react-router-dom'
import './App.css'

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
      <Link to='some'>sOME</Link> 
        <Button>
          text
        </Button>
        <Routing />
        <Switch switchColor='bg-blue-600'/>
      </main>
    </div>
  )
}

export default withRouter(App)
