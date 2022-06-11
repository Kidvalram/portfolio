import React from 'react'
import Div100vh from 'react-div-100vh'
import {CVData} from 'shared/CVData.js';
import { motion, AnimatePresence } from 'framer-motion';
import {OpacityVariant} from 'shared/AnimationData.js';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cv_decoration_right_top_lg from 'assets/images/cv_decoration_right_top_lg.png'
import cv_decoration_middle_left_lg from 'assets/images/cv_decoration_middle_left_lg.png'
import cv_decoration_right_bottom_lg from 'assets/images/cv_decoration_right_bottom_lg.png'
import cv_profile from 'assets/images/cv_profile.png'

import cv_icon from 'assets/images/cv_icon.png'
import arrow_icon from 'assets/images/arrow_icon.png'

import english_icon from 'assets/images/english_icon.png';
import french_icon from 'assets/images/french_icon.png';
import spanish_icon from 'assets/images/spanish_icon.png';

export default function CV({language, setTransition, onClickLanguage}) {

    const lang = ["fr", "es", "en"];

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 7000,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
    <Div100vh>
        <div className='absolute bg-oxford_blue w-[120vw] h-full'/>
        
        <div className='w-[100vw] h-full flex justify-center items-center'>

            {/* Decoration */}
            <div className='absolute w-full h-full'>
                <img src={cv_decoration_right_top_lg} className='absolute lg:top-0 right-0 top-0 w-[10vw] md:w-[14vw] md:top-[-1vw] lg:w-[8vw] xl:w-[7.5vw] 2xl:w-[7vw] h-auto ' alt='About decoration'/>
                <img src={cv_decoration_middle_left_lg} className='absolute top-[24vh] w-[20vw] md:top-[38vh] md:w-[12vw] lg:top-[37vh] lg:w-[7vw] xl:top-[38vh] xl:w-[6vw] 2xl:top-[39vh] left-0 2xl:w-[6vw] h-auto' alt='About decoration'/>
                <img src={cv_decoration_right_bottom_lg} className='absolute bottom-0 right-0 w-[20vw] md:w-[14vw] lg:w-[9vw] xl:w-[8vw] 2xl:w-[8vw] h-auto' alt='About decoration'/>
            </div>

            {/* Container lg*/}
            <div className='relative lg:flex-row justify-evenly items-center lg:w-[95%] lg:h-[90%] xl:w-[95%] xl:h-[85%] 2xl:w-[90%] 2xl:h-[80%] hidden lg:flex'>
                
                {/* Left Section */}
                <div className='flex flex-col justify-start items-start text-left lg:gap-[.6vh] xl:gap-[.8vh] 2xl:gap-[1vh] w-[25%]'>

                    <AnimatePresence exitBeforeEnter>
                        {
                            lang.map((data) => {
                                return (
                                    language === data &&
                                    <motion.span className='lg:text-2xl 2xl:text-3xl text-grullo font-trirong'
                                    variants={OpacityVariant} initial="initial" animate="animate" exit="exit" key={language + "title"}
                                    transition={{duration: .8}}>{CVData.formation.title[language]}</motion.span>
                                    
                                )
                            })
                        }
                        {
                            lang.map((data) => {
                                return (
                                    language === data &&
                                    <motion.div variants={OpacityVariant} initial="initial" animate="animate" exit="exit" key={language + "diplomas"}
                                    transition={{duration: .6, delay: .2}}>
                                        {
                                            CVData.formation.diplomas.map((data, index) => {
                                                return(
                                                    <motion.div className='flex flex-row justify-between text-ivory items-start font-roboto lg:text-lg 2xl:text-lg w-full pt-[1vh]' key={index}
                                                    >
                                                        <div className='flex flex-col text-left w-[80%]'>
                                                            <div className='font-playfair 2xl:text-xl'>{data.title[language]}</div>
                                                            <div>{data.time[language]}</div>
                                                            <div>{data.type[language]}</div>
                                                            <div>{data.universtity[language]}</div>
                                                        </div>
                                                        <span>{data.year}</span>
                                                    </motion.div>
                                                )
                                            }) 
                                        }
                                    </motion.div>
                                )
                            })
                        }
                    </AnimatePresence>
                </div>

                {/* Middle Section */}
                <div className='flex flex-col justify-between items-center h-full w-[30%] '>
                    <img src={cv_profile} className="lg:w-[60%] 2xl:w-[65%] h-auto object-cover"/>
                    <div className='flex flex-col justify-center items-center w-full gap-[1vh]'>
                        <AnimatePresence exitBeforeEnter>
                            {
                                lang.map((data) => {
                                    return ( 
                                        language === data &&
                                        <motion.span className='font-trirong lg:text-2xl 2xl:text-2xl text-grullo'
                                        variants={OpacityVariant} initial="initial" animate="animate" exit="exit" key={language + "diplomas"}
                                        transition={{duration: .8}}>
                                            {CVData.tools.title[language]}
                                        </motion.span>
                                    )
                                })
                            }
                        </AnimatePresence>
                        <div className='relative w-full bg-ivory h-[10vh] rounded-3xl shadow-lg shadow-black flex justify-center items-center'>
                            <Slider {...settings} className="w-full lg:h-[4.5vh] xl:h-[5.5vh] 2xl:h-[6vh]">
                                {
                                    CVData.tools.images.map((data) => {
                                        return(
                                            <div >
                                                <div className='w-full flex justify-center items-center lg:h-[4.5vh] xl:h-[5.5vh] 2xl:h-[6vh]'>
                                                    <img src={data.src} alt={data.src} className="h-full w-auto object-cover"/>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className='flex flex-col justify-around items-start text-left w-[20%] h-full'>
                    <div className='flex flex-col justify-start items-start lg:gap-[.6vh] xl:gap-[.8vh] 2xl:gap-[1vh] w-full'>
                        <AnimatePresence exitBeforeEnter>
                            {
                                lang.map((data) => {
                                    return ( 
                                        language === data &&
                                        <motion.span className='lg:text-2xl 2xl:text-3xl text-grullo font-trirong'
                                        variants={OpacityVariant} initial="initial" animate="animate" exit="exit" key={language + "title"}
                                        transition={{duration: .8}}>{CVData.langues.title[language]}</motion.span>
                                    )
                                })
                            }
                            {
                                lang.map((data) => {
                                    return ( 
                                        language === data &&
                                        <motion.div className='flex flex-col justify-start items-center w-full ' variants={OpacityVariant} initial="initial" animate="animate" exit="exit" key={language + "products"}
                                        transition={{duration: .6, delay: .2}}>
                                            {
                                                CVData.langues.langues.map((data, index) => {
                                                    return(
                                                        <motion.div className='flex flex-row justify-between text-ivory items-start font-playfair lg:text-lg w-full lg:pt-[.6vh] xl:pt-[.8vh] 2xl:pt-[1vh]' key={index}>
                                                            
                                                            <div className='flex flex-col text-left'>
                                                            {data.title[language]}
                                                                
                                                            </div>
                                                            <span>{data.level}</span>
                                                        </motion.div>
                                                    )
                                                })  
                                            }

                                        </motion.div>
                                         
                                    )
                                })
                            }
                        </AnimatePresence>
                        
                    </div>
                    <motion.div className='flex flex-col justify-start items-start lg:gap-[.6vh] xl:gap-[.8vh] 2xl:gap-[1vh] w-full'>

                        <AnimatePresence exitBeforeEnter>
                            {
                                lang.map((data) => {
                                    return(
                                        language === data &&
                                        <motion.span className='lg:text-2xl 2xl:text-3xl text-grullo font-trirong'
                                        variants={OpacityVariant} initial="initial" animate="animate" exit="exit" key={language + "title"}
                                        transition={{duration: .8}}>
                                            {CVData.languages.title[language]}
                                        </motion.span>
                                    )
                                })

                            }
                        </AnimatePresence>

                        <AnimatePresence exitBeforeEnter>
                            {
                                lang.map((data) => {
                                    return(
                                        language === data &&
                                        <motion.div className='w-full' variants={OpacityVariant} initial="initial" animate="animate" exit="exit" key={language + "products"}
                                        transition={{duration: .6, delay: .2}}>
                                            {
                                                CVData.languages.languages.map((data, index) => {
                                                    return(
                                                        <div className='flex flex-row justify-between text-ivory items-start font-playfair lg:text-lg w-full lg:pt-[.6vh] xl:pt-[.8vh] 2xl:pt-[1vh]' key={index}>
                                                            <div className='flex flex-col text-left'>
                                                                <div>{data.title}</div>
                                                            </div>
                                                            <span>{data.level}</span>
                                                        </div>
                                                    )
                                                }) 
                                            }
                                        </motion.div>
                                    )
                                })

                            }
                        </AnimatePresence>
                        
                    </motion.div>
                    
                    <div className='flex flex-col justify-start items-center lg:gap-[.6vh] xl:gap-[.8vh] 2xl:gap-[1vh] w-full'>
                        <AnimatePresence exitBeforeEnter>
                            {
                                lang.map((data) => {
                                    return(
                                        language == data &&
                                        <motion.span className='lg:text-2xl 2xl:text-3xl text-grullo font-trirong'
                                        variants={OpacityVariant} initial="initial" animate="animate" exit="exit" key={language + "title"}
                                        transition={{duration: .6, delay: .2}}>{CVData.download.title[language]}
                                        </motion.span>
                                    )
                                })
                            }
                            
                        </AnimatePresence>
                        <button>
                            <img src={cv_icon} alt={cv_icon} className="lg:w-[6vw] xl:w-[4vw] 2xl:w-[4vw] h-auto object-cover"/>
                        </button>
                    </div>
                </div>
                
            </div>

            {/* Container md */}
            <div className='relative flex-col justify-evenly items-center w-[95%] h-[95%] flex lg:hidden'>
                
                <img src={cv_profile} className="h-[23%] w-auto object-cover"/>

                {/* Middle Section */}
                <div className='flex flex-row w-full h-auto justify-around'>
                    
                    {/* Left Section */}
                    <div className='flex flex-col justify-start items-start text-left gap-[1vh] w-[40%]'>

                        <AnimatePresence exitBeforeEnter>
                        {
                            lang.map((data) => {
                                return (
                                    language === data &&
                                    <motion.span className='text-xl text-grullo font-trirong'
                                    variants={OpacityVariant} initial="initial" animate="animate" exit="exit" key={language + "title"}
                                    transition={{duration: .8}}>{CVData.formation.title[language]}</motion.span>
                                    
                                )
                            })
                        }
                        {
                            lang.map((data) => {
                                return (
                                    language === data &&
                                    <motion.div variants={OpacityVariant} initial="initial" animate="animate" exit="exit" key={language + "diplomas"}
                                    transition={{duration: .6, delay: .2}}>
                                        {
                                            CVData.formation.diplomas.map((data, index) => {
                                                return(
                                                    <motion.div className='flex flex-row justify-between text-ivory items-start font-roboto text-md w-full pt-[1vw]' key={index}
                                                    >
                                                        <div className='flex flex-col text-left w-[80%]'>
                                                            <div className='font-playfair text-lg'>{data.title[language]}</div>
                                                            <div>{data.time[language]}</div>
                                                            <div>{data.type[language]}</div>
                                                            <div>{data.universtity[language]}</div>
                                                        </div>
                                                        <span>{data.year}</span>
                                                    </motion.div>
                                                )
                                            }) 
                                        }
                                    </motion.div>
                                )
                            })
                        }
                        </AnimatePresence>
                    </div>

                    {/* Right Section */}
                    <div className='flex flex-col justify-around items-start text-left w-[30%] h-full'>
                        <div className='flex flex-col justify-start items-start gap-[1vw] w-full'>
                            <AnimatePresence exitBeforeEnter>
                                {
                                    lang.map((data) => {
                                        return ( 
                                            language === data &&
                                            <motion.span className='text-xl text-grullo font-trirong'
                                            variants={OpacityVariant} initial="initial" animate="animate" exit="exit" key={language + "title"}
                                            transition={{duration: .8}}>{CVData.langues.title[language]}</motion.span>
                                        )
                                    })
                                }
                                {
                                    lang.map((data) => {
                                        return ( 
                                            language === data &&
                                            <motion.div className='flex flex-col justify-start items-center w-full ' variants={OpacityVariant} initial="initial" animate="animate" exit="exit" key={language + "products"}
                                            transition={{duration: .6, delay: .2}}>
                                                {
                                                    CVData.langues.langues.map((data, index) => {
                                                        return(
                                                            <motion.div className='flex flex-row justify-between text-ivory items-start font-playfair text-md w-full pt-[1vw]' key={index}>
                                                                
                                                                <div className='flex flex-col text-left'>
                                                                {data.title[language]}
                                                                    
                                                                </div>
                                                                <span>{data.level}</span>
                                                            </motion.div>
                                                        )
                                                    })  
                                                }

                                            </motion.div>
                                            
                                        )
                                    })
                                }
                            </AnimatePresence>
                            
                        </div>
                        
                        <motion.div className='flex flex-col justify-start items-start gap-[1vw] w-full'>

                            <AnimatePresence exitBeforeEnter>
                                {
                                    lang.map((data) => {
                                        return(
                                            language === data &&
                                            <motion.span className='text-xl text-grullo font-trirong'
                                            variants={OpacityVariant} initial="initial" animate="animate" exit="exit" key={language + "title"}
                                            transition={{duration: .8}}>
                                                {CVData.languages.title[language]}
                                            </motion.span>
                                        )
                                    })

                                }
                            </AnimatePresence>

                            <AnimatePresence exitBeforeEnter>
                                {
                                    lang.map((data) => {
                                        return(
                                            language === data &&
                                            <motion.div className='w-full' variants={OpacityVariant} initial="initial" animate="animate" exit="exit" key={language + "products"}
                                            transition={{duration: .6, delay: .2}}>
                                                {
                                                    CVData.languages.languages.map((data, index) => {
                                                        return(
                                                            <div className='flex flex-row justify-between text-ivory items-start font-playfair text-md w-full pt-[1vw]' key={index}>
                                                                <div className='flex flex-col text-left'>
                                                                    <div>{data.title}</div>
                                                                </div>
                                                                <span>{data.level}</span>
                                                            </div>
                                                        )
                                                    }) 
                                                }
                                            </motion.div>
                                        )
                                    })

                                }
                            </AnimatePresence>

                            
                            
                        </motion.div>

                        <div className='flex flex-col justify-start items-center gap-[1vh] w-full'>
                            <AnimatePresence exitBeforeEnter>
                                {
                                    lang.map((data) => {
                                        return(
                                            language == data &&
                                            <motion.span className='text-xl text-grullo font-trirong'
                                            variants={OpacityVariant} initial="initial" animate="animate" exit="exit" key={language + "title"}
                                            transition={{duration: .6, delay: .2}}>{CVData.download.title[language]}
                                            </motion.span>
                                        )
                                    })
                                }
                                
                            </AnimatePresence>
                            <button>
                                <img src={cv_icon} alt={cv_icon} className="w-[10vw] h-auto object-cover"/>
                            </button>
                        </div>
                        
                    </div>

                </div>
                
                <div className='flex flex-col justify-center items-center w-[60%] gap-[1vw]'>
                    <AnimatePresence exitBeforeEnter>
                        {
                            lang.map((data) => {
                                return ( 
                                    language === data &&
                                    <motion.span className='font-trirong text-xl text-grullo'
                                    variants={OpacityVariant} initial="initial" animate="animate" exit="exit" key={language + "diplomas"}
                                    transition={{duration: .8}}>
                                        {CVData.tools.title[language]}
                                    </motion.span>
                                )
                            })
                        }
                    </AnimatePresence>
                    <div className='relative w-full bg-ivory h-[10vw] rounded-3xl shadow-lg shadow-black flex justify-center items-center'>
                        <Slider {...settings} className="w-full h-[6vw]">
                            {
                                CVData.tools.images.map((data) => {
                                    return(
                                        <div >
                                            <div className='w-full flex justify-center items-center h-[6vw]'>
                                                <img src={data.src} alt={data.src} className="h-full w-auto object-cover"/>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>

            </div>   

            {/* Back Button */}
            <button className='absolute top-0 left-0 w-[9vw] my-[5vw] mx-[4.5vw] md:my-[4.5vw] md:mx-[3vw] md:w-[8vw] lg:mx-[3vh] lg:my-[3.5vh] lg:m-[3.5vh] lg:w-[4vw] xl:my-[3.5vh] xl:mx-[2.5vh] 2xl:m-[3vh] 2xl:w-[3.5vw] h-auto' onClick={setTransition}>
                <img src={arrow_icon} alt={arrow_icon} className="w-full h-full object-cover"/>
            </button>

            {/* Language Button */}
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
              
        </div>

    </Div100vh>
    )
}
