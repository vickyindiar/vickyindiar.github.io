import React from "react";
import Container  from "react-bootstrap/Container";
//import Typist from 'react-text-typist'

type Props = { 
    gradient: string
    title: string
    message: string
}
type Ref = HTMLHeadingElement

const MainBody = (props:Props) => {
    return(
            <div 
              className="bg-light p-5 rounded-lg title bg-transparent bgstyle text-light min-vh-100 d-flex  align-content-center align-items-center flex-wrap m-0" 
              id="home"
              style={{background: `linear-gradient(136deg, ${props.gradient})`,
              backgroundSize: '1200% 1200%'
            }}
            >
              <div id="stars"> </div>
                <Container className="text-center">
                    <h1  className="display-1"> {props.title}</h1>
                    {/* <Typist typingSpeed={5} sentences={[props.message]} loop={false} /> */}
                </Container>
            
            </div>
    )
}

export default MainBody
