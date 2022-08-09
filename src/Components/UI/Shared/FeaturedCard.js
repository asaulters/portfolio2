import React from 'react';

import classes from '../../Pages/Home/Home.module.css'

const FeaturedCard = (props, i) => {
  return (
    <div className={classes.CardDiv} key={i}>
        <h4>Featured Project</h4>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <h6 className={classes.CardTags}>{props.tags}</h6>
        <button>Learn More</button>
    </div>
  )
}

export default FeaturedCard