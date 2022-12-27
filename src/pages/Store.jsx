import React from "react";
import { Row, Col } from "react-bootstrap";
import Card from "../components/Card";
import { data } from "../data.js";

const Store = () => {
  return (
    <>
      <h1 align="center" className="p-3">
        The Store we never got
      </h1>
      <Row xs={1} md={3} className="g-3">
        {/* <Col align="center">
          <h2>data</h2>
        </Col> */}
        {data.map((data, key) => (
          <Card data={data} key={key} />
        ))}
      </Row>
    </>
  );
};

export default Store;
