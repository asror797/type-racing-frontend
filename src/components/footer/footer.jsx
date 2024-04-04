import './footer.css'
import logo from '../../assets/TypeDash.com.png'

const Footer = () => {
  return(
    <>
      <div className="footer">
        <div className="container">
          <div className="footer-wrapper">
           <div className="footer-left">
             <div className="footer-link-wrapper">
                <ul className='footer-menu-links'>
                  <li>Home</li>
                  <li>Terms of Service</li>
                  <li>Privacy Policy</li>
                  <li>Contact</li>
                  <li>Faq</li>
                </ul>
             </div>
             <div className="footer-info">
              <p>© 2023-2024 TypeDash.com, Inc</p>
             </div>
           </div>
           <div className="footer-right">
            <img width={175} src={logo} alt="footer logo" />
           </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
