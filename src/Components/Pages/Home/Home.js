import React, {useRef} from 'react';
import emailjs, { send } from '@emailjs/browser';

import AvatarImg from '../../../Assets/Home/avatar1.jpg'

import classes from './Home.module.css';
import BCDImg from '../../../Assets/Home/projects/bcd1.png';
import MediaImg from '../../../Assets/Home/projects/entertaimentApp1.png';
import MCC from '../../../Assets/Home/projects/MCC.PNG';
import GHIcon from '../../../Assets/Home/github.png';
import folderIcon from '../../../Assets/Home/folder.png';

// import EntApp from '../Projects/entertainment-app/src/index';


const Home = () => {

  const form = useRef();
    
  const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('gmail_service', 'template1', form.current, 'DDUtYDQVQORMcdz0B')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  const ProjectData = [
    {
      'id': '1',
      'title': 'Freelance Website',
      'description': 'A minimal themed site for my freelance web dev company. This is fully responseive and functional.',
      'tags': 'React Html Css JavaScript',
      'featured': true,
      'site': 'bullcitydevelopment.com',
      'github': 'https://github.com/asaulters/BCD',
      'img': '../../../Assets/Home/bcd1.png'
    },
    {
      'id': '2',
      'title': 'Media Site',
      'description': 'This is a media site I designed and developed. This site is only front end, but it does have the different functional components you would expect. This includes a search function and a bookmark component.',
      'tags': 'React JavaScript Html Css',
      'featured': true,
      'site': 'https://entertainment-app-rose.vercel.app/',
      'github': 'https://github.com/asaulters/entertainment-app',
      'img': '{MediaImg}'
    },
    {
      'id': '3',
      'title': 'Mack Construction Company',
      'description': 'This site is a freelance site I created for a small general contractor construction businesss. Their goal was to be able to have a nice looking site to send their new clients to allow them to look more professional now that they are bidding on bigger residential and commercail projects.',
      'tags': 'React JavaScript Html Css',
      'featured': true,
      'site': 'mackconstructioncompany.com',
      'img': '../../../Assets/Home/projects/MCC.PNG'
    },

        {
      'id': '4',
      'title': 'Arch Studio FEM Site',
      'description': 'This site is a challenge I got off of Front End Mentor as well back in early 2021. In this I explored more static JS, Html, and Css without React. It gave me a lot of practice on different nav methods as well as what helped really cement grid d/t the design.',
      'tags': ' JavaScript Html Css',
      'featured': false,
      'site': 'https://arch-studio3.vercel.app/index.html',
      'github':'https://github.com/asaulters/Arch-Studio'
    },
    {
      'id': '5',
      'title': 'Designo FEM Site',
      'description': 'This site is a challenge I got off of Front End Mentor back in early 2021. In it, they give you a target for what the site is supposed to do, look like, and have on it and you create it with whatever you wish.  In this I explored more static JS, Html, and Css without React. It gave me a lot of practice on my design development.',
      'tags': ' JavaScript Html Css',
      'featured': false,
      'site': '#',
      'github':'https://github.com/asaulters/FEM---Designo',
      
    },
    {
      'id': '6',
      'title': 'PhotoSnap FEM Site',
      'description': 'This is my first bigger FEM challenge. It is a multi page site that I did before I learned React and much of JS actually. In this I explored more static JS, Html, and Css. It gave me a lot of practice with grid and flex, while helping cement some of my CSS problems I was having at the time.',
      'tags': ' JavaScript Html Css',
      'featured': false,
      'site': 'https://fem-photosnap-app.vercel.app/index.html',
      'github':'https://github.com/asaulters/FEM---Photosnap-App'
    },

  ];



  const projectNav = () => {
    window.open('{EntApp}', "_blank")
  };

  // const projectNavGH = ()=>{
  //   window.open('{project.github}', '_blank')
  // }
  const projectNavGH = ()=>{
    window.location.href='{project.github}';
  }



  return (
    <div className={classes.wrapper}>
      <div className={classes.intro} id="home">
        <h4>Hey there, my name is</h4>
        <h1>Adam Saulters.</h1>
        <h2>I help people be seen on the web.</h2>
        <p>I'm a jr. front end engineer specializing in web development and front end web apps. Currently, I'm focused on building my skills and experence in React based front end projects.</p>
        <button><a href="#projects">Check out my projects!</a></button>
      </div>
      <div className={classes.aboutDiv} id="about">
        <div className={classes.sectionHeadings}>
          <h3>01.<span>About Me</span></h3><div></div>
        </div>
        <div className={classes.aboutDiv_text}>
          <p>Hello! My name is Adam. I'm a veteran, so I've moved around a lot. One of the big things that stuck with me is my love of the internet. From websites to web based games &#40; Everquest &#41;, I've always been facinated on how everything works. Luckily, in 2020 I ended up realizing that I enjoy building things on the internet itself.
          <br/><br />
          Now if you move forward to today, I have been able to work with many small businesses on a variety of different projects. My main focus today is further developing my skills and helping businesses be seen in a way that allows their customers to really know what they're about.
          <br/><br/>
          Here are a few technologies I've been working with recently: </p>
            <ul>
              <li>JavaScript</li>
              <li>Html</li>
              <li>Css</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>
          
        </div>
        <div className={classes.aboutImgWrapper}>
          <img src={AvatarImg} alt='Img of myself'/>
        </div>
        
      </div>
      <div className={classes.projectsDiv} id="projects">
        <div className={classes.sectionHeadings} >
            <h3 className={classes.SH2}>02.<span>Some Things I've Built</span></h3><div></div>
        </div>
        <div className={classes.projects}>
          <div className={classes.cardWrapper1}>
            <div className={classes.CardDiv1} >
              
                <h4>Featured Project</h4>
                <div className={classes.cardText}>
                  <h2>{ProjectData[0].title}</h2>
                  <p>{ProjectData[0].description}</p>
                  <h6 className={classes.CardTags}>{ProjectData[0].tags}</h6>
                </div>
                <button onClick={()=>{
                  window.open('http://bullcitydevelopment.com', "_blank")
                }}><a>Learn More</a></button>
                
            </div>
            <div className={classes.cardImgWrapper1}>
              <img src={BCDImg} alt='img1' className={classes.CardImg} />
            </div>      
          </div>


          <div className={classes.cardWrapper2}>
            <div className={classes.CardDiv2} >
              
                <h4>Featured Project</h4>
                <div className={classes.cardText2}>
                  <h2>{ProjectData[1].title}</h2>
                  <p>{ProjectData[1].description}</p>
                  <h6 className={classes.CardTags}>{ProjectData[1].tags}</h6>
                </div>
                <button onClick={()=>{
                  window.open('https://entertainment-app-rose.vercel.app/', '_blank')
                }}><a>Learn More</a></button>
            </div>
            <div className={classes.cardImgWrapper2}>
              <img src={MediaImg} alt='img1' className={classes.CardImg} />
            </div>      
          </div>



          <div className={classes.cardWrapper3}>
            <div className={classes.CardDiv3} >
              
                <h4>Featured Project</h4>
                <div className={classes.cardText3}>
                  <h2>{ProjectData[2].title}</h2>
                  <p>{ProjectData[2].description}</p>
                  <h6 className={classes.CardTags}>{ProjectData[2].tags}</h6>
                </div>
                <button onClick={()=>{
                  window.open('https://mackconstructioncompany.com/', '_blank')
                }}><a>Learn More</a></button>
            </div>
            <div className={classes.cardImgWrapper3}>
              <img src={MCC} alt='Mack Construction Screenshot' className={classes.CardImg} />
            </div>      
          </div>

          <div className={classes.sectionHeadings}>
            <h3>02.5.<span>Other Projects</span></h3>
        </div>

          <div className={classes.extraProjects}>
            <div className={classes.extraProject1}>
              <div className={classes.EPTop}>
                <img 
                  src={folderIcon} 
                  alt='folder icon'
                    onClick={() => {
                      window.open('https://arch-studio3.vercel.app/index.html')
                    }}
                  />
                <img 
                  src={GHIcon} 
                  alt='github icon'
                  onClick={() =>{
                    window.open('https://github.com/asaulters/Arch-Studio', '_blank')
                  }}  
                  />
              </div>
              <div className={classes.EPBot}>
                <h2>{ProjectData[3].title}</h2>
                  <p>{ProjectData[3].description}</p>
                  <h6 className={classes.CardTags}>{ProjectData[3].tags}</h6>
              </div>
            </div>
          
            <div className={classes.extraProject2}>
              <div className={classes.EPTop}>
              <img 
                  src={folderIcon} 
                  alt='folder icon'
                  onClick={() =>{
                    window.open('https://fem-designo.vercel.app/', '_blank')
                  }}  
                  />
                <img 
                  src={GHIcon} 
                  alt='github icon'
                  onClick={() =>{
                    window.open('https://github.com/asaulters/FEM---Designo', '_blank')
                  }}  />
              </div>
              <div className={classes.EPBot}>
                <h2>{ProjectData[4].title}</h2>
                  <p>{ProjectData[4].description}</p>
                  <h6 className={classes.CardTags}>{ProjectData[4].tags}</h6>
              </div>
            </div>
            <div className={classes.extraProject3}>
              <div className={classes.EPTop}>
              <img 
                  src={folderIcon} 
                  alt='folder icon'
                    onClick={() =>{
                      window.open('https://fem-photosnap-app.vercel.app/', "_blank")
                    }}
                  />
                <img 
                  src={GHIcon} 
                  alt='github icon'
                  onClick={() =>{
                    window.open('https://github.com/asaulters/FEM---Photosnap-App', '_blank')
                  }}  />
              </div>
              <div className={classes.EPBot}>
                <h2>{ProjectData[5].title}</h2>
                  <p>{ProjectData[5].description}</p>
                  <h6 className={classes.CardTags}>{ProjectData[5].tags}</h6>
              </div>
            </div>
          
          </div>
        </div>
      </div>
      <div className={classes.contactDiv} id="contact">
        <div className={classes.sectionHeadings}>
            <h3>03.<span>What's Next</span></h3><div></div>
        </div>
      
        <div className={classes.contactTop}>
          <h3>Drop a Line</h3>
          <p>I'm always on the lookout and open to new and exciting ideas, projects, and opportunities. If you think you have one of these or just want to chat, feel free to drop me a line below. </p>
        </div>
        <div className={classes.contactBot}>
          <form type='submit' ref={form} onSubmit={sendEmail}>
            <input type='text' placeholder='Name *' id='cName' name='Name' required />
            <input type='text' placeholder='Company'  id='cComp' name='Company' />
            <input type='text' placeholder='Phone Number' id='cNumber' name='number' />
            <input type='text' placeholder='Email *' name='email' id='cEmail' required />
            <textarea name='textarea' placeholder='What can I do for you? *' rows='6' cols='30' />
            <button 
              className={classes.contactButton}
              >Send It</button>
          </form>
          {/* <button>Send It</button> */}
        </div>
      </div>
    </div>
  )
}

export default Home