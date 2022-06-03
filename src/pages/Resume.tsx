import React, { FC, useEffect, useState } from 'react'
import Main from '../layouts/Main'
import { Link } from 'react-router-dom'
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/entry.webpack';
import Pdf from '../data/resume_vicky.pdf'


const Resume:FC = () => {
    const [innerWidth, setInnerWidht] = useState(850)

  useEffect(() =>{
    console.log(window.innerWidth)
    setInnerWidht(window.innerWidth)
  }, [window.innerWidth])
  return (
    <Main title="Resume" description="" >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/resume">Resume</Link></h2>
        </div>
      </header>
      <div className='row'>
            <div className='col'>
              <Document  file='/images/resume_vicky.pdf' className={'pdf-container'}>
                <Page pageNumber={1}  width={innerWidth > 800 ? 850 : 300}/>
              </Document>
            </div>    
       </div>

    </article>
  </Main>
  )
}

export default Resume