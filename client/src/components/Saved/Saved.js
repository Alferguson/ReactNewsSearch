import React, { Component } from "react";
import DeleteButton from "../DeleteButton";
import Jumbotron from "../Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import { ArticleList, ArticleListItem } from "../List";

class Saved extends Component {
  state = {
    articles: [],
    title: "",
    date: "",
    url: ""
  };

  componentDidMount() {
    this.loadSavedArticles();
  }

  loadSavedArticles = () => {
    API.getSavedArticles()
      .then(res =>
        this.setState({articles: res.data, title: "", date: "", url: ""})
      )
      .catch(err => console.log(err));
  };

  deleteSavedArticle = id => {
    API.deleteSavedArticle(id)
      .then(res => this.loadSavedArticles())
      .catch(err => console.log(err));
  };

  render() {
    return (
      {this.state.articles.length ? (
        <ArticleList>
          {this.state.articles.map(newsArticle => (
            <ArticleListItem key={newsArticle._id}>
              <Link to={"/api/saved/" + newsArticle._id}>
                <strong>
                  {newsArticle.title}
                </strong>
                <p>Published on: {newsArticle.date}</p>
                <a href={newsArticle.url}>Link</a>
              </Link>
              <DeleteButton onClick={() => this.deleteSavedArticle(newsArticle._id)} />
            </ArticleListItem>
          ))}
        </ArticleList>
      ) : (
        <h3>No NYT Articles were found with that name and/or time period</h3>
      )} 
    );     
  }
}

export default Saved;