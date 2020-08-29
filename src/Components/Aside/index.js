import React from "react";

import { Container } from "./styles";
import logoreact from "../../assets/reactlogo.png";
import { FaUser } from "react-icons/fa";

function Aside({most}) {
  return (
    <Container most={most}>
      <header>
        <h2 style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
          <img src={logoreact} alt=" " width="50px" draggable={false} />
          JONIS TIM
        </h2>
      </header>
      <hr />

      <ul>
        <li>
          <FaUser size={25} style={{ marginRight: 17 }} />
          User
        </li>
        <li>
          <FaUser size={25} style={{ marginRight: 17 }} />
          User
        </li>
        <li>
          <FaUser size={25} style={{ marginRight: 17 }} />
          User
        </li>
        <li>
          <FaUser size={25} style={{ marginRight: 17 }} />
          User
        </li>
        <li>
          <FaUser size={25} style={{ marginRight: 17 }} />
          User
        </li>
        <li>
          <FaUser size={25} style={{ marginRight: 17 }} />
          User
        </li>
        <li>
          <FaUser size={25} style={{ marginRight: 17 }} />
          User
        </li>
        <li className="active">
          <FaUser size={25} style={{ marginRight: 17 }} />
          User
        </li>
      </ul>
    </Container>
  );
}

export default Aside;
