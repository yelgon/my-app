import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const MenuBox = styled.div`
  opacity: 0;
  position: absolute;
  color: #ffffff;
  background: #111;

  font-size: 20px;
  right: 100px;
  top: 80px;
  Link {
    text-decoration: none;
  }

  div {
    padding: 10px;
    margin: 5px;
    text-align: right;
  }
  @media (max-width: 991px) {
    font-size: 18px;
    right: 50px;
    top: 75px;
    div {
      padding: 5px;
    }
  }
`;

const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 100px;
  z-index: 1000;

  .logo {
    position: relative;
    font-size: 2em;
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
    text-decoration: none;
  }
  .toggle {
    max-width: 60px;
    cursor: pointer;
    &:hover > ${MenuBox} {
      opacity: 0.6;
    }

    img {
      max-width: 100%;
    }
  }
  @media (max-width: 991px) {
    padding: 20px 50px;
  }
`;

function NavBar() {
  return (
    <Header>
      <div className="logo">Full-stack Developer</div>

      <div className="toggle">
        <img src="toggle.png" />

        <MenuBox>
          <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
            <div>About me</div>
          </Link>
          <Link
            to="/groupProject"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div>Group Project</div>
          </Link>
          <Link
            to="/socialApp"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div>Social Website</div>
          </Link>
        </MenuBox>
      </div>
    </Header>
  );
}
export default NavBar;
