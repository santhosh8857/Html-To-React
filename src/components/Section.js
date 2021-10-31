import React from "react";
import Card from "./Card";
import { Col, Container, Row } from "reactstrap";

const Section = () => {
  return (
    <>
      <section className="pricing py-5">
        <Container>
          <Row>
            <Col>
              <Card type="FREE" price={0} />
            </Col>
            <Col>
              <Card type="PLUS" price={9} />
            </Col>
            <Col>
              <Card type="PRO" price={49} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Section;
