import React, {useState} from 'react';
import { Document, Page } from 'react-pdf';

import classes from './Resume.module.css'
import resume from '../../../Assets/Home/Adamsaulters Resume (1) (3).pdf'


const Resume = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);


  return (
    <div className={classes.resumePDF}>
        <object 
            data={resume}
            type='application/pdf'
            width='100%' 
            height='100%' 
            alt='resume' />
    </div>
  )
}

export default Resume