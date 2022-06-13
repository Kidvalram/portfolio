import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Div100vh from 'react-div-100vh'
import {AboutData} from 'shared/AboutData.js'

//Assets
//Decoration screen lg
import about_decoration_bottom_left_lg from 'assets/images/about_decoration_bottom_left_lg.png'
import about_decoration_top_right_lg from 'assets/images/about_decoration_top_right_lg.png'
import about_division_lg from 'assets/images/about_division_lg.png'
import about_division_md from 'assets/images/about_division_md.png'
import about_decoration_background_1_lg from 'assets/images/about_decoration_background_1_lg.png'
import about_decoration_background_2_lg from 'assets/images/about_decoration_background_2_lg.png'
import about_decoration_background_3_lg from 'assets/images/about_decoration_background_3_lg.png'
import about_decoration_background_4_lg from 'assets/images/about_decoration_background_4_lg.png'
import about_decoration_background_5_lg from 'assets/images/about_decoration_background_5_lg.png'
import about_decoration_background_6_lg from 'assets/images/about_decoration_background_6_lg.png'
import about_decoration_background_7_lg from 'assets/images/about_decoration_background_7_lg.png'
import about_decoration_background_8_lg from 'assets/images/about_decoration_background_8_lg.png'
import about_decoration_background_9_lg from 'assets/images/about_decoration_background_9_lg.png'
import about_decoration_background_10_lg from 'assets/images/about_decoration_background_10_lg.png'
import about_decoration_background_11_lg from 'assets/images/about_decoration_background_11_lg.png'
import about_decoration_background_12_lg from 'assets/images/about_decoration_background_12_lg.png'
import about_decoration_background_13_lg from 'assets/images/about_decoration_background_13_lg.png'
import about_decoration_background_14_lg from 'assets/images/about_decoration_background_14_lg.png'
import about_decoration_background_15_lg from 'assets/images/about_decoration_background_15_lg.png'
import about_decoration_background_16_lg from 'assets/images/about_decoration_background_16_lg.png'
import about_decoration_front_background_0_sm from 'assets/images/about_decoration_front_background_0_sm.png'
import about_decoration_front_background_1_sm from 'assets/images/about_decoration_front_background_1_sm.png'
import about_decoration_front_background_2_sm from 'assets/images/about_decoration_front_background_2_sm.png'
import about_decoration_front_background_3_sm from 'assets/images/about_decoration_front_background_3_sm.png'
import about_decoration_front_background_4_sm from 'assets/images/about_decoration_front_background_4_sm.png'
import about_decoration_front_background_5_sm from 'assets/images/about_decoration_front_background_5_sm.png'
import about_decoration_front_background_6_sm from 'assets/images/about_decoration_front_background_6_sm.png'
import about_decoration_front_background_7_sm from 'assets/images/about_decoration_front_background_7_sm.png'
import about_decoration_front_background_8_sm from 'assets/images/about_decoration_front_background_8_sm.png'
import about_decoration_back_background_0_sm from 'assets/images/about_decoration_back_background_0_sm.png'
import about_decoration_back_background_1_sm from 'assets/images/about_decoration_back_background_1_sm.png'
import about_decoration_back_background_2_sm from 'assets/images/about_decoration_back_background_2_sm.png'
import about_decoration_back_background_3_sm from 'assets/images/about_decoration_back_background_3_sm.png'
import about_decoration_back_background_4_sm from 'assets/images/about_decoration_back_background_4_sm.png'
import about_decoration_back_background_5_sm from 'assets/images/about_decoration_back_background_5_sm.png'
import about_decoration_back_background_6_sm from 'assets/images/about_decoration_back_background_6_sm.png'
import about_decoration_back_background_7_sm from 'assets/images/about_decoration_back_background_7_sm.png'
import about_decoration_back_background_8_sm from 'assets/images/about_decoration_back_background_8_sm.png'

//Decoration screen md
import about_decoration_top_right_md from 'assets/images/about_decoration_top_right_md.png'
import about_decoration_middle_right_md from 'assets/images/about_decoration_middle_right_md.png'

