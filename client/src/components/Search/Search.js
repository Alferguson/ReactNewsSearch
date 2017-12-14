import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import { ArticleList, ArticleListItem } from "../List";
import { Input, TextArea, Form } from "../Form";
import Results from "./Results.js";
import Query from "./Query.js";

class Search extends Component {
  state = {
    articles: [],
    articleSearch: "",
    startingDate: "",
    endingDate: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  handleFormSubmit = event => {
    event.preventDefault();
    API.getAPI(this.state.articleSearch, this.state.startingDate, this.state.endingDate)
      .then(res => this.setState({ articles: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Query>
      </Query>
      <Col size="md-6 sm-12">
        <Jumbotron>
          <h1>Results</h1>
        </Jumbotron>
      </Col>      
      <Results>
      </Results>   
    );
  }
}

export default Search;