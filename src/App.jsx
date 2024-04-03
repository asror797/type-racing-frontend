import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Game from './pages/game'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' Component={Game}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
