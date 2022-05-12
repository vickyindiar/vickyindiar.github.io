import React from "react";
import { Container } from "react-bootstrap";
interface FooterProps {
    children?: React.ReactNode; // 👈️ for demo purposes
  }

const Footer = (props: FooterProps) => {
 const bgStyle = { backgroundColor: '#f5f5f5' }
    return(
        <footer style={bgStyle} className="mt-auto py-5 text-center" >
            <Container>
                {props.children}
                <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
                <a className="badge badge-dark" rel="noopener" href="https://github.com/vickyindiar" aria-label="My GitHub" >
                Vicky Indiar
                </a>{" "} using <i className="fab fa-react" />
    
            </Container>
        </footer>
    )

}
export default Footer