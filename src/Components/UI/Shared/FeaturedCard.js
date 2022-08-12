import React from 'react';

import classes from '../../Pages/Home/Home.module.css'

const FeaturedCard = (props, i) => {

  const projectNav = (props) => {
    console.log({props})
    // window.open('{project.site}', 'blank', 'noopener noreferrer')
  }


  return (
    <div className={classes.cardWrapper}>
      <div className={classes.CardDiv} key={props.id}>
        
          <h4>Featured Project</h4>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <h6 className={classes.CardTags}>{props.tags}</h6>
          <button onClick={projectNav}>Learn More</button>
      </div>
      <div className={classes.cardImgWrapper}>
        <img src={props.img} alt='img1' className={classes.CardImg} />
      </div>
      
      
    </div>
  )
}

export default FeaturedCard