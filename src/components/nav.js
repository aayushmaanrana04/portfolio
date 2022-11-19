import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import '../css/nav.css'
export default function Nav() {
  let tabElements = ["about_me","projects"];
  return (
    <div className='nav'>
      {tabElements.map((item) => (<Tab name={item} />))}
      <div className='icons'>
      <Icon link={'https://github.com/aayushmaanrana04'} name={'fa-brands fa-github fa-xl'}/>
      <Icon link={'https://www.behance.net/aayushmaanrana04'} name={'fa-brands fa-square-behance fa-xl'}/>
      <Icon link={'https://www.linkedin.com/in/aayushmaanrana04'} name={'fa-brands fa-linkedin fa-xl'}/>
      </div>
    </div>
  )
}

function Tab(props){
  return(
    <NavLink to={`${props.name}`} className={'tab'} exact activeClassName={'tab-active'}>
      {props.name}
    </NavLink>
  )
}

function Icon(props){
  return(
    <a href={props.link} target='_blank'>
      <i className={`${props.name}`}/>
    </a>
  )
}