import React, { forwardRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import Div100vh from 'react-div-100vh';
import {PortfolioData} from 'shared/PortfolioData.js';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import main_decoration_top_left_lg from 'assets/images/main_decoration_top_left_lg.png'
import main_decoration_top_right_lg from 'assets/images/main_decoration_top_right_lg.png'
import main_decoration_top_right_md from 'assets/images/main_decoration_top_right_md.png'
import main_decoration_bottom_left_md from 'assets/images/main_decoration_bottom_left_md.png'
import main_decoration_bottom_right_md from 'assets/images/main_decoration_bottom_right_md.png'

import amaury_title from 'assets/images/amaury_title.png'
import valdivia_title from 'assets/images/valdivia_title.png'
import coinrek_card from 'assets/images/coinrek_card.jpg'
import avatar from 'assets/images/avatar.png'
import logo_sm from 'assets/images/logo_portfolio_sm.png'
import division_portfolio_lg from 'assets/images/division_portfolio_lg.png'
import division_portfolio_md from 'assets/images/division_portfolio_md.png'
import cover_decoration_sm from 'assets/images/portfolio_decoration_sm.png'
import van_card from 'assets/images/van_card.jpg'
import menu_card from 'assets/images/menu_card.jpg'
import background_image_sm from 'assets/images/background_portfolio_image_sm.jpg'

import { Parallax } from 'react-scroll-parallax';

const sentence = {
    hidden: {opacity: 1},
    visible : {
      opacity: 1,
      transition: {
        delay: 0.6,
        staggerChildren: 0.08
      }
    },
    exit: { opacity: 0 },
  }
  
const letter = {
    hidden: { opacity: 0, y: 50},
    visible: {
        opacity: .3,
        y: 0
    }
}

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}
  
  const Card = (params) => {
    var image = params.imagen;
    return(
      <div>
        <motion.div whileHover={{ scale: 1.05, duration: 2}} transition={{duration: .5}} className='hidden md:block'>
          <img src={image} alt='' className='md:w-[25vw] lg:w-[25vw] xl:w-auto h-auto xl:h-[18vh] md:rounded-3xl drop-shadow-lg relative'/>
        </motion.div>
        <img src={image} alt='' className='w-[40vw] rounded-xl drop-shadow-lg relative md:hidden'/>
      </div>
    )
  }

  const AvatarContainer = () => {
    return(
      <div className='relative hidden md:flex md:flex-col md:h-[33vh] md:w-auto 2xl:w-[18vw] lg:w-[22vw] lg:h-fit'>
        <img src={avatar} alt='' className='h-full w-full object-fit relative'/>
        <div>
          <>
            <Parallax speed={0} translateY={['-6px', '1000px']} easing="easeInQuint">
              <img src={amaury_title} alt='' className='absolute w-full bottom-0 md:hidden lg:flex'/> 
            </Parallax>
            <Parallax speed={0} translateY={['0px', '20px']} easing="easeInQuad">
              <img src={amaury_title} alt='' className='absolute w-full bottom-0 lg:hidden'/> 
            </Parallax>
          </>
          <Parallax speed={0} opacity={[1.2,0]}>
            <img src={valdivia_title} alt='' className='absolute h-auto w-full'/>
          </Parallax>
        </div>
      </div>
    )
  }

  const InfoContainer = ({language, setTransition}) => {
  
    const lang = ["fr", "es", "en"];
  
    return(
      <div className='hidden md:flex flex-col justify-evenly items-start text-left gap-4 md:h-[35vh] md:w-[50vw] lg:w-[53vw]' >
        <AnimatePresence exitBeforeEnter>
          {lang.map((data) => {
            return (
              language === data && 
              <motion.div className='font-trirong text-oxford_blue  md:text-[4vw] lg:text-[4vw] xl:text-[3.5vh]' key={language + "title"} variants={variants}
              initial="initial" exit="exit" animate="animate" transition={{opacity: { duration: .8 }, type: 'linear' }}>
                {PortfolioData.title[language]} 
              </motion.div> 
            )
          })}
        </AnimatePresence>
        <AnimatePresence exitBeforeEnter>
        {lang.map((data) => {
            return (
              language === data && 
              <motion.div className='font-roboto text-rich_black md:text-[2vw] lg:text-[2vw] xl:text-[2vh] ' key={language + "description"} variants={variants}
              initial="initial" exit="exit" animate="animate" transition={{opacity: { delay: .2, duration: .6 }, type: 'linear' }}>
                {PortfolioData.description[language]}
              </motion.div>   
            )
          })}
        </AnimatePresence>
            
        <AnimatePresence exitBeforeEnter>
          {lang.map((data) => {
            return (
              language === data && 
              <motion.div className='text-sm md:text-[2vw] lg:text-[2vw] xl:text-[2vh] text-ivory font-roboto' key={language + "cv"} variants={variants}
              initial="initial" exit="exit" animate="animate" transition={{opacity: { delay: .2, duration: .6 }, type: 'linear' }}>
                <button type="button" className="focus:outline-none  drop-shadow-lg bg-marigold active:bg-marigold_pressed  rounded-lg px-5 py-2.5 mr-2 mb-2 "
                onClick={() => setTransition(3)}>
                  {PortfolioData.button.see_cv[language]}
                </button>
              </motion.div>  
            )
          })}
        </AnimatePresence>
      </div>
    )
  }
  
  const CardContainer = ({language, changeIndex}) => {
  
    const lang = ["fr", "es", "en"];
  
    return(
      <div className='hidden md:flex flex-col justify-evenly items-start text-left gap-4' >
        <AnimatePresence exitBeforeEnter>
          {lang.map((data) => {
            return (
              language === data && 
              <motion.div className='font-trirong text-oxford_blue  md:text-[4vw] lg:text-[4vw] xl:text-[3.5vh]' key={language + "title"} variants={variants}
              initial="initial" exit="exit" animate="animate" transition={{opacity: { duration: .8 }, type: 'linear' }}>
                {PortfolioData.subtitle[language]}
              </motion.div> 
            )
          })}
        </AnimatePresence>
        <div className='flex flex-row gap-5'>
          <button onClick={() => changeIndex(0)}>
            <Card imagen={menu_card}/>
          </button>
          <button onClick={() => changeIndex(2)}>
            <Card imagen={van_card}/>
          </button>
          <button onClick={() => changeIndex(1)}>
            <Card imagen={coinrek_card}/>
          </button>
        </div>
      </div>
    )
  }

  const Divider = ({imagen}) => {
    return(
      <img src={imagen} alt='' className='relative w-[30vw] h-auto md:flex md:w-[45vw] lg:h-[40vh] lg:w-auto' />
    )
  }

