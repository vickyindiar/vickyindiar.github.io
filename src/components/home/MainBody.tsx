import React from "react";
import Container  from "react-bootstrap/Container";
import Typist from 'react-text-typist'
import Keyboard, { Cursor } from 'react-mk';
import { useAppSelector } from "../../app/store";
// import { selectMobils } from "../appSlice";
type Props = { 
    gradient: string
    title: string
    message: string
    icons: {
        url: string,
        image: string
    }[]
}
type Ref = HTMLHeadingElement

const MainBody = (props:Props) => {
    // const mobils = useAppSelector(selectMobils)
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
                    <h1  className="display-1"> {`Hai, I'm `}<span style={{color:'red'}}>{props.title}</span></h1>
                    {/* <Typist  sentences={["text", "coba"]}  /> */}
                    <Keyboard sentenceDelayPerCharRange={[0, 0]}>I'm a full-stack web developer</Keyboard>
                    <Cursor />
                    <div className="p-5">
                        {props.icons.map((icon:{url:string, image:string}, index) => (
                        <a
                            key={`social-icon-${index}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            href={icon.url}
                            aria-label={`My ${icon.image.split("-")[1]}`}
                        >
                            <i className={`fab ${icon.image}  fa-3x socialicons`} />
                        </a>
                        ))}
                    </div>
                    <a
                        className="btn btn-outline-light btn-lg "
                        href="#aboutme"
                        role="button"
                        aria-label="Learn more about me"
                    >
                        More about me
                    </a>
                    
                </Container>
            
            </div>
    )
}

export default MainBody
