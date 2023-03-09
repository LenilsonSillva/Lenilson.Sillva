import React from 'react';
import { Route, Routes as Rout} from 'react-router-dom';
import Home from './pages/Home/';
import Repo from './pages/Repo/';
import Contact from './pages/Contact';

export default function Routes() {
  return (
    <div>
        <Rout>
            <Route exact path='/' element={<Home/>} index/>
            <Route exact path='/projects' element={<Repo/>}/>
            <Route exact path='/contact' element={<Contact/>}/>
        </Rout>
    </div>
  )
}
