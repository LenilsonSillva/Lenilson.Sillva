import React from 'react';
import useWindowDimensions from '../../dimensions';
import { Container } from '@mui/material';
import Proj from './Proj';

export default function Repo() {

  const {height, width} = useWindowDimensions();

  return (
    <Container sx={{ bgcolor: 'black', minHeight: `${height - 56}px` }} style={{display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'space-evenly', paddingBlock: width >= 200 && width < 330 ? 17 : width >= 330 && width < 500 ? 24 : width >= 500 ? 5/100*height : 12}}>
      <Proj/>
    </Container>
  )
}
