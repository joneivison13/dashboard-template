import React, { useState, Fragment } from "react";

import { Container } from "./styles";
import {
  FaTrafficLight,
  FaCode,
  FaCloud,
  FaPen,
  FaTimes,
} from "react-icons/fa";

function Tasks() {
  const [active, setActive] = useState("bugs");
  const data = {
    bugs: [
      'Sign contract for "What are conference organizers afraid of?"',
      "Lines From Great Russian Literature? Or E-mails From My Boss?",
      "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
      "Create 4 Invisible User Experiences you Never Knew About",
    ],
    website: [
      "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
      'Sign contract for "What are conference organizers afraid of?"',
    ],
    server: [
      "Lines From Great Russian Literature? Or E-mails From My Boss?",
      "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
      'Sign contract for "What are conference organizers afraid of?"',
    ],
  };
  return (
    <Container>
      <header>
        Taks:
        <span>
          <button className={active === 'bugs'?'active':''} onClick={() => setActive('bugs')}>
            <FaTrafficLight />
            BUGS
          </button>
          <button className={active === 'website'?'active':''} onClick={() => setActive('website')}>
            <FaCode />
            WEBSITE
          </button>
          <button className={active === 'server'?'active':''} onClick={() => setActive('server')}>
            <FaCloud />
            SERVER
          </button>
        </span>
      </header>

      <main>
        {data[active].map((i, index) => {
          return (
            <Fragment key={index}>
              <div className="row">
                <input type="checkbox" name="" id="" />
                <p key={index}>{i}</p>
                <span>
                  <FaPen color="#9229AD" />
                  <FaTimes color="#f00" />
                </span>
              </div>
              <hr />
            </Fragment>
          );
        })}
      </main>
    </Container>
  );
}

export default Tasks;
