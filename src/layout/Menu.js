import { motion, AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import Div100vh from 'react-div-100vh'
import {PortfolioData} from 'shared/PortfolioData.js';
import {OpacityVariant} from 'shared/AnimationData.js';
import { Carousel } from 'react-responsive-carousel';

import background_image_lg from 'assets/images/menu_image_background_lg.jpg'
import background_image_md from 'assets/images/menu_image_background_md.jpg'

import logo_round_deco_lg from 'assets/images/logo_round_deco_lg.png'
import menu_mockup_1_lg from 'assets/images/menu_mockup_1_lg.jpg'
import menu_mockup_2_lg from 'assets/images/menu_mockup_2_lg.jpg'
import menu_mockup_3_lg from 'assets/images/menu_mockup_3_lg.jpg'
import menu_mockup_4_lg from 'assets/images/menu_mockup_4_lg.jpg'
import arrow_icon from 'assets/images/arrow_icon.png'

import english_icon from 'assets/images/english_icon.png';
import english_icon_sm from 'assets/images/english_icon_sm.png';
import french_icon_sm from 'assets/images/french_icon_sm.png';
import french_icon from 'assets/images/french_icon.png';
import spanish_icon_sm from 'assets/images/spanish_icon_sm.png';
import spanish_icon from 'assets/images/spanish_icon.png';

import logo from 'assets/images/logo_projects_lg.png'

import PreviewIcon from 'assets/images/preview_icon.png'
import NextIcon from 'assets/images/next_icon.png'
import PreviewIcon_sm from 'assets/images/preview_icon_sm.png'
import NextIcon_sm from 'assets/images/next_icon_sm.png'

import ExitIcon from 'assets/images/exit_icon.png'

import project_decoration_top_left_lg from 'assets/images/project_decoration_top_left_lg.png'
import project_decoration_middle_right_lg from 'assets/images/project_decoration_middle_right_lg.png'
import project_decoration_bottom_left_lg from 'assets/images/project_decoration_bottom_left_lg.png'

function Imagen(props){

    const title = {
        fr: "Click ici",
        es: "Click aqui",
        en: "Click here"
    }

    const [visible, setVisible] = useState(false)

    return(
        <motion.div className={`relative md:my-[2vw] md:mx-[3vw] lg:my-[1.5vh] lg:mx-[3.5vh] xl:my-[2vh] xl:mx-[4vh] 2xl:my-[2vh] 2xl:mx-[4vh]`} layout transition={props.animation && { type: "spring", stiffness: 200, damping: 20 }} onClick={() => props.onClick(true)}>
            
            <motion.div onHoverStart={() => setVisible(true)} onHoverEnd={() => setVisible(false)} whileHover={{ scale: 1.05, duration: 1}} 
            variants={OpacityVariant} initial="initial" animate="animate" exit="exit" 
            transition={{duration: .8}} key={props.src}>
                
                <button className='relative' onClick={props.onClick}>
                    
                    <motion.img src={props.src} alt={props.src} className={`relative ${props.width} ${props.height} object-cover rounded-2xl shadow-lg shadow-black`}/>
                    
                    <AnimatePresence>
                        {
                            visible && 
                            <motion.div className='absolute top-0 w-full h-full bg-rich_black rounded-2xl'
                            initial={{opacity: 0}} animate={{opacity:.6}} exit={{opacity:0}} key="layout" 
                            transition={{duration: .8}}/>                       
                        }
                        {
                            visible && <motion.div className='absolute top-0 w-full h-full flex 
                            justify-center items-center text-ivory font-playfair md:text-lg lg:text-xl xl:text-xl 2xl:text-xl'
                            initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity:0}} key="title"
                            transition={{duration: .8}}>
                                { props.language && title[props.language]}
                            </motion.div>
                        }
                        
                    </AnimatePresence>

                </button>
            </motion.div>

        </motion.div>
    )
}

