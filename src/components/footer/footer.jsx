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
                  <li><a href="/">Home</a></li>
                  <li><a href="/terms-and-service">Terms of Service</a></li>
                  <li><a href="/privacy-policy">Privacy Policy</a></li>
                  <li><a href="/contact">Contact</a></li>
                  <li><a href="faq">Faq</a></li>
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
