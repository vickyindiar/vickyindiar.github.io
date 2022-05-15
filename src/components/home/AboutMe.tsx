import React from 'react'

interface Props{
    showPic: boolean
    heading: string
    message: string
}

const AboutMe = ({showPic, heading, message}:Props) => {
    return (
        <div className="bg-light p-5 rounded-lg m-0" id="aboutme" >
            <div className="container container-fluid">
                <div className="row">
                     <div className="col-5 d-none d-lg-block align-self-center">
                        {/* {showPic && (
                        <img
                            className="border border-secondary rounded-circle"
                            src={profilePicUrl}
                            alt="profilepicture"
                            width={imgSize}
                            height={imgSize}
                        />
                        )} */}
                    </div>
                    <div className={`col-lg-${showPic ? "7" : "12"}`}>
                        <h2 className="display-4 mb-5 text-center">{heading}</h2>
                        <p className="lead text-center">{message}</p>
                        <p className="lead text-center">
                            <a
                                className="btn btn-outline-dark btn-lg"
                                href={''}
                                target="_blank"
                                rel="noreferrer noopener"
                                role="button"
                                aria-label="Resume/CV"
                            >
                            Resume
                            </a>
                        </p>
                    </div>
                </div>    
            </div> 
      
        </div>
    )
}

export default AboutMe