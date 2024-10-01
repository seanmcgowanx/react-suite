import React from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'

export default function Layout() {

    const activeStyle = ({ isActive }) => isActive ? "anchor-active" : ""

    return (
        <>
            <Link className="title-anchor" to="/">
                <h1 className='title'>React Suite</h1>
            </Link>
            <nav>
                <NavLink to="/badges" className={activeStyle}>Badges</NavLink>
                <NavLink to="/banners" className={activeStyle}>Banners</NavLink>
                <NavLink to="/cards" className={activeStyle}>Cards</NavLink>
                <NavLink to="/testimonials" className={activeStyle}>Testimonials</NavLink>
            </nav>
            <Outlet />
            <footer>
                <p>Created by Sean McGowan</p>
            </footer>
        </>
    )
}