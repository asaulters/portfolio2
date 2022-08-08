import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';

import classes from './Layout.module.css';

const Layout = ({children}) => {
    const [extend, setExtend] = useState(false);

    const LinkExtend = ()=> {
        setExtend((curr) =>!curr);
    }


  return (
    <>
        <div className={classes.wrapper}>
            <header>
               <nav>
                <div className={classes.logoDiv}>
                    <h2>logo</h2>
                </div>
                <div className={classes.links_full}>
                    <div className={classes.nav_Links}>
                        <NavLink to='/' className={classes.link_a}>Home</NavLink> 
                        <NavLink to='/' className={classes.link_a}>About</NavLink> 
                        <NavLink to='/' className={classes.link_a}>Experience</NavLink> 
                        <NavLink to='/' className={classes.link_a}>Work</NavLink> 
                        <NavLink to='/' className={classes.link_a}>Contact</NavLink> 
                    </div>
                    <button className={classes.burger} onClick={LinkExtend}>
                    {!extend ? <>&#8801;</> : <>&#10005;</> }
                    
                </button>
                </div>

                <div className={classes.extendedLinks}>
                    {extend &&(
                        <div className={classes.extended_nav_links}>
                            <NavLink to='/' className={classes.link_a}>Home</NavLink> 
                            <NavLink to='/' className={classes.link_a}>About</NavLink> 
                            <NavLink to='/' className={classes.link_a}>Experience</NavLink> 
                            <NavLink to='/' className={classes.link_a}>Work</NavLink> 
                            <NavLink to='/' className={classes.link_a}>Contact</NavLink> 
                        </div>
                    )}


                </div>
               </nav>
                
            </header>
            <div>
                <main>{children}</main>
                
            </div>
        </div>
        
    </>
  )
}

export default Layout;




{/* <h2>Logo</h2>
<nav>
    <div className={classes.links_full}>
        <NavLink to='/'>Home</NavLink> 
        <NavLink to='/'>About</NavLink> 
        <NavLink to='/'>Experience</NavLink> 
        <NavLink to='/'>Work</NavLink> 
        <NavLink to='/'>Contact</NavLink> 
    </div>
    <div className={classes.burger}>
        <h1>&#8801;</h1>
    </div>
    <div className={classes.links_extended}>
        <NavLink to='/'>Home</NavLink> 
        <NavLink to='/'>About</NavLink> 
        <NavLink to='/'>Experience</NavLink> 
        <NavLink to='/'>Work</NavLink> 
        <NavLink to='/'>Contact</NavLink> 
    </div>
</nav>

</header> */}