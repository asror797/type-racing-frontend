import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './game.css'
import { Button } from 'antd'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import Leaderboard from '../../components/leaderboard/leaderboard'
import auto from '../../assets/Auto_5.png'
import auto1 from '../../assets/Auto_7.png'
import auto2 from '../../assets/Auto_6.png'
import auto3 from '../../assets/Auto_8.png'
import auto4 from '../../assets/Auto_4.png'
import { pushWord } from '../../app/wordSlice'

const Game = () => {
  const { game: { players }, word: { wordList } } = useSelector((state) => state)

  const dispatch = useDispatch()

  useEffect(() => {
    document.onkeydown = (e) => {
      if (e.key.length === 1 || e.key === "Backspace" || e.key === "Tab") {
        console.log(e)
        dispatch(pushWord(e.key))
        e.preventDefault();
      }
    }
  },[])

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
                  0 WPM
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
                  0 WPM
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
                  0 WPM
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
                  0 WPM
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
                  0 WPM
                </div>
              </div>
            </div>
            <div className="game-text-container">
              <span className="game-text">{wordList.join("")}</span>
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
