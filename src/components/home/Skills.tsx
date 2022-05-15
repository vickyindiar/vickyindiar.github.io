import React from 'react'
import { Container } from 'react-bootstrap'
import { skills } from '../../editable-stuff/config'

const Skills = () => {
  return (
    <div className='bg-white m-0' id='skills'>
        <Container className='p-5'>
            <h2 className='display-4 pb-5 text-center'> {skills.heading}</h2>
        </Container>
    </div>
  )
}

export default Skills