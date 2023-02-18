import React, { useContext } from "react";
import { Card as BCard, Row, Col, Button, Form } from "react-bootstrap";

import { CartContext } from "../context/cartContext.jsx";

const Card = ({ data }) => {
  const cart = useContext(CartContext);

  const productQuantity = cart.getProductQuantity(data.id);

  let gg = cart.items.reduce((sum, product) => sum + product.quantity, 0);
  //console.log(cart.items);
  console.log(gg);

  return (
    <div>
      <BCard className="">
        <BCard.Body className="p-8">
          <BCard.Title>{data.name}</BCard.Title>
          <BCard.Text>{data.price}</BCard.Text>
          {productQuantity > 0 ? (
            <>
              <Form as={Row}>
                <Form.Label column={true} sm="6">
                  In Cart: {productQuantity}
                </Form.Label>
                <Col sm="6">
                  <Button
                    sm="6"
                    onClick={() => cart.addOneToCart(data.id)}
                    className="mx-2"
                  >
                    +
                  </Button>
                  <Button
                    sm="6"
                    onClick={() => cart.removeOneFromCart(data.id)}
                    className="mx-2"
                  >
                    -
                  </Button>
                </Col>
              </Form>
              <Button
                variant="danger"
                className="my-2"
                onClick={() => cart.deleteFromCart(data.id)}
              >
                Remove From Cart
              </Button>
            </>
          ) : (
            <Button
              variant="primary"
              onClick={() => cart.addOneToCart(data.id)}
            >
              Add to cart
            </Button>
          )}
        </BCard.Body>
      </BCard>
    </div>
  );
};

export default Card;
