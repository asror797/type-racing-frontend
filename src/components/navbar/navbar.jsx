import './navbar.css'
import { Button } from "antd"


const Navbar = () => {
  return(
    <>
      <div className="navbar">
        <div className="container">
          <div className="navbar-wrapper">
            <div className="navbar-left">
              <h4>TypeDash</h4>
            </div>
            <div className="navbar-right">
              <Button type="primary">Create Account</Button> <span> </span>
              <Button type="default">Sign up</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
