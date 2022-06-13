import React, {useState, forwardRef, useImperativeHandle} from 'react'

import { ParallaxBanner, Parallax } from 'react-scroll-parallax';
import { Carousel } from 'react-responsive-carousel';
import {PortfolioData} from 'shared/PortfolioData.js';
import { AnimatePresence, motion } from 'framer-motion';

import PreviewIcon from 'assets/images/preview_icon.png'
import NextIcon from 'assets/images/next_icon.png'
import background_image_portfolio_lg from 'assets/images/portfolio_background_image_lg.jpg';
import background_image_portfolio_md from 'assets/images/portfolio_background_image_md.jpg';
import portrait_decoration_top_left_lg from 'assets/images/portrait_decoration_top_left_lg.png'
import portrait_decoration_top_right_lg from 'assets/images/portrait_decoration_top_right_lg.png'
import portrait_decoration_bottom_left_lg from 'assets/images/portrait_decoration_bottom_left_lg.png'
import portrait_decoration_bottom_right_lg from 'assets/images/portrait_decoration_bottom_right_lg.png'
import portrait_decoration_top_left_md from 'assets/images/portrait_decoration_top_left_md.png'
import portrait_decoration_top_right_md from 'assets/images/portrait_decoration_top_right_md.png'
import portrait_decoration_bottom_right_md from 'assets/images/portrait_decoration_bottom_right_md.png'
import logo_round_deco_lg from 'assets/images/logo_round_deco_lg.png'

const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
}

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
}

