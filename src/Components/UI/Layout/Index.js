import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import classes from './Layout.module.css';

const Layout = () => {
  return (
    <>
        <div>
            <h2>Logo</h2>
            <nav>
                <div className={classes.links-full}>
                    <NavLink to='/'>Home</NavLink> 
                    <NavLink to='/'>About</NavLink> 
                    <NavLink to='/'>Experience</NavLink> 
                    <NavLink to='/'>Work</NavLink> 
                    <NavLink to='/'>Contact</NavLink> 
                </div>
                <div className={classes.burger}>
                    <h1>&#8801;</h1>
                </div>
                <div className={classes.links-extended}>
                    <NavLink to='/'>Home</NavLink> 
                    <NavLink to='/'>About</NavLink> 
                    <NavLink to='/'>Experience</NavLink> 
                    <NavLink to='/'>Work</NavLink> 
                    <NavLink to='/'>Contact</NavLink> 
                </div>
            </nav>
            
        </div>

    </>
  )
}

export default Layout;