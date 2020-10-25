import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default class Navigation extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand className="brand" href="#home">
            FGO Grandmaster
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Servants</Nav.Link>
            </Nav>
            {/* <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="light">Search</Button>
            </Form> */}
         
<div className="d-flex align-items-center text-white">
    <div>Server:</div>
    <select className="btn rm-pad-left text-white">
              <option value="NA" selected="selected">
                NA
              </option>
              <option value="JP">JP</option>
            </select>
</div>
            
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
