import './App.css';
import React, {Suspense} from 'react';
import { Box, LinearProgress } from '@mui/material';
import Flip from 'react-reveal/Flip';
const Pages = React.lazy(() => import('./pages'));

export default function App() {

  const avWidth = window.screen.availWidth

  return(
    <Suspense fallback={
      <Box style={{height: '100vh', width: '100vw', backgroundColor: 'black', display: 'flex', flex: 1, flexDirection: 'column'}}>
        <Box style={{alignItems: 'center', justifyContent: 'center', display: 'flex', flex: 1}}>
          <Flip left cascade collapse><p style={{ color: '#b9b9b9', fontSize: avWidth < 350 ? 28 : 50, fontFamily: "Sofia"}}>Lenilson Sillva</p></Flip>
        </Box>
        <LinearProgress color= 'inherit' sx={{ display: 'flex', width: '100vw', position: 'absolute'}}/>
      </Box>}>
      <Pages/>
    </Suspense>
  )
}
 // 