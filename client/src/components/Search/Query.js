import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import { ArticleList, ArticleListItem } from "../List";
import { Input, TextArea, Form } from "../Form";

class Query extends Component {
  handleFormSubmit = event => {
    event.preventDefault();
    API.getAPI(this.state.articleSearch, this.state.startingDate, this.state.endingDate)
      .then(res => this.setState({ articles: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <form>
        <Input
          name="articleSearch"
          value={this.state.articleSearch}
          onChange={this.handleInputChange}
          placeholder="Search for 5 nyt articles by name"
        />
        <Input
          name="startingDate"
          value={this.state.startingDate}
          onChange={this.handleInputChange}
          placeholder="Start Date"
        />
        <Input
          name="endingDate"
          value={this.state.endingDate}
          onChange={this.handleInputChange}
          placeholder="End Date"
        />                      
        <Button
          onClick={this.handleFormSubmit}
          type="success"
          className="input-lg"
        >
          Search Articles
        </Button>
      </form>  
    );
  }
}

export default Query;