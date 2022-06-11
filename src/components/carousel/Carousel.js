import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import 'components/carousel/Carousel.css';
import { useRef } from "react";

import PreviewIcon from 'assets/images/preview_icon.png'
import NextIcon from 'assets/images/next_icon.png'

const xOffset = 100;

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? xOffset : -xOffset,
    opacity: 0,
    transition: { duration: .4 }
  }),
  active: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.2}
  },
  exit: (direction) => ({
    x: direction > 0 ? -xOffset : xOffset,
    opacity: 0,
    transition: { duration: .4 }
  })
};

export const Carousel = (props) => {

  const [direction, setCurrentPage] = useState(0);

  const hasPaginated = useRef(false);



  function detectPaginationGesture(e, { offset }) {
    if (hasPaginated.current) return;
    let newPage = props.index;
    const threshold = xOffset / 2;
 
    if (offset.x < -threshold) {
      // If user is dragging left, go forward a page
      newPage = props.index + 1;
      props.onChange("next")
    } else if (offset.x > threshold) {
      // Else if the user is dragging right,
      // go backwards a page
      newPage = props.index - 1;
      props.onChange("preview")
    }
    if (newPage !== props.index) {
      hasPaginated.current = true;
      // Wrap the page index to within the
      // permitted page range
      newPage = wrap(0, props.images.length, newPage);
      setPage(newPage,offset.x < 0 ? 1 : -1);
    }
  }
 
  function setPage(newPage,newDirection) {
    if (!newDirection) newDirection = newPage - props.index;
    setCurrentPage(newDirection);
  }

  return (
    <div className="flex justify-between items-center h-full w-[100vw] overflow-hidden">
      <img src={PreviewIcon} className="h-auto w-[5vw] lg:w-auto lg:h-[3vh] relative" alt="Preview Icon" onClick={() => props.onChange("preview")}/>

      <div className="slider-container">
        <AnimatePresence
          // This will be used for components to resolve
          // exit variants. It's necessary as removed
          // components won't rerender with
          // the latest state (as they've been removed)
          custom={direction}>
          <motion.img
            key={props.index + props.images[props.index].image.string}
            className="slide"
            src={props.images[props.index].image}
            data-page={props.index}
            variants={variants}
            initial="enter"
            animate="active"
            exit="exit"
            drag="x"
            onDrag={detectPaginationGesture}
            onDragStart={() => (hasPaginated.current = false)}
            onDragEnd={() => (hasPaginated.current = true)}
            // Snap the component back to the center
            // if it hasn't paginated
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            // This will be used for components to resolve all
            // other variants, in this case initial and animate.
            custom={direction}
          />
        </AnimatePresence>
      </div>
      <img src={NextIcon} className="h-auto w-[5vw] lg:w-auto lg:h-[3vh] relative" alt="Preview Icon" onClick={() => props.onChange("next")}/>
    </div>
  );
};
