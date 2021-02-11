import '../css/Footer.css';
import Facebook from '../assets/social/facebook-white.svg'
import Twitter from '../assets/social/twitter-white.svg'
import Instagram from '../assets/social/instagram-white.svg'
import Apple from '../assets/store/app-store.svg'
import Play from '../assets/store/play-store.svg'
import Windows from '../assets/store/windows-store.svg'





export function Footer() {



  return <footer className="bg-dark px-md-5">
    <div id="navbar" className="navbar navbar-expand-lg navbar-light ml-5 pl-5">
      <button className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link text-white-50 pl-0" href="/">Home </a>
          </li>
          <span className="text-white-50 separate">|</span>
          <li className="nav-item">
            <a className="nav-link text-white-50" href="/">Terms and Conditions</a>
          </li>
          <span className="text-white-50 separate">|</span>
          <li className="nav-item">
            <a className="nav-link text-white-50" href="/">Privacy Policy</a>
          </li>
          <span className="text-white-50 separate">|</span>
          <li className="nav-item">
            <a className="nav-link text-white-50" href="/">Collection Statement</a>
          </li>
          <span className="text-white-50 separate">|</span>
          <li className="nav-item">
            <a className="nav-link text-white-50" href="/">Help</a>
          </li>
          <span className="text-white-50 separate">|</span>
          <li className="nav-item">
            <a className="nav-link text-white-50" href="/">Manage Account</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="copyright text-white-50 mx-5 px-md-5 mt-3 mt-md-0">
      <p>Copyright: &copy; {new Date().getFullYear()} DEMO Streaming. All Rights Reserved.</p>
    </div>

    <div className="d-lg-flex justify-content-md-between mt-4 mb-2">

      <div id="logos-bot-left" className="text-center mb-4 ml-lg-5 pl-0 pl-lg-5">
        <a href="https://www.facebook.com/" target='_blank' rel="noreferrer"><img src={Facebook} alt="logo facebook" className="logo-footer ml-0" /></a>
        <a href="https://twitter.com/?lang=fr" target='_blank' rel="noreferrer"><img src={Twitter} alt="logo twitter" className="logo-footer" /></a>
        <a href="https://www.instagram.com/" target='_blank' rel="noreferrer"><img src={Instagram} alt="logo instagram" className="logo-footer" /></a>
      </div>

      <div id="logos-bot-right" className="text-center mr-lg-5 mr-0 pr-lg-5 pr-0">
        <a href="https://www.apple.com/fr/ios/app-store/" target='_blank' rel="noreferrer"><img src={Apple} alt="logo apple store" className="logo-footer d-md-inline-block mb-2 mb-md-0" /></a>
        <a href="https://play.google.com/store?hl=fr" target='_blank' rel="noreferrer"><img src={Play} alt="logo google play" className="logo-footer  d-md-inline-block mb-2 mb-md-0" /></a>
        <a href="https://www.microsoft.com/fr-fr/store/apps/windows" target='_blank' rel="noreferrer"><img src={Windows} alt="logo microsoft" className="logo-footer" /></a>
      </div>


    </div>


  </footer>
}




