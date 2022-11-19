import React, { useEffect, useState } from 'react'
import '../css/item.css'
function Projects() {

  return (
    <div className='container'>
      <Item/>
      <Item/>
      <Item/>
    </div>
  )
}

function Item(props){
    return(
      <section>
        <div id={`${props.id}`} className='box'>

        </div>
      </section>
    )
}

export default Projects