//Decoration screen sm
import about_decoration_top_right_sm from 'assets/images/about_decoration_top_right_sm.png'
import about_decoration_top_left_sm from 'assets/images/about_decoration_top_left_sm.png'
import about_decoration_middle_left_sm from 'assets/images/about_decoration_middle_left_sm.png'
import about_decoration_bottom_left_sm from 'assets/images/about_decoration_bottom_left_sm.png'

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

function SectionInfo({title, description, language}) {

  const lang = ["fr", "es", "en"];

  return(
    <AnimatePresence exitBeforeEnter>
      {lang.map((data) => {
        return (
          language === data && 
          <motion.div className='relative flex flex-col text-right md:text-left gap-[2.5vw] md:gap-[2vw] lg:gap-[2vh] w-[90vw] h-[40vh] md:w-[50vw] md:h-auto lg:w-[30vw] lg:h-[50vh]'
          variants={variants} initial="initial" exit="exit" animate="animate" key={language + "info_container"}
          transition={{opacity: { duration: .8 }, type: 'linear' }}>
            <div className='font-trirong text-oxford_blue text-[5.6vw] md:text-[3.2vw] lg:text-[3.7vh] leading-none'>
              {title}
            </div>
            <div className='font-roboto text-rich_black text-[3.6vw] md:text-[1.8vw] lg:text-[2vh] tracking-tight leading-tight'>
              {description}
            </div>
          </motion.div>
        )
      })}
    </AnimatePresence>
  )
}

function FlipCard(props){
  
  let time =  Math.random() * .8

  return(
    <AnimatePresence exitBeforeEnter> 
        {
          props.visibility && <motion.img src={props.imagen} alt="front image background" className='relative w-auto h-full object-fill'
          variants={variants} initial="initial" exit="exit" animate="animate" transition={{delay: time, duration: .8}} key={props.imagen + "front"}/>
        }
    </AnimatePresence>
    
  )
}