const Main = forwardRef((props, ref) => {

  const lang = ["fr", "es", "en"];

  const changeIndex = (value) => {
    ref.current.index = value
    ref.current.childChangeIndex()
    props.scrollBottom()
  }

  return (
    <Div100vh className='flex items-end overflow-hidden'>

        <div className='relative md:h-[92vh] lg:h-[90vh] w-full h-full flex justify-center items-start bg-ivory'>
            
            {/* Cover title */}
            <AnimatePresence exitBeforeEnter>
                {props.language === "fr" && 
                <motion.div className='hidden md:flex absolute font-playfair md:bottom-[-10vw] lg:bottom-[-20vh] 2xl:bottom-[-18vh] w-full text-center text-[13.6vw] text-grullo overflow-auto justify-center items-center' 
                variants={sentence} initial="hidden" animate="visible" exit="exit"
                key={props.language + "portfolio_link"}>
                {PortfolioData.title_dev.fr.split("").map((char,index) => {
                    return(
                    <>
                        <Parallax speed={-10} >
                        <motion.span key={char + "-" + index} className="md:hidden lg:flex" variants={letter}>{char.toUpperCase()}</motion.span>
                        </Parallax>
                        <Parallax speed={-5}>
                        <motion.span key={char + "-" + index} className="lg:hidden" variants={letter}>{char.toUpperCase()}</motion.span>
                        </Parallax>
                    </>
                )})}
                </motion.div>}
                {props.language === "es" && 
                <motion.div className='hidden md:flex absolute font-playfair md:bottom-[-8vw] lg:bottom-[-15vh] 2xl:bottom-[-15vh] w-full text-center text-[11.3vw] text-grullo overflow-auto justify-center items-center' 
                variants={sentence} initial="hidden" animate="visible" exit="exit"
                key={props.language + "portfolio_link"}>
                {PortfolioData.title_dev.es.split("").map((char,index) => {
                    return(
                    <>
                        <Parallax speed={-9}>
                        <motion.span key={char + "-" + index} className="md:hidden lg:flex" variants={letter}>{char.toUpperCase()}</motion.span>
                        </Parallax>
                        <Parallax speed={-4}>
                        <motion.span key={char + "-" + index} className="lg:hidden" variants={letter}>{char.toUpperCase()}</motion.span>
                        </Parallax>
                    </>
                )})}
                </motion.div>}
                {props.language === "en" && 
                <motion.div className='hidden md:flex absolute font-playfair md:bottom-[-12vw] lg:bottom-[-25vh] 2xl:bottom-[-21vh] w-full text-center text-[16.5vw] text-grullo overflow-auto justify-center items-center' 
                variants={sentence} initial="hidden" animate="visible" exit="exit"
                key={props.language + "portfolio_link"}>
                {PortfolioData.title_dev.en.split("").map((char,index) => {
                    return(
                    <>
                        <Parallax speed={-10}>
                        <motion.span key={char + "-" + index} className="md:hidden lg:flex" variants={letter}>{char.toUpperCase()}</motion.span>
                        </Parallax>
                        <Parallax speed={-6}>
                        <motion.span key={char + "-" + index} className="lg:hidden" variants={letter}>{char.toUpperCase()}</motion.span>
                        </Parallax>
                    </>  
                )})}
                </motion.div>}
            </AnimatePresence>

            {/* Decoration screen lg */}
            <div className='absolute hidden lg:inline w-full h-full overflow-hidden'>
                <Parallax translateX={["-50px", "0px"]} speed={0} translateY={["-50px", "0px"]} opacity={[0,1]}>
                    <img src={main_decoration_top_left_lg} className='absolute w-[6vw] h-auto object-cover top-0 left-0' alt="Background Decoration"/>
                </Parallax>
                <Parallax translateX={["50px", "0px"]} translateY={["-50px", "0px"]} opacity={[0,1]}>
                    <img src={main_decoration_top_right_lg} className='absolute w-[15vw] h-auto object-cover top-0 right-0' alt="Background Decoration"/>
                </Parallax>
            </div>

            {/* Decoration screen md */}
            <div className='absolute hidden md:inline lg:hidden w-full h-full overflow-hidden'>
                <Parallax translateX={["50px", "0px"]} translateY={["-50px", "0px"]} opacity={[0,1]}>
                    <img src={main_decoration_top_right_md} className='absolute w-auto h-[21vw] object-cover top-0 right-0' alt="Background Decoration"/>
                </Parallax>
                <Parallax translateX={["-100px", "0px"]} opacity={[0,1]}>
                    <img src={main_decoration_bottom_left_md} className='absolute w-auto h-[8vw] object-cover bottom-[-55vh] left-0' alt="Background Decoration"/>
                </Parallax>
                <Parallax translateX={["150px", "0px"]} opacity={[0,1]}>
                    <img src={main_decoration_bottom_right_md} className='absolute w-auto h-[20vw] object-cover bottom-[-60vh] right-0' alt="Background Decoration"/>
                </Parallax>
            </div>

            {/* Shadow Bottom */}
            <div className='hidden md:flex h-[1vh] w-full absolute bottom-0 shadow-inner-bottom shadow-black'/> 

            {/* Screen sm */}
            <div className='md:hidden flex flex-row justify-center item-center w-full h-full '>
                <div className='relative w-[55vw] h-full shadow-xl shadow-black flex justify-center items-start'>
                    <img src={cover_decoration_sm} className="absolute top-0 left-0 h-full w-full object-cover" alt="Decoration Imagen"/>
                    <div className='relative w-full h-[50%] flex flex-col justify-around items-center py-[2vh]'>
                      <img src={logo_sm} className='relative w-[55%] h-auto object-cover' alt=''/>
                      <div className="w-[80%] text-center text-[4.5vw] font-trirong leading-none">
                          <AnimatePresence exitBeforeEnter>
                              {lang.map((data) => {
                                  return (
                                  props.language === data && 
                                  <motion.span className="whitespace-pre-wrap text-oxford_blue tracking-tighter" key={props.language + "title_sm"} variants={variants}
                                  initial="initial" exit="exit" animate="animate" transition={{opacity: { delay: .2, duration: .4 }, type: 'linear' }}>
                                      {PortfolioData.job[props.language]}
                                  </motion.span>
                                  )
                              })}
                          </AnimatePresence>
                      </div>
                      <Divider imagen={division_portfolio_md}/>
                      <AnimatePresence exitBeforeEnter>
                          {lang.map((data) => {
                          return (
                              props.language === data && 
                              <motion.span className='font-roboto text-ivory text-[3.5vw]' key={props.language + "button_sm"} variants={variants}
                              initial="initial" exit="exit" animate="animate" transition={{opacity: { delay: .2, duration: .4 }, type: 'linear' }}>
                              <button type="button" className=" bg-marigold flex justify-center items-center shadow-md shadow-drop active:bg-marigold_pressed  rounded-lg px-3 py-2.5 mr-2 mb-2">
                                { PortfolioData.button.cv[props.language]}
                              </button>
                              </motion.span>
                          )
                          })}
                      </AnimatePresence>
                    </div>
                </div>
                <img src={background_image_sm} className='object-cover w-[45vw] h-full' alt='Background Amaury'/>
            </div>

            {/* Container lg */}
            <div className='relative w-[90%] lg:h-[95%] xl:h-[85%] lg:flex flex-row justify-evenly items-center hidden'>
                <AvatarContainer/>
                <div className='hidden lg:flex'><Divider imagen={division_portfolio_lg}/></div>
                <div className='relative lg:h-full xl:h-[85%] flex flex-col justify-evenly items-start'>
                    <InfoContainer language={props.language} setTransition={props.setTransition}/>
                    <CardContainer language={props.language} changeIndex={changeIndex}/>
                </div>
            </div>

            {/* Container md */}
            <div className='relative flex-col items-center justify-evenly  w-full h-[90%] hidden md:flex lg:hidden'>
                <div className='flex flex-row gap-8 justify-evenly relative items-center w-[85vw]'>
                    <AvatarContainer/>
                    <InfoContainer language={props.language} setTransition={props.setTransition}/>
                </div>
                <Divider imagen={division_portfolio_md}/>
                <CardContainer language={props.language} changeIndex={changeIndex}/>
            </div>
            
        </div>
        
    </Div100vh>
)
    
})

export default Main
