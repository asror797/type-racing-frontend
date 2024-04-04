import { Button, Input } from 'antd'
import './login.css'
import { Link } from 'react-router-dom'


const Login = () => {
  return(
    <div className="page-wrapper">
      <div className="forum-box">
        <h2>Login</h2>
        <div className="email">
          <Input size='large' placeholder='Email'>
          </Input>
        </div>
        <div className="password">
          <Input.Password size='large' placeholder='Password'>
          </Input.Password>
        </div>
        <div className="login-button">
          <Button size='large' type='primary' block>Login</Button>
        </div>
        <div className="login-options">
          <p>You don't have an account <Link className='link' to="/sign-up">Create account!</Link></p>
          <p>Forgot password <Link className='link' to="/">Rest Password</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login
