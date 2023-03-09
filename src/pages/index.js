import React from 'react'
import NavBar from './Home/NavBar';
import FNote from './Home/FNote';
import Routes from '../Routes';
import { motion } from 'framer-motion';
import Transitions from '../transitions';

export default function Pages() {

  const [anim, setAnim] = React.useState(true)

  const contentUp = {
    initial : {
      y: 100,
      bottom: 0,
      opacity: 0
    },
    animate : {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.87, 0, 0.13, 1],
        delay: 1.98
      },
    }
  } 

  const animEnd = (data) => {
    setAnim(data);
    console.log(data)
  }

  return (
    <motion.section exit={{ opacity: 0}}>
      <Transitions animEnd={animEnd}/>
      <motion.div initial="initial" animate="animate" className="space-y-12" variants={contentUp} style={{ backgroundColor: 'black', display: anim ? 'none' : 'block'}}>
          <NavBar/>
            <Routes/>
          <FNote/>
      </motion.div>
    </motion.section>
  )
}
