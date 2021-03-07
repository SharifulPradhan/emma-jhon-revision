import React from 'react';
import Button from 'react-bootstrap/Button';
import {Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo.png'

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img
          alt=""
          src={logo}
          width="100"
          height="30"
          className="d-inline-block align-top bg-white"
          />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/review">Order Review</Nav.Link>
          <Nav.Link href="/inventory">Inventory</Nav.Link>
        </Nav>
        <Button>Buy Now</Button>
    </Navbar>
  );
};

export default Header;