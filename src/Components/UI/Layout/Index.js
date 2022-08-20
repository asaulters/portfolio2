import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';

import classes from './Layout.module.css';
import IgLogo from '../../../Assets/Home/instagram.png';
import LiLogo from '../../../Assets/Home/linkedin.png';
import GhLogo from '../../../Assets/Home/github.png'
import LogoIcon from '../../../Assets/Home/p1-01.png';

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
                    <img src={LogoIcon} alt='logo' />
                </div>
                <div className={classes.links_full}>
                    <div className={classes.nav_Links}>
                        <a href='#home' className={classes.link_a}>Home</a> 
                        <a href='#about' className={classes.link_a}>About</a> 
                        {/* <a href='/' className={classes.link_a}>Experience</a>  */}
                        <a href='#projects' className={classes.link_a}>Work</a> 
                        <a href='#contact' className={classes.link_a}>Contact</a> 
                        <Link to='resume' className={classes.link_a}><span className={classes.resumeLink}>Resume</span></Link> 
                    </div>
                    <button className={classes.burger} onClick={LinkExtend}>
                    {!extend ? <>&#8801;</> : <>&#10005;</> }
                    
                </button>
                </div>

                <div className={classes.extendedLinks}>
                    {extend &&(
                        <div className={classes.extended_nav_links}>
                            <a href='#home' className={classes.link_a}>Home</a> 
                            <a href='#about' className={classes.link_a}>About</a> 
                            {/* <a href='/' className={classes.link_a}>Experience</a>  */}
                            <a href='#projects' className={classes.link_a}>Work</a> 
                            <a href='#contact' className={classes.link_a} id='link1'>Contact</a> 
                            <a href='/' className={classes.resume2Div}><span className={classes.resumeLink2}>Resume</span></a> 
                        </div>
                    )}


                </div>
               </nav>
                
            </header>
            <div>
                <main>{children}</main>
                
            </div>
            <div className={classes.bottomFooter}>
                <div className={classes.socialLinks}>
                    <img 
                        src={GhLogo} 
                        alt='Github Logo' 
                        className={classes.social1}
                        onClick={()=> {
                            window.open('https://github.com/asaulters', "_blank")
                        }}
                        />
                    <img 
                        src={IgLogo} 
                        alt='IG Logo'  
                        className={classes.social}
                        onClick={()=> {
                            window.open('https://www.instagram.com/adam05s/', "_blank")
                        }}
                        />
                    <img 
                        src={LiLogo} 
                        alt='LI Logo'  
                        className={classes.social3}
                        onClick={()=> {
                            window.open('https://www.linkedin.com/in/adamsaulters/', "_blank")
                        }}
                        />
                    <div></div>
                </div>
                <div className={classes.bottomCopy}>
                    <h6>Built by Adam Saulters</h6>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Layout;



