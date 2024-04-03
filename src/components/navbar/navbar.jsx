import { Link } from 'react-router-dom'
import './navbar.css'
import { Button } from "antd"


const Navbar = () => {
  return(
    <>
      <div className="navbar">
        <div className="container">
          <div className="navbar-wrapper">
            <div className="navbar-left">
              <div className="navbar-logo">
                <p>Logo</p>
              </div>
            </div>
            <div className="navbar-right">
              <div className="navbar-menu">
                <Link className='navbar-link' to='/about'>About</Link>
                <Link className='navbar-link' to='/premiume'>Premiume</Link>
              </div>
              <Button className="navbar-auth-button" type="primary">Create Account</Button>
              <Button className="navbar-auth-button" type="default">Sign up</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
