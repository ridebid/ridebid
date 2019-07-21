import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';

class BidContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs="6">BID1</Col>
          <Col xs="6">BID2</Col>
        </Row>
        </Container>
    );
  }
}

export default BidContainer;
