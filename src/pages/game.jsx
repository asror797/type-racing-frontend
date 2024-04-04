import './game.css'
import { Button } from 'antd'
import Leaderboard from '../components/leaderboard/leaderboard'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import auto from '../assets/Auto_5.png'
import auto1 from '../assets/Auto_7.png'
import auto2 from '../assets/Auto_6.png'
import auto3 from '../assets/Auto_8.png'
import auto4 from '../assets/Auto_4.png'

const Game = () => {
  return(
    <>
      <Navbar/>
      <div className="game-page">
        <div className="container">
          <div className="game-page-wrapper">
            <h3>Waiting for more people...</h3>
            <div className="game-playground">
              <div className="racer-wrapper">
                <div className="player-way">
                <div className="player-car-wrapper">
                    <div className="player-name">You (Guest)</div>
                    <img height={40} src={auto}  alt="car" />
                  </div>
                </div>
                <div className="player-speed">
                  45wpm
                </div>
              </div>
              <div className="racer-wrapper">
                <div className="player-way">
                  <div className="player-car-wrapper">
                    <div className="player-name">Babur (babur20)</div>
                    <img height={40} src={auto1}  alt="car" />
                  </div>
                </div>
                <div className="player-speed">
                  45wpm
                </div>
              </div>
              <div className="racer-wrapper">
                <div className="player-way">
                  <div className="player-car-wrapper">
                    <div className="player-name">Jamshid (Jamshid13)</div>
                    <img height={40} src={auto2}  alt="car" />
                  </div>
                </div>
                <div className="player-speed">
                  45wpm
                </div>
              </div>
              <div className="racer-wrapper">
                <div className="player-way">
                <div className="player-car-wrapper">
                    <div className="player-name">Kamol (kmln)</div>
                    <div className='player-car-image'>
                      <img height={40} src={auto3}  alt="car" />
                    </div>
                  </div>
                </div>
                <div className="player-speed">
                  45wpm
                </div>
              </div>
              <div className="racer-wrapper">
                <div className="player-way">
                  <div className="player-car-wrapper">
                    <div className="player-name">Akbar (acrdrkbr)</div>
                    <div className='player-car-image'>
                      <img height={40} src={auto4}  alt="car" />
                    </div>
                  </div>
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
              <Button danger size='large'>Main menu (leave game)</Button>
              <Button type='primary' size='large' primary>Race again</Button>
            </div>
            <Leaderboard/>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Game