export default function Menu({setTransition, language, onClickLanguage}) {

    const lang = ["fr", "es", "en"];

    const [visible_1, setVisible_1] = useState(false)
    const [visible_2, setVisible_2] = useState(false)
    const [visible_3, setVisible_3] = useState(false)
    const [visible_4, setVisible_4] = useState(false)

    const [layout, setLayout] = useState(false)

    const Images = [menu_mockup_1_lg, menu_mockup_2_lg, menu_mockup_3_lg, menu_mockup_4_lg]
    const [disabled, setDisabled] = useState(false);
    const [index,setIndex] = useState(0);

    setTimeout(() => {
        setVisible_1(true)
    }, 1000)

    setTimeout(() => {
        setVisible_2(true)
    }, 2500)

    setTimeout(() => {
        setVisible_3(true)
    }, 3500)

    setTimeout(() => {
        setVisible_4(true)
    }, 4500)

    const next = (lenght) => {   
        if (index < lenght - 1) changeIndex(index + 1)    
        else changeIndex(0)
    }

    const preview = (lenght) => {
        if (index > 0) changeIndex(index - 1)
        else changeIndex(lenght - 1)
    }

    const changeIndex = (value) => {
        setIndex(value)
        setDisabled(true);
        setTimeout(() => {
            setDisabled(false);
        }, 1000)
    }


  return (
    <Div100vh>
        <div className='absolute bg-ivory w-[120vw] h-full'/>
        <motion.div className='relative w-[100vw] h-full flex flex-col lg:flex-row justify-between'>
            
            <div className='relative h-[25vh] w-full lg:w-[25vw] xl:w-[25vw] lg:h-full 2xl:w-[30vw] '>
                
                <motion.img alt="Background imagen" src={background_image_lg}
                className='w-full h-full object-cover hidden lg:flex shadow-xl shadow-black'/>

                <motion.img alt="Background imagen" src={background_image_md}
                className='w-full h-full object-cover lg:hidden shadow-md shadow-black'/>
                
                <div className='absolute inline-block bottom-0 mb-[-9vw] left-[10vw] md:mb-[-9vw] md:left-[10vw] lg:bottom-auto lg:mb-auto lg:left-auto lg:right-0 lg:top-[50vh] lg:mt-[-5.5vh] lg:mr-[-5.5vh] xl:mt-[-6vh] xl:mr-[-6vh] 2xl:mt-[-6.5vh] 2xl:mr-[-6.5vh]'>
                    <img src={logo_round_deco_lg} className="relative w-auto h-[20vw]  md:h-[18vw] lg:h-[11vh] xl:h-[12vh] 2xl:h-[13vh] object-cover" alt="Background"/>
                </div>

                <button className='absolute top-0 left-0 w-[9vw] my-[5vw] mx-[4.5vw] md:my-[4.5vw] md:mx-[3vw] md:w-[8vw] lg:mx-[5vh] lg:my-[3.5vh] lg:m-[3.5vh] lg:w-[4vw] xl:my-[3.5vh] xl:mx-[2.5vh] 2xl:m-[3vh] 2xl:w-[3.5vw] h-auto' onClick={setTransition}>
                    <img src={arrow_icon} alt={arrow_icon} className="w-full h-full object-cover"/>
                </button>
            </div>

            <div className='relative flex flex-col items-center justify-evenly md:justify-between md:pt-0 lg:justify-between h-[75vh] md:h-[62vh] lg:h-full lg:w-[75vw] 2xl:w-[70vw]'>

                <div className='absolute w-full h-full'>
                    <img src={project_decoration_top_left_lg} className='absolute lg:top-0 left-0 top-0 w-[10vw] md:w-[8vw] md:top-[-6vw] lg:w-[4.5vw] xl:w-[4vw] 2xl:w-[4vw] h-auto ' alt='About decoration'/>
                    <img src={project_decoration_middle_right_lg} className='absolute  top-[24vh] w-[20vw] md:top-[12vh] md:w-[15vw] lg:top-[35vh] lg:w-[9vw] xl:top-[35vh] xl:w-[7.5vw] 2xl:top-[35vh] right-0 2xl:w-[8vw] h-auto' alt='About decoration'/>
                    <img src={project_decoration_bottom_left_lg} className='absolute bottom-0 left-0 w-[20vw] md:w-[18vw] lg:w-[12vw] xl:w-[10vw] 2xl:w-[11vw] h-auto' alt='About decoration'/>
                </div>
                
                {/* Info Section */}
                <motion.div className='relative flex flex-col md:flex-row items-center justify-evenly w-full text-left gap-[2vw] md:gap-[1vw] md:w-[90%] lg:w-[75%] lg:mt-[8vh] lg:gap-[3.5vh] xl:w-[70%] xl:gap-[4vh] xl:mt-[10vh] 2xl:w-[70%] 2xl:gap-[4vh] 2xl:mt-[10vh]'>
                    
                    {/* Title Container*/}
                    <AnimatePresence exitBeforeEnter>
                        {
                            lang.map((data) => {
                                return(
                                    language == data &&
                                    <motion.div className='flex justify-center text-left md:text-center items-center w-[80%] md:w-[35%] lg:w-[40%]'
                                    variants={OpacityVariant} initial="initial" animate="animate" exit="exit" key={language + "title"}
                                    transition={{duration: .8}}>
                                        <h1 className='font-trirong text-xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl text-oxford_blue '>{PortfolioData.category.projects[0].title[language]}</h1>
                                    </motion.div>
                                )
                            })
                        }
                        
                    </AnimatePresence>
                    
                    
                    {/* Info Container */}
                    <div className='flex flex-col w-[80%] gap-[2vw] md:w-[50%] md:gap-[1vw] lg::w-[50%] lg:gap-[1.5vh] lg:h-full xl:gap-[2vh] lg:w-[50%] 2xl:w-[50%] 2xl:h-full font-roboto 2xl:gap-[2vh]'>
                        
                        {/* Information */}
                        <AnimatePresence exitBeforeEnter>
                            {
                                lang.map((data) => {
                                    return(
                                        language == data &&
                                        <motion.span className='text-rich_black text-sm md:text-xl lg:text-lg xl:text-lg 2xl:text-lg'
                                        variants={OpacityVariant} initial="initial" animate="animate" exit="exit" key={language + "title"}
                                        transition={{duration: .6, delay: .2}}>{PortfolioData.category.projects[0].description[language]}
                                        </motion.span>
                                    )
                                })
                            }
                            
                        </AnimatePresence>
                        
                        {/* Button */}
                        <AnimatePresence exitBeforeEnter>
                            {
                                lang.map((data) => {
                                    return(
                                        language == data &&
                                        
                                        <motion.div className='text-ivory text-sm lg:text-lg xl:text-md 2xl:text-md'
                                        variants={OpacityVariant} initial="initial" animate="animate" exit="exit" key={language + "title"}
                                        transition={{duration: .6, delay: .2}}>
                                        <button type="button" className="focus:outline-none drop-shadow-lg bg-marigold active:bg-marigold_pressed rounded-lg px-5 py-2.5 mr-2 mb-2 ">
                                            { PortfolioData.button.check[language] }
                                        </button>
                                    </motion.div>
                                    )
                                })
                            }
                            
                        </AnimatePresence>
                    </div>
                </motion.div>

                {/* Images Section */}
                <motion.div className='md:flex-wrap justify-center items-center w-full md:w-full lg:w-[60vw] md:mb-[3vh] lg:mb-[5vh] xl:mb-[3vh] 2xl:w-[60vw] 2xl:mb-[4vh] hidden md:flex' layout>
                    { visible_1 &&  <Imagen src={Images[0]} language={language} animation={true} width="md:w-[40vw] lg:w-[21vw] xl:w-[20vw] 2xl:w-[18vw] hidden md:flex" height="md:h-[22vw] lg:h-[21vh] xl:h-[22vh] 2xl:h-[22vh]" onClick={(value) => {setLayout(value); setIndex(0)}}/> }
                    { visible_2 &&  <Imagen src={Images[1]} language={language} animation={true} width="md:w-[40vw] lg:w-[21vw] xl:w-[20vw] 2xl:w-[18vw] hidden md:flex" height="md:h-[22vw] lg:h-[21vh] xl:h-[22vh] 2xl:h-[22vh]" onClick={(value) => {setLayout(value); setIndex(1)}}/> }
                    { visible_3 &&  <Imagen src={Images[2]}language={language}  animation={true} width="md:w-[40vw] lg:w-[21vw] xl:w-[20vw] 2xl:w-[18vw] hidden md:flex" height="md:h-[22vw] lg:h-[21vh] xl:h-[22vh] 2xl:h-[22vh]" onClick={(value) => {setLayout(value); setIndex(2)}}/> }
                    { visible_4 &&  <Imagen src={Images[3]} language={language} animation={true} width="md:w-[40vw] lg:w-[21vw] xl:w-[20vw] 2xl:w-[18vw] hidden md:flex" height="md:h-[22vw] lg:h-[21vh] xl:h-[22vh] 2xl:h-[22vh]" onClick={(value) => {setLayout(value); setIndex(3)}}/> } 
                </motion.div>

                <motion.div className='flex justify-evenly items-center w-[80%] h-[15vh] md:hidden'
                variants={OpacityVariant} initial="initial" animate="animate" exit="exit"
                transition={{duration: .8, delay:.6}}>

                    <button className="h-[6vw] w-[6vw]lg:w-auto lg:h-[3vh] relative"  disabled={disabled} onClick={() => preview(Images.length)}>
                        <img src={PreviewIcon_sm} className="h-full w-auto object-cover" alt="Preview Icon"/>
                    </button>
                    <motion.div className='relative w-[80%]'>
                        <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} swipeable={false}
                        showArrows={false} selectedItem={index} showIndicators={false} transitionTime={600}>
                        {Images.map((i) => {
                            return(
                                <div className='p-[3vw] md:p-[3vh]'>
                                    <img src={i} alt={i.title} className="w-full h-auto object-cover rounded-3xl "/>
                                </div>
                            )
                        })}
                        </Carousel>
                    </motion.div>
                    <button className="h-[6vw] w-[6vw] lg:w-auto lg:h-[3vh] relative" disabled={disabled} onClick={() => next(Images.length)}>
                        <img src={NextIcon_sm} className="h-full w-auto object-cover" alt="Next Icon"/>
                    </button>
                </motion.div>

            </div>

            <div className='absolute top-0 right-0 md:w-[7vw] md:m-[3vw] lg:w-[3vw] lg:m-[2.5vh] xl:w-[3vw] xl:m-[3vh] 2xl:w-[2.5vw] rounded-lg 2xl:m-[3vh]'>
                <button className='hidden md:flex'>
                    <motion.img src={french_icon} animate={{opacity: language === "fr" ? 1 : 0}} 
                    transition={{duration:.5}} alt="French Icon" onClick={onClickLanguage}
                    className="absolute h-auto w-full top-0 rounded-lg shadow-md shadow-black object-cover"/>
                    <motion.img src={english_icon} animate={{opacity: language === "en" ? 1 : 0}} 
                    transition={{duration:.5}} alt="English Icon"  onClick={onClickLanguage}
                    className="absolute h-auto w-full top-0 rounded-lg shadow-md shadow-black object-cover"/>
                    <motion.img src={spanish_icon} animate={{opacity: language === "es" ? 1 : 0}} 
                    transition={{duration:.5}} alt="Spanish Icon"  onClick={onClickLanguage} 
                    className="absolute h-auto w-full top-0 rounded-lg shadow-md shadow-black object-cover"/>
                </button>  
            </div>

            <div className='absolute w-[10vw] h-[10vw] top-0 right-0 my-[3vw] mx-[4.5vw] shadow-sm shadow-black rounded-[50%] md:hidden'>
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

          </motion.div>

        {/* Carousel Layout */}
        <AnimatePresence>
            {layout && <motion.div className="fixed top-0 left-0 w-full h-full"
            variants={OpacityVariant} initial="initial" animate="animate" exit="exit"
            transition={{duration: .8}}>
                <div className='absolute w-full h-full bg-black opacity-95'/>
                    
                <div className='relative w-full h-full flex flex-col justify-evenly items-center'>
                    
                    <motion.img src={logo} className="relative w-auto h-[20%] md:h-[20%] lg:h-[20%] xl:h-[19%] 2xl:h-[20%] object-cover"
                    variants={OpacityVariant} initial="initial" animate="animate" exit="exit"
                    transition={{duration: .8, delay:.4}}/>
                    
                    <motion.div className='flex justify-evenly items-center w-[95%] md:w-[90%] md:h-[35vw] lg:h-auto lg:w-[65vw] xl:h-auto xl:w-[60vw] 2xl:h-auto 2xl:w-[50vw]'
                    variants={OpacityVariant} initial="initial" animate="animate" exit="exit"
                    transition={{duration: .8, delay:.6}}>

                        <button className="h-auto w-[3vw] lg:w-auto lg:h-[3vh] relative"  disabled={disabled} onClick={() => preview(Images.length)}>
                            <img src={PreviewIcon} className="h-full w-auto object-cover" alt="Preview Icon"/>
                        </button>
                        <motion.div className='relative w-[80%]'>
                            <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} swipeable={false}
                            showArrows={false} selectedItem={index} showIndicators={false} transitionTime={600}
                                >
                            {Images.map((i) => {
                                return(
                                    <div className='p-[3vw] md:p-[3vh]'>
                                        <img src={i} alt={i.title} className="w-full h-auto object-cover rounded-3xl "/>
                                    </div>
                                )
                            })}
                            </Carousel>
                        </motion.div>
                        <button className="h-auto w-[3vw] lg:w-auto lg:h-[3vh] relative" disabled={disabled} onClick={() => next(Images.length)}>
                            <img src={NextIcon} className="h-full w-auto object-cover" alt="Next Icon"/>
                        </button>
                    </motion.div>
                    
                </div>

                <div className='absolute top-0 right-0 w-[7vw] m-[3.5vw] md:w-[4vw] md:m-[3vw] lg:m-[3vh] lg:w-[3vw] xl:w-[2.5vw] 2xl:w-[2vw]'>
                    <button>
                        <motion.img src={ExitIcon} animate={{opacity: language === "fr" ? 1 : 0}} 
                        transition={{duration:.5}} alt="French Icon" onClick={() => setLayout(false)}
                        className="absolute h-auto w-full top-0 rounded-lg object-cover"/>
                    </button>  
                </div>
                </motion.div>
            }
        </AnimatePresence>

    </Div100vh>
  )
}
