import React, {forwardRef, useState} from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { mainBody, repos, about, skills  } from '../editable-stuff/config';

const Navigation = forwardRef((props, ref) => {
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef<HTMLDivElement>(null);
  
  return (
    <Navbar ref={navbarMenuRef} expand="lg" className={ `fixed-top ${!isTop?"navbar-white":"navbar-transparent"}` } >
        <Navbar.Brand className="brand" href={process.env.PUBLIC_URL +"/#home"}>
            {`<${mainBody.firstName}/>`}
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {repos.show && (
            <Nav.Link className="nav-link lead" href={process.env.PUBLIC_URL + "/#projects"} >
              Projects
            </Nav.Link>
          )}
          <Nav.Link className="nav-link lead" href={about.resume} target="_blank" rel="noreferrer noopener" >
            Resume
          </Nav.Link>
          {about.show && (
            <Nav.Link className="nav-link lead" href={process.env.PUBLIC_URL + "/#aboutme"} >
              About
            </Nav.Link>
          )}
          {skills.show && (
            <Nav.Link className="nav-link lead" href={process.env.PUBLIC_URL + "/#skills"} >
              Skills
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  );
} )
export default Navigation