import React from 'react'
import Body from "./Body";
import BodyProj from "./BodyProj";

export default function Home() {

  return (
    <div >
      <div style={{backgroundColor: 'rgb(245,237,222)'}}>
        <Body/>
      </div>
      <div style={{backgroundColor: 'black'}}>
        <BodyProj/>
      </div>
    </div>
  )
}
