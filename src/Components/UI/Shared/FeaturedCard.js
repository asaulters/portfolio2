import React from 'react';

import classes from '../../Pages/Home/Home.module.css'

const FeaturedCard = (props, i) => {

  const projectNav = (props) => {
    console.log({props})
    // window.open('{project.site}', 'blank', 'noopener noreferrer')
  }


  return (
    <div className={classes.CardDiv} key={props.index}>
      {/* {props.map((p))} */}
        <h4>Featured Project</h4>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <h6 className={classes.CardTags}>{props.tags}</h6>
        <button onClick={projectNav}>Learn More</button>
    </div>
  )
}

export default FeaturedCard