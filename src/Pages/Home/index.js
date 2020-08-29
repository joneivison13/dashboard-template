import React, { useState } from "react";
import {
  FaSearch,
  FaBorderAll,
  FaBell,
  FaCopy,
  FaExclamationTriangle,
  FaHome,
  FaCalendar,
  FaExclamationCircle,
  FaTag,
  FaMale,
  FaRedo,
  FaArrowUp,
  FaClock,
  FaBars,
} from "react-icons/fa";

import Grafic from "../../Components/Grafics";
import Aside from "../../Components/Aside";
import { Container, Main } from "./styles";
import Cards from "../../Components/Card";
import Tasks from "../../Components/Tasks";
import Employers from "../../Components/EmployersStats";

function Home() {
  const [mostAside, setMostAside] = useState(false)
  const cards = [
    {
      bgColorImage: "#FC9208",
      imageSource: FaCopy,
      title: "Used Space",
      main: "49/50 GB",
      footerIcon: FaExclamationTriangle,
      footerIconColor: "#f00",
      footerTitle: "Get more space",
    },
    {
      bgColorImage: "#55AE59",
      imageSource: FaHome,
      title: "Revenue",
      main: "$34,245",
      footerIcon: FaCalendar,
      footerIconColor: "#aaa",
      footerTitle: "Last 24 hors",
    },
    {
      bgColorImage: "#E73E3B",
      imageSource: FaExclamationCircle,
      title: "Fixed Issues",
      main: "75",
      footerIcon: FaTag,
      footerIconColor: "#aaa",
      footerTitle: "Tracked from Github",
    },
    {
      bgColorImage: "#20C2D6",
      imageSource: FaMale,
      title: "Followers",
      main: "+255",
      footerIcon: FaRedo,
      footerIconColor: "#aaa",
      footerTitle: "Just Updated",
    },
  ];

  return (
    <Container>
      <Aside most={mostAside}/>
      <Main>
        <header>
          <h2>Dashboard</h2>
          <div className="group">
            <input type="text" name="" id="" placeholder="Search" />
            <button type="button">
              <FaSearch />
            </button>
            <FaBorderAll />
            <div className="badge">
              <FaBell />
              <p>5</p>
            </div>

            <div className="bar" onClick={() => setMostAside(!mostAside)}>
              <FaBars />
            </div>
          </div>
        </header>
        <div className="row-between cards">
          {cards.map((i, index) => {
            return <Cards Card={i} key={index} />;
          })}
        </div>

        <div className="row-between">
          <div className="grafic">
            <Grafic type={"line"} />
            <div className="main">
              <h3>Daily Sales</h3>
              <h4>
                <FaArrowUp color="#46af50" />
                <span style={{ color: "#46af50" }}>55%</span> increase in today
                sales.
              </h4>
              <hr />
              <p>
                <FaClock style={{ marginRight: 8 }} /> updated 4 minutes ago
              </p>
            </div>
          </div>

          <div className="grafic">
            <Grafic
              type={"bar"}
              style={{ position: "absolute", top: "50px" }}
            />
            <div className="main">
              <h3>Daily Sales</h3>
              <h4>
                <FaArrowUp color="#46af50" />
                <span style={{ color: "#46af50" }}>55%</span> increase in today
                sales.
              </h4>
              <hr />
              <p>
                <FaClock style={{ marginRight: 8 }} /> updated 4 minutes ago
              </p>
            </div>
          </div>

          <div className="grafic">
            <Grafic
              type={"line"}
              style={{ position: "absolute", top: "50px" }}
            />
            <div className="main">
              <h3>Daily Sales</h3>
              <h4>
                <FaArrowUp color="#46af50" />
                <span style={{ color: "#46af50" }}>55%</span> increase in today
                sales.
              </h4>
              <hr />
              <p>
                <FaClock style={{ marginRight: 8 }} /> updated 4 minutes ago
              </p>
            </div>
          </div>
        </div>

        <div className="table-grafic">
          <Tasks />
          <Employers />
        </div>
      </Main>
    </Container>
  );
}

export default Home;
