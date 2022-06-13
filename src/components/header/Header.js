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
        <div className="flex justify-center items-center space-x-8 w-auto">
          <NavLink to="/" className={"header_link"}>
            <img src={logo} className="header_logo" alt="Flowbite Logo" />
          </NavLink>
            <div className='flex flex-row items-center justify-start space-x-8 w-[50vw]'>
              <NavLink to="/" className={"header_link"}>
                    <motion.div className='inline-block' animate={active_portfolio !== null ? {opacity: 1} : {opacity: 0.6}} transition={{duration: .8}}>
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
                    { active_portfolio !== null ? ( <motion.div className={"header_link_underline"} layoutId="underline"/>) : <></>} 
              </NavLink>
              <NavLink to="/about" className={"header_link"}>
                <motion.div className='inline-block' animate={active_about !== null ? {opacity: 1} : {opacity: 0.6}} transition={{duration: .8}}>
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
                { active_about !== null ? ( <motion.div className={"header_link_underline"} layoutId="underline"/>) : <></>} 
              </NavLink>
              <NavLink to="/contact" className={"header_link"}>
                <motion.div className='inline-block' animate={active_contact !== null ? {opacity: 1} : {opacity: 0.6}} transition={{duration: .8}}>
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
                { active_contact !== null ? ( <motion.div className={"header_link_underline"} layoutId="underline"/>) : <></>} 
              </NavLink>
            </div>
        </div>
        <div className='header_section'>
          <div className='flex items-center flex-wrap justify-between space-x-4'>
            <button>
              <AnimatePresence exitBeforeEnter>
                {
                  lang.map (data => {
                    return(
                      language === data &&
                      <motion.div className='shadow-sm shadow-black flex justify-center items-center'
                      initial={{opacity: 0}} exit={{opacity: 0}} animate={{opacity: 1}} key={language + "icon_sm"}
                      transition={{duration:.5}} alt="French Icon" onClick={onClickLanguage}>
                        <motion.img src={(data === "fr" && french_icon) || (data === "es" && spanish_icon) || (data === "en" && english_icon)}  
                        className="md:w-[4vw] lg:h-[4vh] lg:w-[4vh] relative"/>
                      </motion.div>
                    )
                  })
                }
              </AnimatePresence>
            </button>
            <button>
              <img src={linkedin_icon} className="relative w-[11vw] h-auto md:w-[4vw] lg:h-[4vh] lg:w-[4vh] " alt="Linked in icon" />
            </button>
          </div>
        </div>
      </div>
      <div className='md:hidden relative flex justify-end items-center h-[10vh] w-full gap-[3vw] pr-[2vw]'>
        <button>
              <AnimatePresence exitBeforeEnter>
              {
                lang.map (data => {
                  return(
                    language === data &&
                    <motion.div className='w-[10vw] h-[10vw] relative shadow-sm shadow-black rounded-[50%]'
                    initial={{opacity: 0}} exit={{opacity: 0}} animate={{opacity: 1}} key={language + "icon_sm"}
                    transition={{duration:.5}} alt="French Icon" onClick={onClickLanguage}>
                      <motion.img src={(data === "fr" && french_icon_sm )|| (data === "es" && spanish_icon_sm )|| (data === "en" && english_icon_sm)}  
                      className="w-[10vw] h-[10vw] object-cover relative"/>
                    </motion.div>
                  )
                })
              }
              </AnimatePresence>
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
