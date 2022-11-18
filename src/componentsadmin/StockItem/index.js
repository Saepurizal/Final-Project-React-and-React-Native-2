import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const StockItem = ({ id, image, price, title }) => {
  return (
    <article className="cart-item">
      <img src={image} alt={title} style={{width:100}} />
      <div style={{textAlign:"left"}}>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button
          className="remove-btn"
        >
          remove
        </button>
      </div>
      <div className="container" >
        <Row style={{display:"flex", alignItems:"center"}}>
          <Col>
            <Form>
              <Form.Group controlId="formBasic">
                <Form.Control type="number" placeholder="Update Stock" />
              </Form.Group>
            </Form>
          </Col>
          <Col>
          <Button variant="primary" type="submit">
              Update
            </Button>
          </Col>
        </Row>
      </div>
    </article>
  );
};

export default StockItem;
