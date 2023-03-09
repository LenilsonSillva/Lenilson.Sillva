import React from 'react';
import {Container} from '@mui/material'
import {motion} from 'framer-motion'
import useWindowDimensions from "../../dimensions.js";
import Details from './Details';
import Email from './Email';

export default function Contact() {

    const { height } = useWindowDimensions();

    const contentUp = {
      initial : {
        opacity: 0,
        y: 100
      },
      animate : {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: [0.87, 0, 0.13, 1],
        },
      },
  
    } 

    let avHeight = window.screen.height;
    let avWidth = window.screen.width;

  return (
    <Container maxWidth='xl' className='contact'>
        <motion.section exit={{ opacity: 0}} initial="initial" animate="animate" className="space-y-12" variants={contentUp}  style={{display: 'flex', flexDirection: avWidth >= avHeight && avHeight > 600 ? 'row' : 'column', flex: 1, minHeight: height - 56}}>
          <Details/>
          <Email/>
        </motion.section>
    </Container>
  )
}
