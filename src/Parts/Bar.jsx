import React, { useState } from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import red from '../assets/red.png'




const Bar = () => {

    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);


  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
    >
      <Container >
        <Navbar.Brand href="/" className="d-flex">
          <img className="rotate" src={red} width="100" height="100" />
          
          
        </Navbar.Brand>
        <br/>

      
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
         
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        
        <br/>
        

        


          
          
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/sr71" onClick={() => updateExpanded(false)}>
               SR-71
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/celestial23"
                onClick={() => updateExpanded(false)}
              >
                 C - 23
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/luminous66"
                onClick={() => updateExpanded(false)}
              >
               {" "}
                L - 66
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/m4"
                onClick={() => updateExpanded(false)}
              >
                 M - 4
              </Nav.Link>
            </Nav.Item>





            
             


            


            

            
          </Nav>

          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Bar;