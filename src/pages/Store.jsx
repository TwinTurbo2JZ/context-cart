import React from "react";
import { Row, Col } from "react-bootstrap";

const Store = () => {
  return (
    <>
      <h1>This is the store component</h1>
      <Row xs={1} md={3} className="g-3">
        <Col align="center">
          <h2>22</h2>
        </Col>
      </Row>
    </>
  );
};

export default Store;
