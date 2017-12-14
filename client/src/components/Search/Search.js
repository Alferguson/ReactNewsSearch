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
    API.getAPI(this.state.articleSearch)
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

      {!this.state.articles.length ? (
      <h1 className="text-center">No articles to Display</h1>
      ) : (
        <ArticleList>
          {this.state.articles.map(article => {
            return (
              <ArticleListItem
                key={article.title}
                title={article.title}
                date={article.date}
                url={article.url}
              />
            );
          })}
        </ArticleList>
      )}     
    );
  }
}

export default Search;