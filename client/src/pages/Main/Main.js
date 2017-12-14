import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Saved from "../../components/Saved";
import Search from "../../components/Search";

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What articles would you like to look at?</h1>
            </Jumbotron>



            <Search>
            </Search>
          </Col>



          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Saved articles</h1>
            </Jumbotron>


            
            <Saved>
            </Saved>


            
          </Col>          
        </Row>
      </Container>
    );
  }
}

export default Main;
