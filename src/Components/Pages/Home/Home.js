import React from 'react';

import AvatarImg from '../../../Assets/Home/avatar1.jpg'

import classes from './Home.module.css';
import FeaturedCard from '../../UI/Shared/FeaturedCard';

const Home = () => {

  const ProjectData = [
    {
      'title': 'Freelance Website',
      'description': 'A minimal themed site for my freelance web dev company. This is fully responseive and functional.',
      'tags': 'React Html Css JavaScript',
      'featured': true
    },
    {
      'title': 'Media Site',
      'description': 'This is a media site I designed and developed. This site is only front end, but it does have the different functional components you would expect. This includes a search function and a bookmark component.',
      'tags': 'React JavaScript Html Css',
      'featured': true,
    },
    {
      'title': 'Mack Construction',
      'description': 'This site is a freelance site I created for a small construction businesss. ',
      'tags': 'React JavaScript Html Css',
      'featured': true,
    },
  ]
  


  return (
    <div className={classes.wrapper}>
      <div className={classes.intro}>
        <h4>Hey there, my name is</h4>
        <h1>Adam Saulters.</h1>
        <h2>I help people be seen on the web.</h2>
        <p>I'm a jr. front end engineer specializing in web development and front end web apps. Currently, I'm focused on building my skills and experence in React based front end projects.</p>
        <button>Check out my projects!</button>
      </div>
      <div className={classes.aboutDiv}>
        <div className={classes.sectionHeadings}>
          <h3>01.<span>About Me</span></h3><div></div>
        </div>
        <div className={classes.aboutDiv_text}>
          <p>Hello! My name is Adam. I'm a vet, so I've moved around a lot. One of the big things that stuck with me is my love of the internet. From websites to web based games &#40; Everquest &#41;, I've always been facinated on how everything works. Luckily, in 2020 I ended up realizing that I enjoy building things on the internet itself.
          <br/><br />
          Now if you move forward to today, I have been able to work with many small businesses on a variety of different projects. My main focus today is further developing my skills and helping businesses be seen in a way that allows their customers to really know what they're about.
          <br/><br/>
          Here are a few technolofies I've been working with recently: </p>
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
      <div className={classes.projectsDiv}>
        <div className={classes.sectionHeadings}>
            <h3>02.<span>Some Things I've Built</span></h3><div></div>
        </div>
        <div className={classes.projects}>
          <FeaturedCard projects={ProjectData}/>
        </div>
      </div>

    </div>
  )
}

export default Home