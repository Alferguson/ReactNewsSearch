import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import { ArticleList, ArticleListItem } from "../List";
import { Input, TextArea, Form } from "../Form";

class Results extends Component {
  handleFormSubmitSave = event => {
    event.preventDefault();
    API.saveArticle({
      title: this.title,
      date: this.date,
      url: this.url
    })
      .then(res => this.loadSavedArticles())
      .catch(err => console.log(err));
  };

  render() {
    return (
      {!this.state.articles.length ? (
      <h1 className="text-center">No articles to Display</h1>
      ) : (
        <ArticleList>
          {this.state.articles.map(article => {
            return (
              <ArticleListItem
                key={article.response.docs.headline.main.title}
                title={article.response.docs.headline.main.title}
                date={article.response.docs.pub_date}
                url={article.response.docs.web_url}
              />
              <Button
                onClick={this.handleFormSubmitSave}
                type="success"
                className="input-lg"
              >
                Save Article
              </Button>
            );
          })}
        </ArticleList>
      )}     
    );
  }
}

export default Results;