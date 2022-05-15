import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { experiences } from '../../editable-stuff/config'
const Experience = () => {
  return (
    <section className='section'>
        <Container>
            <div className='bg-white'>
                <h2 className='display-4 mb-5 text-center'>
                    {experiences.heading}
                </h2>
                <Row>
                    {
                        experiences.data.map((d: any, index:number) => {
                                return(
                                <Col lg="6" key={`exp_${index}`}>
                                    <div className="pb-5 text-center">
                                        <img className=" bg-white mb-3" src={d.companylogo} alt=""/>
                                        <p className="lead">
                                            {d.role}
                                            <br/>
                                            {d.date}
                                        </p>
                                    </div>
                                </Col>
                                )
                        })
                    }
                </Row>
            </div>
        </Container>
    </section>
  )
}

export default Experience