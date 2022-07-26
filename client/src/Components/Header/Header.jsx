import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'

export default function Header() {
  return (
    <div className="container">
        <Link className='link' to='/'>
            <h4 className='button-header'>Start</h4>
        </Link>
        <Link className='link' to='/countries'>
          <h1 className='h1-title'>Countries</h1>
        </Link>
        <Link className='link' to='/addActivitie'>
            <h4 className='button-header'>+ Add Activitie</h4>
        </Link>
    </div>
  )
}
