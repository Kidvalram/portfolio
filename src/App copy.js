import { BrowserRouter as Router} from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "components/header/Header";
import AnimatedRoutes from "components/AnimatedRoutes";
import Tab from "components/header/Tab";
import { AnimatePresence, motion } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";
import TransitionLayout from "components/transition/TransitionLayout";
import Menu from "layout/Menu";
import Coinrek from "layout/Coinrek";
import Van from "layout/Van";
import CV from "layout/CV";

function App() {

  const [indexLanguage, setIndexLanguage] = useState(0)
  const [open, setOpen] = useState(false);
  const [layout, setLayout] = useState(0)
  const [tab, setTab] = useState(false)
  const language = ["fr","es","en"]
  const size = useWindowSize();
  const [isTabletOrDesktop, setIsTabletOrDesktop] = useState(false)
  
  const setLanguage = () => {
    if(indexLanguage < language.length - 1) setIndexLanguage(indexLanguage + 1);
    else setIndexLanguage(0);
  }

  const setTransition = (value) => {
    setOpen(true)
    setLayout(value)
  }

  useEffect(() => {
    if(size.width >= 768) setIsTabletOrDesktop(true)
    else {
      setIsTabletOrDesktop(false)
      setOpen(false)
    }
  }, [size])

  return (
    <div className="bg-ivory">
      <ParallaxProvider>
        <Router>
          
          <AnimatedRoutes language={language[indexLanguage]} setTransition={(value) => setTransition(value)}/>
          
          <motion.div transition={{duration: .5, type: "tween"}} className="top-0 absolute h-auto w-[100vw]"
          animate={{ x: tab ? 0 : "-100vw"}} initial={{x: "-100vw"}}>
            <Tab onClickMenu={() => setTab(!tab)} open={tab} ilanguage={language[indexLanguage]}/>
          </motion.div>
        
          <Header language={language[indexLanguage]} open={tab} onClickLanguage={setLanguage} onClickMenu={() => setTab(!tab)}/>
          
          <AnimatePresence exitBeforeEnter initial={false}>
            
            {open && 
            <TransitionLayout>
              {
                layout === 0 &&
                <Menu setTransition={() => {setOpen(!open); window.scrollTo(0, document.body.scrollHeight);}} language={language[indexLanguage]} onClickLanguage={setLanguage} />
              }
              {
                layout === 1 &&
                <Coinrek setTransition={() => {setOpen(!open); window.scrollTo(0, document.body.scrollHeight);}} language={language[indexLanguage]} onClickLanguage={setLanguage} />
              }
              {
                layout === 2 &&
                <Van setTransition={() => {setOpen(!open); window.scrollTo(0, document.body.scrollHeight);}} language={language[indexLanguage]} onClickLanguage={setLanguage} />
              }
              {
                layout === 3 && isTabletOrDesktop &&
                <CV setTransition={() => {setOpen(!open);  window.scrollTo(0, 0);}} language={language[indexLanguage]} onClickLanguage={setLanguage}/>
              }      
            </TransitionLayout>}

          </AnimatePresence>
        
        </Router>
       
      </ParallaxProvider>
    </div>
  )
  
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default App;
