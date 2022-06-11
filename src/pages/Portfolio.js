import Main from 'layout/Main'
import Projects from 'layout/Projects'
import React, {useRef, useState} from 'react'
import { motion } from 'framer-motion';
import { animateScroll as scroll } from 'react-scroll'

const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
}

export default function Portfolio(props) {

    const ref = useRef();

    return (
        <motion.div variants={variants} initial="initial" animate="animate" exit="exit">
            <Main language={props.language} scrollBottom={() => scroll.scrollToBottom()} ref={ref} setTransition={props.setTransition}/>
            <Projects language={props.language} setTransition={props.setTransition}  ref={ref}/>              
        </motion.div>
    )
}
