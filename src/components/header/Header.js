import logo from 'assets/images/light_icon.png';
import 'components/header/Header.css';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom"
import { matchPath } from "react-router";

//Images
import linkedin_icon from 'assets/images/linkedin_icon.png';
import english_icon from 'assets/images/english_icon.png';
import english_icon_sm from 'assets/images/english_icon_sm.png';
import french_icon_sm from 'assets/images/french_icon_sm.png';
import french_icon from 'assets/images/french_icon.png';
import spanish_icon_sm from 'assets/images/spanish_icon_sm.png';
import spanish_icon from 'assets/images/spanish_icon.png';
import menu_icon from 'assets/images/menu_icon.png';
import exit_icon from 'assets/images/exit_icon.png'

const data = {
  about: {
      fr: "qui suis je?",
      es: "acerca de",
      en: "about me"
  },
  portfolio: {
      fr: "portfolio",
      es: "portafolio",
      en: "portfolio"
  },
  contact: {
      fr: "contactez-moi",
      es: "contactame",
      en: "contact me"
  }
}

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

export default function Header({onClickLanguage, onClickMenu, language, open}) {

  var active_contact = matchPath('/contact', useLocation().pathname );
  var active_about = matchPath('/about', useLocation().pathname );
  var active_portfolio = matchPath('/', useLocation().pathname );

  const lang = ["fr", "es", "en"];

  return (
    <motion.div className='header_navigation_bar'>
      <div className='header_navigation_container'>
        <div className="header_section">
            <img src={logo} className="header_logo" alt="Flowbite Logo" />
            <div className='flex gap-6'>
              <div className='relative'>
                <NavLink to="/" className={"header_link"}>
                  <motion.div animate={active_portfolio !== null ? {opacity: 1} : {opacity: 0.6}} transition={{duration: .8}}>
                    <AnimatePresence exitBeforeEnter>
                      {lang.map((iLang) => {
                        return (
                          language === iLang && 
                          <motion.div key={language + "portfolio_link"} variants={variants} initial="initial"
                            animate="animate" exit="exit" transition={{delay: .2, duration: .4}}>
                            {data.portfolio[language]}
                          </motion.div>
                        )
                      })}
                    </AnimatePresence>
                  </motion.div>
                </NavLink>
                { active_portfolio !== null ? ( <motion.div className={"header_link_underline"} layoutId="underline"/>) : <></>} 
              </div>
              <div className='relative'>
              <NavLink to="/about" className={"header_link"}>
                <motion.div animate={active_about !== null ? {opacity: 1} : {opacity: 0.6}} transition={{duration: .8}}>
                  <AnimatePresence exitBeforeEnter>
                      {lang.map((iLang) => {
                        return (
                          language === iLang && 
                          <motion.div key={language + "about_link"} variants={variants} initial="initial"
                          animate="animate" exit="exit" transition={{delay: .2, duration: .4}}>
                            {data.about[language]}
                          </motion.div>
                        )
                      })}
                    </AnimatePresence>
                </motion.div>
              </NavLink>
              { active_about !== null ? ( <motion.div className={"header_link_underline"} layoutId="underline"/>) : <></>} 
              </div>
              <div className='relative'>
                <NavLink to="/contact" className={"header_link"}>
                  <motion.div animate={active_contact !== null ? {opacity: 1} : {opacity: 0.6}} transition={{duration: .8}}>
                    <AnimatePresence exitBeforeEnter>
                      {lang.map((iLang) => {
                        return (
                          language === iLang && 
                          <motion.div key={language + "about_link"} variants={variants} initial="initial"
                          animate="animate" exit="exit" transition={{delay: .2, duration: .4}}>
                            {data.contact[language]}
                          </motion.div>
                        )
                      })}
                    </AnimatePresence>
                  </motion.div>
                </NavLink>
                { active_contact !== null ? ( <motion.div className={"header_link_underline"} layoutId="underline"/>) : <></>} 
              </div>
            </div>
        </div>
        <div className='header_section'>
          <div className='header_icons'>
            <button>
              <div className='shadow-sm shadow-black flex justify-center items-center lg:pr-[2vh] md:pr-[2vw]'>
                <motion.img src={french_icon} animate={{opacity: language === "fr" ? 1 : 0}} 
                transition={{duration:.5}} alt="French Icon" onClick={onClickLanguage}
                className="md:w-[4vw] lg:h-[4vh] lg:w-auto absolute "/>
                <motion.img src={english_icon} animate={{opacity: language === "en" ? 1 : 0}} 
                transition={{duration:.5}} alt="English Icon"  onClick={onClickLanguage}
                className="md:w-[4vw] lg:h-[4vh] lg:w-auto absolute "/>
                <motion.img src={spanish_icon} animate={{opacity: language === "es" ? 1 : 0}} 
                transition={{duration:.5}} alt="Spanish Icon"  onClick={onClickLanguage} 
                className="md:w-[4vw] lg:h-[4vh] lg:w-auto absolute "/>
              </div>
            </button>
            <button>
              <img src={linkedin_icon} className="header_icon" alt="Linked in icon" />
            </button>
          </div>
        </div>
      </div>
      <div className='md:hidden relative flex justify-end items-center h-[10vh] w-full gap-[3vw] pr-[2vw]'>
        <button>
          <div className='w-[10vw] h-[10vw] relative shadow-sm shadow-black rounded-[50%]'>
            <motion.img src={french_icon_sm} animate={{opacity: language === "fr" ? 1 : 0}} 
            transition={{duration:.5}} alt="French Icon" onClick={onClickLanguage}
            className="w-[10vw] h-[10vw] object-cover absolute"/>
            <motion.img src={english_icon_sm} animate={{opacity: language === "en" ? 1 : 0}} 
            transition={{duration:.5}} alt="English Icon"  onClick={onClickLanguage}
            className="w-[10vw] h-[10vw] object-cover absolute"/>
            <motion.img src={spanish_icon_sm} animate={{opacity: language === "es" ? 1 : 0}} 
            transition={{duration:.5}} alt="Spanish Icon"  onClick={onClickLanguage} 
            className="w-[10vw] h-[10vw] object-cover absolute"/>
          </div>
        </button>
        <button type="button" className='w-[10vw] h-[10vw] shadow-sm shadow-black rounded-[50%] flex justify-center items-center bg-marigold active:bg-marigold_pressed focus:bg-marigold_pressed' onClick={onClickMenu}>
          <motion.img src={menu_icon} animate={{opacity: open ? 0 : 1}} transition={{duration: 0.5}}
          className=" h-[5vw] w-[5vw] object-cover relative" alt="Menu icon"/>
          <motion.img src={exit_icon} animate={{opacity: open ? 1 : 0}} transition={{duration: 0.5}}
          className="h-[5vw] w-[5vw] object-cover absolute " alt="Menu icon"/>
        </button>
      </div> 
    </motion.div>
  )
}
