import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const Button = styled.button`
  width: 30px;
  height: 30px;
  position: absolute;
  bottom: 20px;
  border-radius: 10px;
  box-shadow: 1px 1px #d6d9d3;
  :hover {
    transform: scale(1.2);
  }
`;

const Wrapper = styled.div`
  color: white;
  margin: 100px;
  position: absolute;
  top: 200px;
  font-family: "Waiting for the Sunrise", cursive;
  font-size: 35px;
  letter-spacing: 2px;
  font-weight: bold;
  @media (max-width: 991px) {
    margin: 50px;
  }
`;

function AboutMe() {
  return (
    <div>
      <Wrapper>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "Hello, my name is Yangoh Kim. I studied software engineering at Concordia bootcamp and Korea cyber university. React, NodeJS, Express and MongoDB were used in my projects."
              )
              .pauseFor(500)
              .start();
          }}
        />
      </Wrapper>
      <div style={{ width: "100%", textAlign: "center" }}>
        <Link to="/groupProject">
          <Button />
        </Link>
      </div>
    </div>
  );
}

export default AboutMe;
