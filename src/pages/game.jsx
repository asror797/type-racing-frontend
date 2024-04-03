import { Button } from 'antd'
import './game.css'

const Game = () => {
  return(
    <div className="game-page">
      <div className="container">
        <div className="game-page-wrapper">
          <h1>Game page</h1>
          <div className="game-playground">
          <div className="racer-wrapper">
              <div className="player-way">
                <p>Moshina</p>
              </div>
              <div className="player-speed">
                45wpm
              </div>
            </div>
            <div className="racer-wrapper">
              <div className="player-way">
                <p>Moshina</p>
              </div>
              <div className="player-speed">
                45wpm
              </div>
            </div>
            <div className="racer-wrapper">
              <div className="player-way">
                <p>Moshina</p>
              </div>
              <div className="player-speed">
                45wpm
              </div>
            </div>
          </div>
          <div className="game-text-container">
            <span className="game-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit qui perspiciatis modi eos magni sapiente deserunt assumenda, cupiditate quasi tempora.</span>
          </div>
          <div className="game-menu-buttons">
            <Button danger size='middle'>Main menu (leave game)</Button>
            <Button type='primary' primary size='middle'>Race again</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Game
