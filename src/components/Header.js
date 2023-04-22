import React, { useState } from "react";
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Navbar bg="primary " variant="dark">
        <Container className=" ">
          <Nav className="mx-auto">
            <Link className="mt-1" to="/">
              <Navbar.Brand href="#home">Cart Page</Navbar.Brand>
            </Link>
            <Link to="/">
              <Nav.Link href="#home">Home</Nav.Link>
            </Link>
            <Link to="">
              <Nav.Link href="#home">
                <Badge
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  badgeContent={4}
                  color="warning"
                >
                  <i
                    class="fa-sharp fa-solid fa-cart-plus text-light "
                    style={{ fontSize: 24, cursor: "pointer" }}
                  />
                </Badge>
              </Nav.Link>
            </Link>
          </Nav>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button"
          }}
        >
          <div className="text-center p-2">
            <i onClick={handleClose}
              className="fas fa-close "
              style={{ float: "right", cursor: "pointer" }}
            />
            <i class="fa-sharp fa-solid fa-cart-plus text-success" style={{fontSize:35}}></i>
            <p className=" p-5 mb-5"> Your Cart Is Empty</p>
          </div>
        </Menu>
      </Navbar>
    </div>
  );
};

export default Header;
