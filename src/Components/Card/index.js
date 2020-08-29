import React from "react";

import { Container } from "./styles";

function Cards({ Card }) {
  return (
    <Container bg={Card.bgColorImage}>
      <div>
        <div className="row-between">
          <div className="image">
            <Card.imageSource size={40} color="#fff"/>
          </div>
          <div className="title">
            <p>{Card.title}</p>
            <h3>{Card.main}</h3>
          </div>
        </div>
        <hr />
        <div className="row">
          <Card.footerIcon color={Card.footerIconColor} />
          <p>{Card.footerTitle}</p>
        </div>
      </div>
    </Container>
  );
}

export default Cards;
