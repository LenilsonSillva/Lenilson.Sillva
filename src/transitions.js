import React from 'react';
import { motion, AnimatePresence } from "framer-motion";

export default function Transitions({animEnd}) {

  const avWidth = window.screen.availWidth
  const [hide, setHide] = React.useState(false)

  const blackBox = {
    initial: {
      opacity: 1,
      bottom: 0,
    },
    animate: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        duration: 0.2,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  const textContainer = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 0,
      transition: {
        duration: 2,
      },
    },
  };

  const text = {
    initial: {
    },
    animate: {
      transition: {
        duration: 2,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  const hideOk = () => {
    setHide(true);
  }
  const propsAnim = () => {
    animEnd(false)
  }

  return (
    <AnimatePresence mode='wait' exit={{opacity: 0}}>
      <motion.div
      id='colorBg'
        className="relative z-50 flex items-center justify-center w-full bg-black"
        initial="initial"
        animate="animate"
        variants={blackBox}
        onAnimationComplete={hideOk}
        style={{display: hide ? 'none' : 'flex', height: '100vh', width: '100%', alignItems: 'center', justifyContent: 'center', position: 'absolute'}}
      >
        <motion.div onAnimationComplete={propsAnim} variants={textContainer}>
          <motion.p
            variants={text}
            animate='animate'
            initial='initial'
            id='textAnim'
            style={{ fill: "currentColor", fontSize: avWidth < 350 ? 28 : 50, fontFamily: "Sofia", paddingLeft: 10, paddingRight: 10}}
          >
            Lenilson Sillva
          </motion.p>
      </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
