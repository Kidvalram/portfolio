import { Routes, Route, useLocation} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import About from "pages/About";
import Contact from "pages/Contact";
import Portfolio from "pages/Portfolio";

export default function AnimatedRoutes(props) {
    
    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter className="bg-ivory">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Portfolio language={props.language} setTransition={props.setTransition}/>} />
                <Route path="about" element={<About language={props.language}/>} />
                <Route path="contact" element={<Contact language={props.language}/>} />
            </Routes> 
        </AnimatePresence>
    )
}
