import React, {useState} from 'react'
import {useAppDispatch, useAppSelector } from '../../app/store'
import { addMobils } from '../appSlice'
import axios from "axios";
interface Props{
    showPic: boolean
    heading: string
    message: string
    link: any
    imgSize: number
}
const pictureLinkRegex = new RegExp(
    /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
  );
  

const AboutMe = ({ heading, message, link, imgSize}:Props) => {
    const dispatch = useAppDispatch()
    const [profilePicUrl, setProfilePicUrl] = React.useState("");
    const [showPic, setShowPic] = React.useState(Boolean(link));

    React.useEffect(() => {
        if (link && !pictureLinkRegex.test(link)) {
          handleRequest();
        } else {
          setProfilePicUrl(link);
        }
      }, [link]);
    
      const handleRequest = async () => {
        const instaLink = "https://www.instagram.com/";
        const instaQuery = "/?__a=1";
        try {
          const response = await axios.get(instaLink + link + instaQuery);
          setProfilePicUrl(response.data.graphql.user.profile_pic_url_hd);
        } catch (error: any) {
          setShowPic(false);
          console.error(error.message);
        }
      };

    return (
        <div className="bg-white p-5 rounded-lg m-0" id="aboutme" >
            <div className="container container-fluid">
                <div className="row">
                     <div className="col-5 d-none d-lg-block align-self-center">
                        {showPic && (
                        <img
                            className="border border-secondary rounded-circle"
                            src={profilePicUrl}
                            alt="profilepicture"
                            width={imgSize}
                            height={imgSize}
                        />
                        )}
                    </div>
                    <div className={`col-lg-${showPic ? "7" : "12"}`}>
                        <h2 className="display-4 mb-5 text-center">{heading}</h2>
                        <p className="lead text-center">{message}</p>
                        <p className="lead text-center">
                            <div
                                className="btn btn-outline-dark btn-lg"
                                //href={''}
                                //target="_blank"
                                //rel="noreferrer noopener"
                                role="button"
                               // aria-label="Resume/CV"
                                onClick={() => dispatch(addMobils('x'))}
                            >
                            Resume
                            </div>
                        </p>
                    </div>
                </div>    
            </div> 
      
        </div>
    )
}

export default AboutMe