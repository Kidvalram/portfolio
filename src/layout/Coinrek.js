import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'
import Div100vh from 'react-div-100vh'
import {PortfolioData} from 'shared/PortfolioData.js';
import {OpacityVariant} from 'shared/AnimationData.js';
import ReactPlayer from "react-player";

import background_image_lg from 'assets/images/coinrek_image_background_lg.jpg'
import background_image_md from 'assets/images/coinrek_image_background_md.jpg'

import logo_round_deco_lg from 'assets/images/logo_round_deco_lg.png'
import arrow_icon from 'assets/images/arrow_icon.png'

import english_icon from 'assets/images/english_icon.png';
import english_icon_sm from 'assets/images/english_icon_sm.png';
import french_icon_sm from 'assets/images/french_icon_sm.png';
import french_icon from 'assets/images/french_icon.png';
import spanish_icon_sm from 'assets/images/spanish_icon_sm.png';
import spanish_icon from 'assets/images/spanish_icon.png';

import project_decoration_top_left_lg from 'assets/images/project_decoration_top_left_lg.png'
import project_decoration_middle_right_lg from 'assets/images/project_decoration_middle_right_lg.png'
import project_decoration_bottom_left_lg from 'assets/images/project_decoration_bottom_left_lg.png'


export default function Coinrek({setTransition, language, onClickLanguage}) {

    const lang = ["fr", "es", "en"];

    return (
    <Div100vh>
        
        <div className='absolute bg-ivory w-[120vw] h-full'/>
        
        <motion.div className='relative w-[100vw] h-full flex flex-col lg:flex-row justify-between'>
            
            <div className='relative h-[25vh] w-full md:h-[30vh] lg:w-[25vw] xl:w-[25vw] lg:h-full 2xl:w-[30vw] '>
                
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

            <div className='relative flex flex-col items-center justify-evenly h-[70vh] md:h-[68vh] lg:h-full lg:w-[75vw] 2xl:w-[70vw]'>

                <div className='absolute w-full h-full'>
                    <img src={project_decoration_top_left_lg} className='absolute lg:top-0 left-0 top-0 w-[10vw] md:w-[8vw] md:top-[-1vw] lg:w-[4.5vw] xl:w-[4vw] 2xl:w-[4vw] h-auto ' alt='About decoration'/>
                    <img src={project_decoration_middle_right_lg} className='absolute  top-[24vh] w-[20vw] md:top-[22vh] md:w-[15vw] lg:top-[35vh] lg:w-[9vw] xl:top-[35vh] xl:w-[7.5vw] 2xl:top-[35vh] right-0 2xl:w-[8vw] h-auto' alt='About decoration'/>
                    <img src={project_decoration_bottom_left_lg} className='absolute bottom-0 left-0 w-[20vw] md:w-[18vw] lg:w-[12vw] xl:w-[10vw] 2xl:w-[11vw] h-auto' alt='About decoration'/>
                </div>


                {/* Info Section */}
                <motion.div className='relative flex flex-col md:flex-row items-center w-[85%] justify-evenly  gap-[2vw] md:gap-[1vw] md:w-[90%] lg:w-[75%] lg:gap-[3.5vh] xl:w-[70%] xl:gap-[4vh] 2xl:w-[70%] 2xl:gap-[4vh]'>
                    
                    {/* Title Container*/}
                    <AnimatePresence exitBeforeEnter>
                        {
                            lang.map((data) => {
                                return(
                                    language === data &&
                                    <motion.div className='flex justify-start items-start text-left md:justify-center md:text-center md:items-center pt-[2vh] w-full md:pt-0 md:w-[35%] lg:w-[40%]'
                                    variants={OpacityVariant} initial="initial" animate="animate" exit="exit" key={language + "title"}
                                    transition={{duration: .8}}>
                                        <h1 className='font-trirong text-lg md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl text-oxford_blue '>{PortfolioData.category.projects[1].title[language]}</h1>
                                    </motion.div>
                                )
                            })
                        }
                    </AnimatePresence>
                    
                    {/* Info Container */}
                    <div className='flex flex-col w-full gap-[2vw] md:w-[50%] md:gap-[1vw] lg::w-[50%] lg:gap-[1.5vh] lg:h-full xl:gap-[2vh] lg:w-[50%] 2xl:w-[50%] 2xl:h-full font-roboto 2xl:gap-[2vh]'>
                        
                        {/* Information */}
                        <AnimatePresence exitBeforeEnter>
                            {
                                lang.map((data) => {
                                    return(
                                        language === data &&
                                        <motion.span className='text-rich_black text-sm md:text-xl lg:text-lg xl:text-lg 2xl:text-lg'
                                        variants={OpacityVariant} initial="initial" animate="animate" exit="exit" key={language + "title"}
                                        transition={{duration: .6, delay: .2}}>{PortfolioData.category.projects[1].description[language]}
                                        </motion.span>
                                    )
                                })
                            }
                        </AnimatePresence>

                    </div>
                </motion.div>

                <AnimatePresence exitBeforeEnter initial={false}>
                    {
                        language === 'en' &&
                        <motion.div className='relative justify-center items-center w-[75%] h-[35%] md:w-[70%] md:h-[40%] lg:h-[48%] lg:w-[60%]  2xl:w-[60%] flex shadow-lg shadow-black' 
                        layout variants={OpacityVariant} initial="initial" animate="animate" exit="exit" key={language + "en"}
                        transition={{duration: .8}}>
                            <ReactPlayer width={"100%"} height={"100%"} url="https://www.youtube.com/watch?v=v9okPA4q2GY" controls={true}/>
                        </motion.div>
                    }
                    {
                        language === 'es' &&
                        <motion.div className='relative justify-center items-center w-[75%] h-[35%] md:w-[70%] md:h-[40%] lg:h-[48%] lg:w-[60%] 2xl:w-[60%] flex shadow-lg shadow-black' 
                        layout variants={OpacityVariant} initial="initial" animate="animate" exit="exit" key={language + "es"}
                        transition={{duration: .8}}>
                            <ReactPlayer width={"100%"} height={"100%"} url="https://www.youtube.com/watch?v=ltX9X0qdTX0" controls={true}/>
                        </motion.div>
                    }
                    {
                        language === 'fr' &&
                        <motion.div className='relative justify-center items-center w-[75%] h-[35%] md:w-[70%] md:h-[40%] lg:h-[48%] lg:w-[60%]  2xl:w-[60%] flex shadow-lg shadow-black' 
                        layout variants={OpacityVariant} initial="initial" animate="animate" exit="exit" key={language + "fr"}
                        transition={{duration: .8}}>
                            <ReactPlayer width={"100%"} height={"100%"} url="https://www.youtube.com/watch?v=8NVjTKgHZdY" controls={true}/>
                        </motion.div>
                    }
                </AnimatePresence>


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

    </Div100vh>
    )

}
