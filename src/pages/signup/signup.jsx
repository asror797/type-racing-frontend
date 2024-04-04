import { Button, Input } from "antd"
import { Link } from "react-router-dom"
import './signup.css'


const Signup = () => {
  return(
    <div className="page-wrapper">
      <div className="forum-box">
        <h2>Sign Up</h2>
        <div className="email">
          <Input size='middle' placeholder='Full Name'>
          </Input>
        </div>
        <div className="email">
          <Input size='middle' placeholder='Email'>
          </Input>
        </div>
        <div className="username">
          <Input.Search
            placeholder="Username"
            allowClear
            enterButton="Check"
            size="middle"
          />
        </div>
        <div className="password">
          <Input.Password size='middle' placeholder='Password'>
          </Input.Password>
        </div>
        <div className="password">
          <Input.Password size='middle' placeholder='Repeat Password'>
          </Input.Password>
        </div>
        <div className="login-button">
          <Button size='large' type='primary' block>Create account</Button>
        </div>
        <div className="login-options">
          <p>You already have an account <Link className='link' to="/">Login!</Link></p>
          <p>Forgot password <Link className='link' to="/">Rest Password</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Signup
