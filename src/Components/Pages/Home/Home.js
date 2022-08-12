import React from 'react';

import AvatarImg from '../../../Assets/Home/avatar1.jpg'

import classes from './Home.module.css';
import FeaturedCard from '../../UI/Shared/FeaturedCard';
import BCDImg from '../../../Assets/Home/projects/bcd1.png';
import MediaImg from '../../../Assets/Home/projects/entertaimentApp1.png';

const Home = () => {

  const ProjectData = [
    {
      'id': '1',
      'title': 'Freelance Website',
      'description': 'A minimal themed site for my freelance web dev company. This is fully responseive and functional.',
      'tags': 'React Html Css JavaScript',
      'featured': true,
      'site': 'bullcitydevelopment.com',
      'img': '../../../Assets/Home/bcd1.png'
    },
    {
      'id': '2',
      'title': 'Media Site',
      'description': 'This is a media site I designed and developed. This site is only front end, but it does have the different functional components you would expect. This includes a search function and a bookmark component.',
      'tags': 'React JavaScript Html Css',
      'featured': true,
      'site': 'bullcitydevelopment.com',
      'img': '{MediaImg}'
    },
    {
      'id': '3',
      'title': 'Mack Construction',
      'description': 'This site is a freelance site I created for a small construction businesss. Their goal was to be able to have a nice looking site to send their new clients to allow them to look more professional now that they are bidding on bigger projects',
      'tags': 'React JavaScript Html Css',
      'featured': true,
      'site': 'bullcitydevelopment.com',
      'img': '../../../Assets/Home/bcd1.png'
    },
  ];

  const projectNav = () => {
    window.open('{project.site}', 'blank', 'noopener noreferrer')
  }


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
          <p>Hello! My name is Adam. I'm a veteran, so I've moved around a lot. One of the big things that stuck with me is my love of the internet. From websites to web based games &#40; Everquest &#41;, I've always been facinated on how everything works. Luckily, in 2020 I ended up realizing that I enjoy building things on the internet itself.
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
        {/* {ProjectData.filter((project) => project.featured === true).map((project, i)=>(
          <FeaturedCard 
            index={i}
            title={project.title}
            description={project.description}
            tags={project.tags}
            site={project.site}
            img={project.img}
            id={project.id}
            />)
        )} */}
        <div className={classes.cardWrapper1}>
          <div className={classes.CardDiv1} >
            
              <h4>Featured Project</h4>
              <div className={classes.cardText}>
                <h2>{ProjectData[0].title}</h2>
                <p>{ProjectData[0].description}</p>
              </div>
              <h6 className={classes.CardTags}>{ProjectData[0].tags}</h6>
              <button onClick={projectNav}>Learn More</button>
          </div>
          <div className={classes.cardImgWrapper1}>
            <img src={BCDImg} alt='img1' className={classes.CardImg} />
          </div>      
        </div>
        <div className={classes.cardWrapper2}>
          <div className={classes.CardDiv2} >
            
              <h4>Featured Project</h4>
              <h2>{ProjectData[1].title}</h2>
              <p>{ProjectData[1].description}</p>
              <h6 className={classes.CardTags}>{ProjectData[1].tags}</h6>
              <button onClick={projectNav}>Learn More</button>
          </div>
          <div className={classes.cardImgWrapper2}>
            <img src={MediaImg} alt='img1' className={classes.CardImg} />
          </div>      
        </div>
        <div className={classes.cardWrapper3}>
          <div className={classes.CardDiv3} >
            
              <h4>Featured Project</h4>
              <h2>{ProjectData[2].title}</h2>
              <p>{ProjectData[2].description}</p>
              <h6 className={classes.CardTags}>{ProjectData[2].tags}</h6>
              <button onClick={projectNav}>Learn More</button>
          </div>
          <div className={classes.cardImgWrapper3}>
            <img src={MediaImg} alt='img1' className={classes.CardImg} />
          </div>      
        </div>

        </div>
      </div>
      <div className={classes.contactDiv}>
        <div className={classes.sectionHeadings}>
            <h3>03.<span>What's Next</span></h3><div></div>
        </div>
      
        <div className={classes.contactTop}>
          <h3>Drop a Line</h3>
          <p>I'm always on the lookout and open to new and exciting ideas, projects, and opportunities. If you think you have one of these or just want to chat, feel free to drop me a line below. </p>
        </div>
        <div className={classes.contactBot}>
          <form>
            <input type='text' placeholder='Name *' name='Name' required />
            <input type='text' placeholder='Company' name='Company' />
            <input type='text' placeholder='Phone Number' name='number' />
            <input type='text' placeholder='Email *' name='email' required />
            <textarea name='textarea' placeholder='What can I do for you? *' rows='6' cols='30' />
          </form>
          <button>Send It</button>
        </div>
      </div>
    </div>
  )
}

export default Home