const Projects = forwardRef((props, ref) => {
    
    const lang = ["fr", "es", "en"];
    const [index,setIndex] = useState(0);
    const [option,setOption] = useState(true);
    const [disabled, setDisabled] = useState(false);

    useImperativeHandle(ref, () => ({
        index,
        childChangeIndex() {
            changeIndex(ref.current.index);
        },
    }));

    const clickOption = (value) => {
        setOption(value)
    }

    const changeIndex = (value) => {
        console.log(value)
        setIndex(value)
        setDisabled(true);
        setTimeout(() => {
            setDisabled(false);
        }, 1000)
    }

    const next = (lenght) => {   
        if (index < lenght - 1) changeIndex(index + 1)    
        else changeIndex(0)
    }

    const preview = (lenght) => {
        if (index > 0) changeIndex(index - 1)
        else changeIndex(lenght - 1)
    }

    return (
        <div className='absolute bottom-0 md:relative w-full h-[45vh] md:h-full flex flex-col lg:flex-row md:flex-col items-end bg-oxford_blue rounded-t-[12%] md:rounded-t-none shadow-top shadow-black md:shado-none'>
            
            {/* Background avatar image lg */}
            <div className='relative h-[100vh] w-[30%] hidden lg:flex shadow-right shadow-black'>
                <ParallaxBanner layers={[{
                    children: <img src={background_image_portfolio_lg} className='absolute w-full h-full object-cover ' alt="Background"/>,
                    speed: 12},
                ]} style={{ aspectRatio: '2 / 1' }}/>
                
                <div className='absolute bottom-0 w-full h-[90vh]'>
                    <div className='absolute inline-block right-0 top-[45vh] mt-[-6.5vh] mr-[-6.5vh]'>
                        <img src={logo_round_deco_lg} className="relative w-auto h-[13vh] object-cover" alt="Background"/>
                    </div>
                </div>
            </div>

            {/* Background avatar image md */}
            <div className='w-full h-[40vh] relative bg-black hidden md:flex lg:hidden shadow-bottom shadow-black'>
                <img src={background_image_portfolio_md} className='relative w-full h-full object-cover' alt="Background"/>
            </div>
            <div className='absolute hidden md:inline-block left-[10vw] top-[40vh] mt-[-6vh] mr-[-6vh] lg:hidden'>
                <img src={logo_round_deco_lg} className="relative w-full h-[12vh] object-cover" alt="Background"/>
            </div>

            {/* Navigation Card */}
            <div className='relative h-[20%] flex justify-evenly md:hidden items-center w-full rounded-tl-3xl rounded-tr-3xl top-0 bg-rich_black shadow-bottom shadow-black'>
                <div className='relative inline-block'>
                    <AnimatePresence exitBeforeEnter>
                        {lang.map((data) => {
                            return (
                                props.language === data && 
                                <button>
                                    <motion.span className={'font-trirong text-ivory text-[4vw]'} 
                                    key={props.language + "button_sm"} variants={variants}
                                    initial="initial" exit="exit"  onClick={() =>  {clickOption(true); changeIndex(0)}}  
                                    animate={{opacity: option ? 1 : 0.6 }} 
                                    transition={{opacity: { duration: .6 }, type: 'linear' }}>
                                        {PortfolioData.category.title.projects[props.language]}              
                                    </motion.span>
                                </button>
                            )
                        })}
                    </AnimatePresence>
                    { option ? ( <motion.div className="border-marigold absolute mt-1 w-full border-t-2" layoutId="underline_bar_portfolio"/>) : <></>} 
                </div>
                <div className='relative inline-block'>
                    <AnimatePresence exitBeforeEnter>
                        {lang.map((data) => {
                        return (
                            props.language === data && 
                            <button>
                                <motion.span className={'font-trirong text-ivory text-[4vw]'} 
                                key={props.language + "button_sm"} variants={variants}
                                initial="initial" exit="exit"  onClick={() =>  {clickOption(false); changeIndex(0)}} 
                                animate={{opacity: !option ? 1 : 0.6 }} 
                                transition={{opacity: { duration: .6 }, type: 'linear' }}>
                                    {PortfolioData.category.title.diplomas[props.language]}             
                                </motion.span>
                            </button>
                        )
                        })}
                    </AnimatePresence>
                    { !option ? ( <motion.div className="border-marigold absolute mt-1 w-full border-t-2" layoutId="underline_bar_portfolio"/>) : <></>} 
                </div>
            </div>                


            {/* Container */}
            <div className='relative w-full h-[80%] md:h-[58vh] lg:h-[90vh] lg:w-[70%] flex flex-col justify-evenly items-center'>
                
                {/* Decoration screen lg */}
                <div className='absolute hidden lg:inline w-full h-full overflow-hidden'>
                    <Parallax translateX={["-50px", "0px"]} translateY={["-50px", "0px"]} opacity={[0,1]}>
                        <img src={portrait_decoration_top_left_lg} className='absolute w-[6vw] h-auto object-cover top-[15vh] left-0' alt="Background Decoration"/>
                    </Parallax>
                    <Parallax translateX={["200px", "0px"]} translateY={["-50px", "0px"]} opacity={[0,1]}>
                        <img src={portrait_decoration_top_right_lg} className='absolute w-[12vw] h-auto object-cover top-0 right-0' alt="Background Decoration"/>
                    </Parallax>
                    <Parallax translateX={["-100px", "0px"]} opacity={[0,1]}>
                        <img src={portrait_decoration_bottom_left_lg} className='absolute w-[5vw] h-auto object-cover bottom-[-90vh] left-0' alt="Background Decoration"/>
                    </Parallax>
                    <Parallax translateX={["150px", "0px"]} translateY={["150px", "0px"]} opacity={[0,1]}>
                        <img src={portrait_decoration_bottom_right_lg} className='absolute w-[6vw] h-auto object-cover bottom-[-90vh] right-0' alt="Background Decoration"/>
                    </Parallax>
                </div>

                {/* Decoration screen md */}
                <div className='absolute hidden md:inline lg:hidden w-full h-full overflow-hidden '>
                    <Parallax translateX={["-50px", "0px"]} >
                        <img src={portrait_decoration_top_left_md} className='absolute w-auto h-[10vw] object-cover top-[5vh] left-0' alt="Background Decoration"/>
                    </Parallax>
                    <Parallax translateX={["200px", "0px"]} >
                        <img src={portrait_decoration_top_right_md} className='absolute w-auto h-[40vw] object-cover top-[5vh] right-0' alt="Background Decoration"/>
                    </Parallax>
                    <Parallax translateX={["150px", "0px"]} translateY={["150px", "0px"]} opacity={[0,1]}>
                        <img src={portrait_decoration_bottom_right_md} className='absolute w-auto h-[10vw] object-cover top-[47vh] right-[5.5vw]' alt="Background Decoration"/>
                    </Parallax>
                </div>

                {/* Container Info lg & md */}
                <motion.div className='relative flex flex-row justify-evenly items-center w-[95%] md:w-[90%] h-[20%] md:h-[30vw] lg:h-[22vh] ' layout="position" transition={{duration:.6}}>
                    {/* Left text lg & md */}
                    <AnimatePresence exitBeforeEnter>
                        <motion.div variants={variants} initial="initial" exit="exit" animate="animate" layout="position" 
                            transition={{opacity: { duration: .8 }, type: 'linear' }} key={index + "title"}
                            className="w-[40%] md:w-[35%] lg:w-[35%]">
                            <AnimatePresence exitBeforeEnter>
                                {lang.map((data) => {
                                    return (
                                    props.language === data && 
                                    <motion.span className={`font-trirong text-ivory  leading-tight text-right`}
                                    key={props.language + "title"} variants={variants} initial="initial" exit="exit" animate="animate" layout="position" 
                                    transition={{opacity: { duration: .8 }, type: 'linear' }}>
                                        <AnimatePresence exitBeforeEnter>
                                            <motion.div className='text-[3.8vw] md:text-[3.5vw] lg:text-[3.2vh]'
                                            variants={variants} initial="initial" exit="exit" animate="animate" layout="position" 
                                            transition={{opacity: { duration: .8 }, type: 'linear' }} key={option + "title"}>
                                                {option && PortfolioData.category.projects[index].title[props.language]}
                                                {!option && PortfolioData.category.diplomas[index].title[props.language]}
                                            </motion.div>
                                        </AnimatePresence>
                                    </motion.span>
                                    )
                                })}
                            </AnimatePresence>
                        </motion.div>
                    </AnimatePresence>
                    
                    {/* Dot container lg & md */}
                    <AnimatePresence exitBeforeEnter>
                        <motion.div className='text-marigold' key={option + "dot"} variants={variants}
                        initial="initial" exit="exit" animate="animate" layout="position"
                        transition={{opacity: { delay: .2, duration: .6 }, type: 'linear' }}>
                            {!option && <span>•</span>}
                        </motion.div>
                    </AnimatePresence>

                    {/* Right container lg & md */}
                    <motion.div className={`lg:w-[40%] w-[45%] max-h-[30vh] md:flex justify-center  md:flex-col  font-roboto text-ivory ${option ? 'md:w-[35%]' : 'gap-[2vh] md:w-[45%]'}`} 
                    layout="position" transition={{duration: .6 }}>
                        {/* Top section lg & md */}
                        <AnimatePresence exitBeforeEnter>
                            <motion.div variants={variants} initial="initial" exit="exit" animate="animate" key={index + "description"}
                            transition={{opacity: { delay: .2, duration: .6 }, type: 'linear' }}>
                                <AnimatePresence exitBeforeEnter>
                                    {lang.map((data) => {
                                        return (
                                        props.language === data && 
                                        <motion.span className='text-left text-ivory' key={props.language + "description"} variants={variants}
                                        initial="initial" exit="exit" animate="animate" transition={{opacity: { delay: .2, duration: .6 }, type: 'linear' }}
                                        layout="position">
                                            <AnimatePresence exitBeforeEnter>
                                                { option &&
                                                    <motion.div variants={variants} initial="initial" key={option + "description"}
                                                    className="md:flex md:flex-col md:gap-[3vw] lg:gap-[2vh]"
                                                    exit="exit" animate="animate" transition={{opacity: { delay: .2, duration: .6 }, type: 'linear' }}>
                                                        <div className='font-roboto lg:text-[2.3vh] md:text-[2.5vw] hidden md:flex'>
                                                            {PortfolioData.category.projects[index].resume[props.language]}
                                                        </div>
                                                        <div className={'font-roboto'}>
                                                            <button type="button" className=" bg-marigold w-[100%] text-[3.2vw] lg:w-[30%] md:w-[50%] lg:text-[2vh] md:text-[1.8vw] flex justify-center items-center shadow-md shadow-black active:bg-marigold_pressed rounded-lg px-3 md:px-5 py-2 mr-2 mb-2"
                                                            onClick={() => props.setTransition(index)}>
                                                                {PortfolioData.button.info[props.language]}
                                                            </button>
                                                        </div>     
                                                    </motion.div>   
                                                }
                                                { !option &&
                                                    <motion.div className='font-trirong text-[3.8vw] lg:text-[3.2vh] md:text-[3.5vw]' variants={variants} 
                                                    initial="initial" exit="exit" animate="animate" key={option + "description"}
                                                    transition={{opacity: { delay: .2, duration: .6 }, type: 'linear' }}>
                                                        {PortfolioData.category.diplomas[index].university[props.language]}
                                                        <br/>
                                                        {PortfolioData.category.diplomas[index].country[props.language]}
                                                    </motion.div> 
                                                   
                                                }
                                            </AnimatePresence>       
                                        </motion.span>
                                        )
                                    })}
                                </AnimatePresence>
                            </motion.div>
                        </AnimatePresence>  
                    </motion.div>
                </motion.div>

                {/* Container Carousel */}
                <motion.div className='w-full flex md:flex-row md:justify-between justify-center items-center' layout="position" transition={{duration:.6}}>
                    
                    {/* Carousel */}
                    <motion.div className='w-[70%] h-auto md:w-[75%]  flex justify-center items-center' transition={{duration:.6}}>
                        <div className='flex justify-evenly items-center lg:h-[40vh] lg:w-[40vw] md:w-[90%] md:h-[35vw]'>
                            <button className="h-auto w-[3vw] lg:w-auto lg:h-[3vh] relative"  disabled={disabled} onClick={() => preview(!option ? PortfolioData.category.diplomas.length : PortfolioData.category.projects.length)}>
                                <img src={PreviewIcon} className="h-full w-auto object-cover" alt="Preview Icon"/>
                            </button>
                            <AnimatePresence exitBeforeEnter>
                                {option && 
                                <motion.div className='relative w-[80%]' variants={variants} 
                                initial="initial" exit="exit" animate="animate" key={option + "carousel"}
                                transition={{opacity: { delay: .2, duration: .6 }, type: 'linear' }}>
                                    <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} swipeable={false}
                                    showArrows={false} selectedItem={index} showIndicators={false} transitionTime={600}
                                     >
                                    {PortfolioData.category.projects.map((i) => {
                                        return(
                                            <div className='px-[3vw] md:px-[3vh]'>
                                                <img src={i.image} alt={i.title} className="w-full h-full object-cover rounded-3xl "/>
                                            </div>
                                        )
                                    })}
                                    </Carousel>
                                </motion.div>
                                }
                                {!option && 
                                <motion.div className='relative w-[80%]' variants={variants} 
                                initial="initial" exit="exit" animate="animate" key={option + "carousel"}
                                transition={{opacity: { delay: .2, duration: .6 }, type: 'linear' }}>
                                    <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} swipeable={false}
                                    showArrows={false} selectedItem={index} showIndicators={false} transitionTime={600}
                                     >
                                    {PortfolioData.category.diplomas.map((i) => {
                                        return(
                                            <div className='px-[3vw] md:px-[3vh]'>
                                                <img src={i.image} alt={i.title} className="w-full h-full object-cover rounded-3xl "/>
                                            </div>
                                        )
                                    })}
                                    </Carousel>
                                </motion.div>
                                }
                            </AnimatePresence> 
                            <button className="h-auto w-[3vw] lg:w-auto lg:h-[3vh] relative" disabled={disabled} onClick={() => next(!option ? PortfolioData.category.diplomas.length : PortfolioData.category.projects.length)}>
                                <img src={NextIcon} className="h-full w-auto object-cover" alt="Next Icon"/>
                            </button>
                        </div>                
                    </motion.div>

                    {/* Button Options lg & md */}
                    <div className='relative lg:w-[25%] md:w-[30%] lg:h-[20vh] md:h-[18vw] md:flex justify-center items-center hidden'>
                        <div className='w-full h-full bg-ivory rounded-l-[50%] shadow-inner-container shadow-drop'/>
                        <div className='absolute flex flex-col justify-center items-center gap-[2vh] md:text-[2.4vw] xl:text-[2.7vh] '>
                            <AnimatePresence exitBeforeEnter>
                                {lang.map((data) => {
                                    return (
                                    props.language === data && 
                                    <motion.span key={props.language + "button_projects"} variants={variants} initial="initial" exit="exit" 
                                    animate="animate" transition={{opacity: { delay: .2, duration: .6 }, type: 'linear' }} layout="position">
                                        <button className="font-playfair text-oxford_blue" onClick={() =>  {clickOption(true); changeIndex(0)}}>
                                            <motion.div key={""} initial={{opacity:0}} exit={{opacity:0}} 
                                            animate={option ? {opacity: 1} : {opacity: 0.6}} transition={{duration: .8}}
                                            >
                                                {PortfolioData.category.title.projects[props.language]}
                                            </motion.div>
                                        </button>
                                        { option && <motion.div className={"header_link_underline"} key="option line"
                                        variants={lineVariants} initial="hidden" animate="show" exit="hidden"/>}                  
                                    </motion.span>   
                                    )
                                })}
                            </AnimatePresence>
                            <div className='relative inline-block'>
                                <AnimatePresence exitBeforeEnter>
                                    {lang.map((data) => {
                                        return (
                                            props.language === data && 
                                            <motion.span key={props.language + "button_projects"} variants={variants} initial="initial" exit="exit" 
                                            animate="animate" transition={{opacity: { delay: .2, duration: .6 }, type: 'linear' }} layout="position">
                                                <button className="font-playfair text-oxford_blue" onClick={() =>  {clickOption(false); changeIndex(0)}}>
                                                    <motion.div key={""} initial={{opacity:0}} exit={{opacity:0}} 
                                                    animate={!option ? {opacity: 1} : {opacity: 0.6}} transition={{duration: .8}} >
                                                        {PortfolioData.category.title.diplomas[props.language]}
                                                    </motion.div>
                                                </button>
                                                {!option && <motion.div className={"header_link_underline"} key="option line"
                                                variants={lineVariants} initial="hidden" animate="show" exit="hidden"/>}             
                                            </motion.span>   
                                        )
                                    })}
                                </AnimatePresence>
                            </div>                   
                        </div>
                    </div>

                </motion.div>

            </div>

        </div>

    )
})

export default Projects

    