function About({language}) {

  const [visibility,setVisibility] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const lang = ["fr", "es", "en"];

  const changeVisibility = (value) => {
    setVisibility(value)
    setDisabled(true);
    setTimeout(() => {
        setDisabled(false);
    }, 1000)
}

  return (
    <Div100vh>
      <motion.div className='absolute md:bottom-0 md:right-0 w-full h-full md:h-[92vh] lg:h-[90vh] flex flex-col gap-[2vh] justify-start items-end md:items-start overflow-hidden'
      variants={variants} initial="initial" animate="animate" exit="exit">
        
        {/* Decoration */}
        <motion.div className='w-full h-full absolute bg-ivory overflow-hidden' layoutId="background">
          
          {/* Screen lg */}
          <img src={about_decoration_bottom_left_lg} className='absolute bottom-0 left-0 h-auto w-[15vw] hidden lg:flex' alt='About decoration'/>
          <img src={about_decoration_top_right_lg} className='absolute lg:top-0 right-0 lg:w-[15vw] h-auto hidden lg:flex' alt='About decoration'/>
          
          {/* Screen md */}
          <img src={about_decoration_top_right_md} className='absolute top-0 right-0 w-auto h-[32vw] hidden md:flex lg:hidden' alt='About decoration'/>
          <img src={about_decoration_middle_right_md} className='absolute top-[38vh] right-0 w-auto h-[25vw] hidden md:flex lg:hidden' alt='About decoration'/>
          
          {/* Screen sm */}
          <img src={about_decoration_top_left_sm} className='absolute top-0 left-[8vw] h-auto w-[25vw] md:hidden' alt='About decoration'/>
          <img src={about_decoration_top_right_sm} className='absolute top-[10vh] right-0 h-auto w-[15vw] md:hidden' alt='About decoration'/>
          <img src={about_decoration_middle_left_sm} className='absolute top-[55vh] left-0 h-auto w-[14vw] md:hidden' alt='About decoration'/>
          <img src={about_decoration_bottom_left_sm} className='absolute bottom-0 left-[32vw] h-auto w-[40vw] md:hidden' alt='About decoration'/>
          
          {/* Screen background lg and md */}
          {/* First row */}
          <div className='hidden md:flex'>
            <div className='absolute md:bottom-0 md:right-0 md:w-[9.5vw] md:h-auto lg:w-auto lg:h-[7vh] xl:h-[8vh] 2xl:h-[8.5vh]'>
              <FlipCard imagen={about_decoration_background_1_lg} visibility={true}/>
            </div>
            <div className='absolute md:bottom-[10.7vw] md:right-0 md:w-[9.5vw] md:h-auto lg:w-auto lg:bottom-[7.4vh] lg:h-[14vh] xl:bottom-[8.3vh] xl:h-[16vh] 2xl:bottom-[8.8vh] 2xl:h-[17vh]'>
              <FlipCard imagen={about_decoration_background_2_lg} visibility={true}/>
            </div>
            <div className='absolute md:bottom-[30.9vw] md:right-0 md:w-[9.5vw] md:h-auto lg:w-auto lg:bottom-[21.8vh] lg:h-[14vh] xl:h-[16vh] xl:bottom-[25vh] 2xl:bottom-[26vh] 2xl:h-[17vh]'>
              <FlipCard imagen={about_decoration_background_3_lg} visibility={true}/>
            </div>
            {/* Second row */}
            <div className='absolute md:bottom-[.5vw] md:right-[4.2vw] md:w-[23vw] md:h-auto lg:w-auto lg:bottom-[.1vh] lg:right-[3.2vh] lg:h-[14vh] xl:h-[16vh] 2xl:bottom-[.1vh] 2xl:right-[3.6vh] 2xl:h-[17vh]'>
              <FlipCard imagen={about_decoration_background_4_lg} visibility={true}/>
            </div>
            <div className='absolute md:bottom-[20.7vw] md:right-[4.2vw] md:w-[23vw] md:h-auto lg:w-auto lg:bottom-[14.5vh] lg:right-[3.2vh] lg:h-[14vh] xl:h-[16vh] xl:right-[3.6vh] xl:bottom-[16.7vh] 2xl:bottom-[17.4vh] 2xl:right-[3.6vh] 2xl:h-[17vh]'>
              <FlipCard imagen={about_decoration_background_5_lg} visibility={true}/>
            </div>
            <div className='absolute md:bottom-[40.9vw] md:right-[4.1vw] md:w-[23vw] md:h-auto lg:w-auto lg:h-[14vh] lg:right-[3.2vh] lg:bottom-[29vh] xl:right-[3.7vh] xl:bottom-[33vh] xl:h-[16vh] 2xl:bottom-[34.8vh] 2xl:right-[3.6vh] 2xl:h-[17vh]'>
              <FlipCard imagen={about_decoration_background_6_lg} visibility={true}/>
            </div>
            {/* Third row */}
            <div className='absolute md:bottom-[10.7vw] md:right-[21.9vw] md:w-[23vw] md:h-auto lg:w-auto lg:h-[14vh] lg:bottom-[7.4vh] lg:right-[15.8vh] xl:h-[16vh] xl:right-[17.9vh] xl:bottom-[8.3vh] 2xl:bottom-[8.8vh] 2xl:right-[18.6vh] 2xl:h-[17vh] '>
              <FlipCard imagen={about_decoration_background_7_lg} visibility={true}/>
            </div>
            <div className='absolute md:bottom-[30.9vw] md:right-[21.9vw] md:w-[23vw] md:h-auto lg:w-auto lg:bottom-[21.8vh] lg:h-[14vh] lg:right-[15.8vh] xl:h-[16vh] xl:right-[18.1vh] xl:bottom-[24.8vh] 2xl:bottom-[26.2vh] 2xl:right-[18.6vh] 2xl:h-[17vh]'>
              <FlipCard imagen={about_decoration_background_8_lg} visibility={true}/>
            </div>
            <div className='absolute md:bottom-[51.1vw] md:right-[21.8vw] md:w-[23vw] md:h-auto lg:w-auto lg:bottom-[36.2vh] lg:right-[15.8vh] lg:h-[14vh] xl:h-[16vh] xl:right-[18.1vh] xl:bottom-[41.2vh] 2xl:bottom-[43.7vh] 2xl:right-[18.6vh] 2xl:h-[17vh]'>
              <FlipCard imagen={about_decoration_background_9_lg} visibility={true}/>
            </div>
            {/* Forth row */}
            <div className='absolute md:bottom-[.5vw] md:right-[39.6vw] md:w-[23vw] md:h-auto lg:w-auto lg:right-[28.3vh] lg:bottom-[.1vh] lg:h-[14vh] xl:h-[16vh] xl:right-[32.3vh] xl:bottom-[.1vh] 2xl:right-[33.8vh] 2xl:bottom-[.1vh] 2xl:h-[17vh]'>
              <FlipCard imagen={about_decoration_background_11_lg} visibility={true}/>
            </div>
            <div className='absolute md:bottom-[20.7vw] md:right-[39.6vw] md:w-[23vw] md:h-auto lg:w-auto lg:h-[14vh] lg:right-[28.3vh] lg:bottom-[14.5vh] xl:h-[16vh] xl:right-[32.3vh] xl:bottom-[16.6vh] 2xl:bottom-[17.4vh] 2xl:right-[33.8vh] 2xl:h-[17vh]'>
              <FlipCard imagen={about_decoration_background_10_lg} visibility={true}/>
            </div>
            {/* Fifth row */}
            <div className='absolute md:bottom-[10.6vw] md:right-[57.2vw] md:w-[23vw] md:h-auto lg:w-auto lg:right-[40.8vh] lg:bottom-[7.4vh] lg:h-[14vh] xl:h-[16vh] xl:right-[46.7vh] xl:bottom-[8.5vh] 2xl:bottom-[8.8vh] 2xl:right-[49vh] 2xl:h-[17vh]'>
              <FlipCard imagen={about_decoration_background_12_lg} visibility={true}/>
            </div>
            <div className='absolute md:bottom-[31vw] md:right-[57.2vw] md:w-[23vw] md:h-auto lg:w-auto lg:h-[14vh] lg:right-[40.7vh] lg:bottom-[21.8vh] xl:h-[16vh] xl:right-[46.7vh] xl:bottom-[24.9vh] 2xl:bottom-[26.2vh] 2xl:right-[49vh] 2xl:h-[17vh]'>
              <FlipCard imagen={about_decoration_background_13_lg} visibility={true}/>
            </div>
            {/* Sixth row */}
            <div className='absolute md:bottom-[.5vw] md:right-[74.8vw] md:w-[23vw] md:h-auto lg:w-auto lg:h-[14vh] lg:right-[53.4vh] lg:bottom-[.1vh] xl:h-[16vh] xl:right-[61vh] xl:bottom-[.1vh] 2xl:bottom-[.1vh] 2xl:right-[64.2vh] 2xl:h-[17vh]'>
              <FlipCard imagen={about_decoration_background_14_lg} visibility={true}/>
            </div>
            <div className='absolute md:bottom-[20.7vw] md:right-[74.8vw] md:w-[23vw] md:h-auto lg:w-auto lg:h-[14vh] lg:bottom-[14.6vh] lg:right-[53.3vh] xl:h-[16vh] xl:right-[61vh] xl:bottom-[16.9vh] 2xl:bottom-[17.4vh] 2xl:right-[64.2vh] 2xl:h-[17vh]'>
              <FlipCard imagen={about_decoration_background_15_lg} visibility={true}/>
            </div>
            {/* Septh row */}
            <div className='absolute md:hidden lg:flex lg:h-[7.4vh] lg:bottom-[-.2vh] lg:right-[66.4vh] xl:h-[8vh] xl:right-[76vh] xl:bottom-[-.1vh] 2xl:bottom-[-.1vh] 2xl:right-[79.9vh] 2xl:h-[9vh]'>
              <FlipCard imagen={about_decoration_background_16_lg} visibility={true}/>
            </div>
          </div>
          

          {/* Screen background sm */}
          <div className='relative md:hidden'>
            <div className='relative h-[15vw] mb-[12.5vw] w-full'>
              <div className='absolute h-[34vw] w-auto top-[-6.5vw] right-[28vw]'>
                <FlipCard imagen={about_decoration_front_background_8_sm}  visibility={visibility}/>
              </div>
              <div className='absolute h-[34vw] w-auto top-[-6.5vw] right-[28vw]'>
                <FlipCard imagen={about_decoration_back_background_8_sm} visibility={!visibility}/>
              </div>
            </div>
            <div className='relative h-[15vw] my-[12.5vw] w-full'>

              <div className='absolute h-[33vw] top-[-6.5vw] left-0 w-auto'>
                <FlipCard imagen={about_decoration_front_background_5_sm} visibility={visibility}/>
              </div>
              <div className='absolute h-[33vw] top-[-6.5vw] left-0 w-auto'>
                <FlipCard imagen={about_decoration_back_background_5_sm} visibility={!visibility}/>
              </div>

              <div className='absolute h-[34vw] top-[-7vw] left-[27.3vw] w-auto'>
                <FlipCard imagen={about_decoration_front_background_6_sm} visibility={visibility}/>
              </div>
              <div className='absolute h-[34vw] top-[-7vw] left-[27.3vw] w-auto'>
                <FlipCard imagen={about_decoration_back_background_6_sm} visibility={!visibility}/>
              </div>

              <div className='absolute h-[34vw] top-[-7vw] left-[58vw] w-auto'>
                <FlipCard imagen={about_decoration_front_background_7_sm}  visibility={visibility}/>
              </div>
              <div className='absolute h-[34vw] top-[-7vw] left-[58vw] w-auto'>
                <FlipCard imagen={about_decoration_back_background_7_sm}  visibility={!visibility}/>
              </div>
            </div>

            <div className='relative h-[15vw] my-[12.5vw] w-full'>
              
              <div className='absolute h-[33vw] top-[19.5vw] left-0 w-auto'>
                <FlipCard imagen={about_decoration_front_background_0_sm}  visibility={visibility}/>
              </div>
              <div className='absolute h-[33vw] top-[19.5vw] left-0 w-auto'>
                <FlipCard imagen={about_decoration_back_background_0_sm}  visibility={!visibility}/>
              </div>

              <div className='absolute h-[29.2vw] top-[-5vw] left-0 w-auto'>
                <FlipCard imagen={about_decoration_front_background_1_sm}  visibility={visibility}/>
              </div>
              <div className='absolute h-[29.2vw] top-[-5vw] left-0 w-auto'>
                <FlipCard imagen={about_decoration_back_background_1_sm}  visibility={!visibility}/>
              </div>

              <div className='absolute h-[34vw] top-[-7.5vw] left-[12vw] w-auto'>
                <FlipCard imagen={about_decoration_front_background_2_sm}  visibility={visibility}/>
              </div>
              <div className='absolute h-[34vw] top-[-7.5vw] left-[12vw] w-auto'>
                <FlipCard imagen={about_decoration_back_background_2_sm}  visibility={!visibility}/>
              </div>

              <div className='absolute h-[34vw] w-auto top-[-7.5vw] right-[28vw]'>
                <FlipCard imagen={about_decoration_front_background_3_sm}  visibility={visibility}/>
              </div>
              <div className='absolute h-[34vw] w-auto top-[-7.5vw] right-[28vw]'>
                <FlipCard imagen={about_decoration_back_background_3_sm}  visibility={!visibility}/>
              </div>

              <div className='absolute h-[34vw] w-auto top-[-7.5vw] right-0 '>
                <FlipCard imagen={about_decoration_front_background_4_sm}  visibility={visibility}/>
              </div> 
              <div className='absolute h-[34vw] w-auto top-[-7.5vw] right-0 '>
                <FlipCard imagen={about_decoration_back_background_4_sm}  visibility={!visibility}/>
              </div> 
            </div>
            
          </div>
          

        </motion.div>


        {/* Main Cointainer */}
        <div className='relative md:hidden mt-[100vw]'>
           
          {/* Navigation Card */}
          <div className='absolute h-[14vw] flex w-[50vw] top-[-17vw] right-0 justify-evenly items-center rounded-tl-3xl rounded-bl-3xl bg-rich_black  shadow-black md:hidden'>
            <button className='relative inline-block' onClick={() =>  {changeVisibility(true)}} disabled={disabled}>
              <AnimatePresence exitBeforeEnter initial={false}>
                  {lang.map((data) => {
                      return (
                          language === data && 
                          <motion.span className={'relative font-trirong text-ivory text-[4vw]'} 
                          key={language + "button_sm"} variants={variants}
                          initial="initial" exit="exit"   
                          animate={{opacity: visibility ? 1 : 0.6 }} 
                          transition={{opacity: { duration: .6 }, type: 'linear' }}>
                              {AboutData.life.title_button[language]}              
                          </motion.span>
                      )
                  })}
              </AnimatePresence>
              { visibility ? ( <motion.div className="border-marigold absolute mt-1 w-full border-t-2" layoutId="underline_bar_portfolio"/>) : <></>} 
            </button>
            <button className='relative inline-block' onClick={() =>  {changeVisibility(false)}} disabled={disabled}>
              <AnimatePresence exitBeforeEnter initial={false}>
                  {lang.map((data) => {
                  return (
                      language === data && 
                      <motion.span className={'relative font-trirong text-ivory text-[4vw]'} 
                      key={language + "button_sm"} variants={variants}
                      initial="initial" exit="exit"
                      animate={{opacity: !visibility ? 1 : 0.6 }} 
                      transition={{opacity: { duration: .6 }, type: 'linear' }}>
                      {AboutData.hobbits.title_button[language]}             
                  </motion.span>
                  )
                  })}
              </AnimatePresence>
              { !visibility ? ( <motion.div className="border-marigold absolute mt-1 w-full border-t-2" layoutId="underline_bar_portfolio"/>) : <></>} 
            </button>
          </div>  

          {/* Info Container sm*/}
          <div className='relative mr-[4vw] mb-[5vw]'>
            
            <AnimatePresence exitBeforeEnter initial={false}>
              {
                visibility && 
                <motion.div variants={variants} initial="initial" exit="exit" animate="animate" key={visibility + "info_container"}
                transition={{opacity: { duration: .8 }, type: 'linear' }}>
                  <SectionInfo title={AboutData.life.title[language]} description={AboutData.life.description[language]} language={language}/>
                </motion.div>
              }
              {
                !visibility && 
                <motion.div variants={variants} initial="initial" exit="exit" animate="animate" key={visibility + "info_container"}
                transition={{opacity: { duration: .8 }, type: 'linear' }}>
                  <SectionInfo title={AboutData.hobbits.title[language]} description={AboutData.hobbits.description[language]} language={language}/>
                </motion.div>
              }
            </AnimatePresence>
          </div>
        </div>

        {/* Info Container md & lg*/}
        <div className='relative md:ml-[5vw] md:mt-[5vw] lg:ml-[7vh] lg:mt-[5vh] md:top-0 md:left-0 md:bottom-auto md:right-auto hidden md:flex lg:flex-row md:flex-col lg:gap-[4vh] md:gap-[1vh] md:items-start md:justify-start lg:items-center lg:justify-center'>
          {/* Info Container */}
          <SectionInfo title={AboutData.life.title[language]} description={AboutData.life.description[language]} language={language}/>
          <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div className='relative md:h-auto md:w-full lg:h-full lg:w-auto hidden md:flex items-center justify-center'
            variants={variants} initial="initial" exit="exit" animate="animate" key={language + "info_container"}
            transition={{opacity: { duration: .8 }, type: 'linear' }}>
              <img src={about_division_lg} className='w-auto h-[25vh] object-cover md:hidden lg:flex' alt='division'/>
              <img src={about_division_md} className='w-[20vw] h-auto object-cover md:flex lg:hidden' alt='division'/>
            </motion.div>
          </AnimatePresence>
          <SectionInfo title={AboutData.hobbits.title[language]} description={AboutData.hobbits.description[language]} language={language}/>
        </div>
        

     </motion.div>
    </Div100vh>
    

  )
}

export default About