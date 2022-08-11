import React from 'react';

import classes from '../../Pages/Home/Home.module.css'

const FeaturedCard = (props, i) => {

  const projectNav = (props) => {
    console.log({props})
    // window.open('{project.site}', 'blank', 'noopener noreferrer')
  }


  return (
    <>
      <div className={classes.CardDiv} key={props.i}>
        {/* {props.map((p))} */}
          <h4>Featured Project</h4>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <h6 className={classes.CardTags}>{props.tags}</h6>
          <button onClick={projectNav}>Learn More</button>
      </div>
      <img src={props.img} alt='img1' className={classes.CardImg} />
      {console.log(" bum bun" + props.img)}
    </>
  )
}

export default FeaturedCard