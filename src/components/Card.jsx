import React from "react";
import { Card as BCard, Row, Col, Button } from "react-bootstrap";

const Card = ({ data }) => {
  return (
    <div>
      <BCard className="">
        <BCard.Body className="p-8">
          <BCard.Title>{data.name}</BCard.Title>
          <BCard.Text>{data.price}</BCard.Text>
          <Button variant="primary">Add to cart</Button>
        </BCard.Body>
      </BCard>
    </div>
  );
};

export default Card;
