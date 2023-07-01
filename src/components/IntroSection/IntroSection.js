import {useState} from "react"
import Logo from "./images/logo.svg"
import ImageHeroDesktop from "./images/image-hero-desktop.png";
import ImageHeroMobile from "./images/image-hero-mobile.png";
import DataBiz from "./images/client-databiz.svg";
import AudioPhile from "./images/client-audiophile.svg";
import Meet from "./images/client-meet.svg";
import Maker from "./images/client-maker.svg";
import DownArrow from "./images/icon-arrow-down.svg";
import UpArrow from "./images/icon-arrow-up.svg";
import Calendar from "./images/icon-calendar.svg";
import Planning from "./images/icon-planning.svg";
import Reminder from "./images/icon-reminders.svg";
import Todo from "./images/icon-todo.svg";
import Hamburger from "./images/icon-menu.svg";
import Close from "./images/icon-close-menu.svg";
import "./IntroSection.css"

const IntroSection = () => {
  const [dropdown, setDropdown] = useState(false);
  const [company, setCompany] = useState(false)
  const [hamburg, setHamburg] = useState(false)
 
 
  const handleClick = () => {
 setDropdown(!dropdown);
  }
  const handleCompany = () => {
 setCompany(!company);
  }

  const handleMenu = () => {
    setHamburg(!hamburg)
  }
  const handleHamburger = () => {
    setHamburg(false)
  }
    return (
        <div className = "introSection-container">  
        <div className = "intro">
         <div className = "intro-header-title-mobile"> 
       <div className = "logo-mobile">
       <img src = {Logo}  alt = "logo"/> 
       </div>
       <div className = "hamb" onClick = {handleMenu}>
       <img src = {hamburg ? Close : Hamburger}  alt = "ham" className = {hamburg && "hamburger-rotate"}/> 
       </div>
       {hamburg && <div onClick={handleHamburger} className = "mobile-menu-background"></div>}
       

       {hamburg && <div className = "mobile-menu-container">

       <div className = "mobile-menu">
        <div className = "mobile-menu-list">
        <div className = "feature">
         <div className = 'test' onClick = {handleClick} >

         <h5>Feature</h5><img src = {dropdown ? UpArrow : DownArrow} alt = "downarrow"/>
         </div>
          <div className = {dropdown ? "shw" : "drpdown-menu" }>
          <div className = 'todo'>
         <img src = {Todo} alt = "downarrow"/><h5 >Todo List</h5>
         </div>
          <div className = 'todo'>
         <img src = {Calendar} alt = "downarrow"/><h5 >Calender</h5>
         </div>
          <div className = 'todo'>
         <img src = {Reminder} alt = "downarrow"/><h5 >Reminder</h5>
         </div>
          <div className = 'todo'>
         <img src = {Planning} alt = "downarrow"/><h5 >Planning</h5>
         </div>
            
        </div>
      
        <div className = "company">
         <div className = 'test' onClick = {handleCompany}>
         <h5>Company</h5><img src = {company ? UpArrow : DownArrow} alt = "downarrow"/>
         </div>

         <div className = {company ? "shw" : "drp" }>
          <div className = 'todo'>
         <h5 >History</h5>
         </div>
          <div className = 'todo'>
         <h5 >Our Team</h5>
         </div>
          <div className = 'todo'>
         <h5>Blog</h5>
         </div>
            
        </div>
        </div>
         <div className = 'test'>
         <h5>Career</h5>
         </div>
         <div className = 'test'>
         <h5>About</h5>
         </div>
         

        
        </div>
        </div>

        <div className = "login_register">
         <h4 className = "introsection_login">Login</h4>
         <button className = "introsection_btn">Register</button>
        </div>




       </div>

       </div> 
       
       }
         
        </div>
        <div className = "intro-header"> 
         <div className = "intro-header-menu"> 
         <div className = "intro-header-title"> 
       <img src = {Logo}  alt = "logo"/> 
        </div>
        
        <div className = "intro-header-menu-list"> 
        <div className = "feature">
         <div className = 'test' onClick = {handleClick} >
         <h5>Feature</h5><img src = {dropdown ? UpArrow : DownArrow} alt = "downarrow"/>
         </div>
          <div className = {dropdown ? "show" : "dropdown-menu" }>
          <div className = 'todo'>
         <img src = {Todo} alt = "downarrow"/><h5 >Todo List</h5>
         </div>
          <div className = 'todo'>
         <img src = {Calendar} alt = "downarrow"/><h5 >Calender</h5>
         </div>
          <div className = 'todo'>
         <img src = {Reminder} alt = "downarrow"/><h5 >Reminder</h5>
         </div>
          <div className = 'todo'>
         <img src = {Planning} alt = "downarrow"/><h5 >Planning</h5>
         </div>
            
            </div>
        </div>
        <div className = "company">
         <div className = 'test' onClick = {handleCompany}>
         <h5>Company</h5><img src = {company ? DownArrow : UpArrow} alt = "downarrow"/>
         </div>

         <div className = {company ? "show" : "drop" }>
          <div className = 'todo'>
         <h5 >History</h5>
         </div>
          <div className = 'todo'>
         <h5 >Our Team</h5>
         </div>
          <div className = 'todo'>
         <h5>Blog</h5>
         </div>
            
            </div>
        </div>
         <div className = 'test'>
         <h5>Career</h5>
         </div>
         <div className = 'test'>
         <h5>About</h5>
         </div>
         

        </div>
        </div>

        <div className = "login_register">
         <h4 className = "introsection_login">Login</h4>
         <button className = "introsection_btn">Register</button>
        </div>
        </div>


        <div className = "main-intro-contents">
        <div className = "ImageMobile">
            <img src={ImageHeroMobile} alt = "imgefile"/>
        </div>
         <div className = "main-intro-contents-text">
        <h1 className= "main-intro-contents-text-heading">Make remote work </h1>
        <p className = "main-intro-para">Get your team in sync, no matter your location. Streamline processes, 
  create team rituals, and watch productivity soar.</p>
        
         <button className = "introContent_btn">Learn More</button>
         <div className = "intro-footer-image">
        <img src={DataBiz} alt = "imgefile"/>
        <img src={AudioPhile} alt = "imgefile"/>
        <img src={Meet} alt = "imgefile"/>
        <img src={Maker} alt = "imgefile"/>
        </div>
           
          </div>
          
         <div className = "main-intro-contents-image">
        <img src={ImageHeroDesktop} alt = "imgefile"/>
        </div>

        </div>
        </div>
        </div>
    )
}
export default IntroSection;