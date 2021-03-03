import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import {
    Switch,
    Route
  } from "react-router-dom";

function Layout() {
  return (
    <Container>
        <Row>
            <Col xs={1}></Col>
            <Col xs={10}>
                <Switch>
                    <Route path="/">
                        Test
                    </Route>
                </Switch>
            </Col>
            <Col xs={1}></Col>
        </Row>
    </Container>
  );
}

export default Layout;
