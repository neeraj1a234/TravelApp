import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

export default function MainComponent() {
  return (
    <div>
        <div className="head-container">
            <NavBar/>
        </div>
        <div className="outlet-container">
            <Outlet/>
        </div>
    </div>
  )
}
