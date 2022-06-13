import React from "react"
import { motion } from "framer-motion";

const TransAnimation = {
    hidden: {x: "120vw"},
    show: { x: "0vw"},
    hide: { x: "120vw"}
}

class TransitionLayout extends React.Component {
    render(){
      return (
        <motion.div variants={TransAnimation}
          className="fixed w-auto h-auto bottom-0 top-0 left-0 right-0 shadow-2xl shadow-black"
          initial="hidden" animate="show" exit="hide" transition={{duration: 1.8, type: "spring" }}>
            {this.props.children}
        </motion.div>
      )
    }
  }

  export default TransitionLayout;