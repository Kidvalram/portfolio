import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import Div100vh from 'react-div-100vh';
import {ContactData} from 'shared/ContactData.js'

//Decoration Screen lg
import contact_image_background_lg from 'assets/images/contact_image_background_lg.png'
import contact_image_background_md from 'assets/images/contact_image_background_md.png'
import contact_decoration_left_middle from 'assets/images/contact_decoration_left_middle_lg.png'
import contact_decoration_right_top from 'assets/images/contact_decoration_right_top_lg.png'
import contact_decoration_right_bottom from 'assets/images/contact_decoration_right_bottom_lg.png'
import contact_decoration_middle_bottom from 'assets/images/contact_decoration_middle_bottom_sm.png'

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

function Contact({language}) {

  const lang = ["fr", "es", "en"];

  return (
    <Div100vh>
      
      <motion.div className='absolute bottom-0 w-full h-full xl:h-[90vh] md:h-[92vh] flex items-center justify-center'
      variants={variants} initial="initial" animate="animate" exit="exit" >
        
        {/* Decoration Container */}
        <div className='w-full h-full absolute bg-oxford_blue' layoutId="background">
          <img src={contact_decoration_left_middle} alt="Imagen Decoration" 
          className='absolute right-0 rotate-180 md:rotate-0 md:right-auto md:left-0 top-[53vh] md:top-[30vh] w-[13vw] md:w-[12vw] lg:w-[9vw] xl:w-[9vw] 2xl:w-[7vw] xl:h-auto'/>
          <img src={contact_decoration_right_top} alt="Imagen Decoration" 
          className='absolute left-0 md:right-0 md:left-auto rotate-180 md:rotate-0 top-[-7vw] md:top-0 w-[24vw] md:w-[19vw] lg:w-[16vw] xl:w-[14vw] 2xl:w-[11vw] xl:h-auto'/>
          <img src={contact_decoration_right_bottom} alt="Imagen Decoration" 
          className='absolute right-0 bottom-0 hidden lg:flex lg:w-[13vw] xl:w-[11vw] 2xl:w-[9vw] h-auto'/>
          <img src={contact_decoration_middle_bottom} alt="Imagen Decoration"
          className='absolute lg:hidden bottom-0 right-[35vw] w-[30vw] md:right-[38vw] md:w-[25vw] '/>
        </div>
        
        <motion.div className='relative flex justify-evenly items-center flex-col lg:flex-row w-full h-full'>
          
          {/* Imagen Background lg*/}
          <motion.img src={contact_image_background_lg} className='relative lg:w-[23vw] xl:w-[20vw] 2xl:w-[15vw] h-[100vh] object-cover shadow-2xl shadow-black hidden lg:flex'
          variants={variants} initial="initial" exit="exit" animate="animate"
          transition={{duration: 1}}/> 

          {/* Main Container */}
          <div class="grid grid-cols-1 divide-y text-center">
            
            <div className='flex flex-col justify-evenly items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-1 w-[88vw] md:w-[70vw] gap-[3vw] md:gap-[2.5vh] lg:w-[35vw] lg:gap-[2vh] p-[4vw] md:p-[2vw] lg:p-[1.5vh] xl:w-[32vw] xl:gap-[3vh] xl:p-[2vh] 2xl:w-[30vw]'>
              
              {/* Title */}
              <AnimatePresence exitBeforeEnter initial={false}>
                {lang.map((data) => {
                  return (
                    language === data && 
                    <motion.span className='font-trirong text-ivory text-[5vw] md:text-[3.5vw] lg:text-[3.4vh] xl:text-[4vh]'
                    variants={variants} initial="initial" exit="exit" animate="animate" key={language + "title"}
                    transition={{opacity: { duration: .8 }, type: 'linear' }}>
                      {ContactData.title[language]}
                    </motion.span>
                  )
                })}
              </AnimatePresence>
              
              {/* Description */}
              <AnimatePresence exitBeforeEnter initial={false}>
                {lang.map((data) => {
                  return (
                    language === data && 
                    <motion.span className='font-roboto text-ivory text-[3.8vw] md:text-[1.9vw] lg:text-[1.8vh] xl:text-[2vh] text-center'
                    variants={variants} initial="initial" exit="exit" animate="animate" key={language + "description"}
                    transition={{opacity: { delay: .2, duration: .6 }, type: 'linear' }}>
                      {ContactData.description[language]}
                    </motion.span>
                  )
                })}
              </AnimatePresence>
              
              <div className='w-full grid grid-rows-1 place-items-center md:grid-cols-2 md:grid-rows-none lg:grid-rows-1 lg:grid-cols-none gap-[3vw] md:gap-[2vw] lg:gap-[2vh]'>

                {/* Name input */}
                <AnimatePresence exitBeforeEnter initial={false}>
                  {lang.map((data) => {
                    return (
                      language === data && 
                      <motion.div className='relative w-full text-[2vw]' 
                      variants={variants} initial="initial" exit="exit" animate="animate" key={language + "name"}
                        transition={{opacity: { delay: .2, duration: .6 }, type: 'linear' }}>
                        <input className="w-full bg-gray-100 rounded borde border-oxford_blue focus:border-marigold text-[3.8vw] md:text-[1.9vw] lg:text-[1.8vh] outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        type="text" id="name" name="name" placeholder={ContactData.names[language]}/>
                      </motion.div>
                    )
                  })}
                </AnimatePresence>
                  
                {/* Email input */}
                <AnimatePresence exitBeforeEnter initial={false}>
                  {lang.map((data) => {
                    return (
                      language === data && 
                      <motion.div className='relative  w-full ' 
                      variants={variants} initial="initial" exit="exit" animate="animate" key={language + "email"}
                        transition={{opacity: { delay: .2, duration: .6 }, type: 'linear' }}>
                        <input className="w-full bg-gray-100 rounded border border-oxford_blue focus:border-marigold text-[3.8vw] md:text-[1.9vw] lg:text-[1.8vh] outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          type="text" id="email" name="email" placeholder={ContactData.email[language]}/>
                      </motion.div>
                    )
                  })}
                </AnimatePresence>

              </div>
             
              {/* Message input */}
              <AnimatePresence exitBeforeEnter initial={false}>
                {lang.map((data) => {
                  return (
                    language === data && 
                    <motion.div className='relative w-full' variants={variants} initial="initial" 
                    exit="exit" animate="animate" key={language + "message"}
                    transition={{opacity: { delay: .2, duration: .6 }, type: 'linear' }}>
                      <textarea className="w-full text-[3.8vw] md:text-[1.9vw] lg:text-[1.8vh] bg-gray-100 rounded border border-oxford_blue focus:border-marigold h-[20vw] md:h-[12vh] lg:h-[20vh] xl:h-[22vh] 2xl:h-[25vh] outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      type="text" id="message" name="message" placeholder={ContactData.message[language]}/>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
              
              {/* Send button */}
              <AnimatePresence exitBeforeEnter initial={false}>
                {lang.map((data) => {
                  return (
                    language === data && 
                    <motion.div className='relative w-full' variants={variants} initial="initial" 
                    exit="exit" animate="animate" key={language + "button"}
                    transition={{opacity: { delay: .2, duration: .6 }, type: 'linear' }}>
                      <button type="button" className="flex mx-auto text-white bg-marigold border-0 py-2 px-8 focus:outline-none active:bg-marigold_pressed rounded text-[3.8vw] md:text-[1.7vw] lg:text-[1.6vh] xl:text-[1.8vh]">
                        {ContactData.title_button[language]}
                      </button>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
              
            </div>  

            <div className='font-roboto text-[3.8vw] md:text-[1.9vw] lg:text-[1.8vh] xl:text-[2vh] text-ivory p-[2vh]'>
              valram@domory.co
            </div>
          </div>

          <motion.img src={contact_image_background_md} alt="Image Background"
          className='relative w-full h-[20vh] md:h-[25vh] lg:hidden shadow-md shadow-black object-cover'
          variants={variants} initial="initial" exit="exit" animate="animate"
          transition={{duration: 1}}/>

        </motion.div >
     </motion.div>
    </Div100vh>
    

  )
}

export default Contact