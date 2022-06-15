import React from 'react'
import Div100vh from 'react-div-100vh'
import 'components/header/Header.css'
import { useLocation } from "react-router-dom"
import { matchPath } from "react-router"
import { AnimatePresence, motion } from "framer-motion"
import { NavLink } from 'react-router-dom'

import linkedin_icon from 'assets/images/linkedin_icon.png'
import email_icon from 'assets/images/email_icon.png'
import background_image from 'assets/images/image_background_tab.png'
import background_decoration from 'assets/images/tab_decoration.png'
import logo from 'assets/images/blue_logo.png'

const lineVariants = {
    show: {
      opacity: 1,
      width: "100%",
      transition: {
        duration: .5,
        ease: [0.83, 0, 0.17, 1]
      }
    },
    hidden: {
      opacity: 0,
      width: 0,
      transition: {
        duration: .5,
        ease: [0.83, 0, 0.17, 1]
      }
    }
};

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


export default function Tab({onClickMenu, ilanguage}) {

    var active_contact = matchPath('/contact', useLocation().pathname );
    var active_about = matchPath('/about', useLocation().pathname );
    var active_portfolio = matchPath('/', useLocation().pathname );

    const index = ["fr","es","en"]

    const click = () => {
        setTimeout(() => {
            onClickMenu()
        }, 500);        
    }

    return (
        <Div100vh className='absolute flex bg-ivory w-full h-full top-0 left-0 md:hidden shadow-lg shadow-black'>
            <img src={background_decoration} className="absolute w-full h-full object-cover" alt="Background" />
            <div className='absolute flex justify-center items-center h-[11vh] w-full'>
                <img src={logo} className="w-[20vw] h-auto object-cover" alt="Logo icon"/>
            </div>   
            <div className='absolute flex justify-start items-center h-full w-full'>
                <div className='flex justify-end items-center w-[60%] h-full'>
                    <img src={background_image} className='relative h-full w-full object-cover' alt="Background"/>
                    <div className='absolute flex flex-col items-center justify-center h-full w-[53%] left-0 top-0'>
                        <div className='flex flex-col justify-between items-end h-[20vh] w-full'>
                            <NavLink to="/contact" onClick={click}>
                                <img src={email_icon} className="w-[10vw] h-auto mr-[6vw]" alt="Linked in icon" />
                            </NavLink>
                            <button onClick={() => window.open("https://www.linkedin.com/in/kidvalram/","_blank")}>
                                <img src={linkedin_icon} className="relative w-[9.5vw] h-auto mr-[6vw]" alt="Linked in icon" />
                            </button>
                        </div>
                    </div>
                </div>
                <motion.div className='flex flex-col justify-between text-center w-auto h-[40%] font-playfair text-oxford_blue text-[5.5vw]'>
                        <div className='relative inline-block'> 
                            <NavLink to="/about" className={"header_link"} onClick={click}>
                                <AnimatePresence exitBeforeEnter>
                                    {index.map((idata) => {
                                    return (
                                        ilanguage === idata && 
                                        <motion.span key={ilanguage + "link_about"} initial={{opacity:0}} exit={{opacity:0}} 
                                        animate={active_about !== null ? {opacity: 1} : {opacity: 0.6}} 
                                        transition={{duration: .5, ease: [0.83, 0, 0.17, 1]}}>
                                            {data.about[ilanguage]}
                                        </motion.span>
                                    )
                                    })}
                                </AnimatePresence>
                                <AnimatePresence exitBeforeEnter>
                                    {
                                        active_about !== null && <motion.div className={"header_link_underline"} key={ilanguage + "line_about_sm"}
                                        variants={lineVariants} initial="hidden" animate="show" exit="hidden"/>
                                    }
                                </AnimatePresence>   
                            </NavLink>
                        </div>
                        <div className='relative ml-4 inline-block'>
                            <NavLink to="/" className={"header_link"} onClick={click}>
                                <AnimatePresence exitBeforeEnter>
                                    {index.map((idata) => {
                                    return (
                                        ilanguage === idata && 
                                        <motion.span key={ilanguage + "link_portfolio"} initial={{opacity:0}} exit={{opacity:0}} 
                                        animate={active_portfolio !== null ? {opacity: 1} : {opacity: 0.6}}
                                        transition={{duration: .5, ease: [0.83, 0, 0.17, 1]}}>
                                            {data.portfolio[ilanguage]}
                                        </motion.span>
                                    )
                                    })}
                                </AnimatePresence>
                                <AnimatePresence exitBeforeEnter>
                                    {
                                        active_portfolio !== null && <motion.div className={"header_link_underline"} key={ilanguage + "line_portfolio_sm"}
                                        variants={lineVariants} initial="hidden" animate="show" exit="hidden"/>
                                    }
                                </AnimatePresence>
                            </NavLink>
                            
                        </div>
                        <div className='relative inline-block'>
                            
                            <NavLink to="/contact" className={"header_link"} onClick={click}>
                                <AnimatePresence exitBeforeEnter>
                                    {index.map((idata) => {
                                    return (
                                        ilanguage === idata && 
                                        <motion.span key={ilanguage + "link_contact"} initial={{opacity:0}} exit={{opacity:0}} 
                                        animate={active_contact !== null ? {opacity: 1} : {opacity: 0.6}}
                                        transition={{duration: .5, ease: [0.83, 0, 0.17, 1]}}>
                                            {data.contact[ilanguage]}
                                        </motion.span>
                                    )
                                    })}
                                </AnimatePresence>
                                <AnimatePresence exitBeforeEnter>
                                    {
                                        active_contact !== null && <motion.div className={"header_link_underline"} key={ilanguage + "line_portfolio_sm"}
                                        variants={lineVariants} initial="hidden" animate="show" exit="hidden"/>
                                    }
                                </AnimatePresence>
                                
                            </NavLink>
                            
                        </div>
                </motion.div>
            </div>       
        </Div100vh>
    )
}
