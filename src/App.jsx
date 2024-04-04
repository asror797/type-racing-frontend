import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Game from './pages/game/game'
import Login from './pages/login/login'
import Signup from './pages/signup/signup'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' Component={Game}/>
        <Route exact path='/signin' Component={Login}/>
        <Route exact path='/sign-up' Component={Signup}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
