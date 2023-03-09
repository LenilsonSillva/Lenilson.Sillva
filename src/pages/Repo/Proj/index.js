import React, {Suspense, lazy} from 'react';
import {Box, CircularProgress, Typography} from '@mui/material'
import {motion} from 'framer-motion'
import Info from '../Info';
import { useTranslation } from 'react-i18next';

const Contents = lazy(() => import('./Contents'));

export default function Proj() {

    const {t} = useTranslation()
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
        },
      },
  
    } 

    return (
      <div>
        <Suspense fallback={
        <Box style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <CircularProgress disableShrink sx={{color:'rgb(3,169,244)'}}/>
            <Typography sx={{color: 'rgb(245,245,245)'}}>{t("Proj.wait")}</Typography>
        </Box>
        }>
          <motion.section exit={{ opacity: 0}} initial="initial" animate="animate" className="space-y-12" variants={contentUp}>
            <Info/>
            <Contents/>
          </motion.section>
        </Suspense>
      </div>
    );
  }



