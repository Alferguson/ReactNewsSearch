import React, { Component } from "react";
import DeleteButton from "../../components/DeleteButton";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, Form } from "../../components/Form";

class Main extends Component {
  state = {
    articles: [],
    searchTerm: "",
    startDate: "",
    endDate: "",
    title: "",
    date: "",
    url: ""
  };

  // componentDidMount() {        
  //   this.loadSavedNews();
  // }

  // loadSavedNews = () => {
  //   API.getNews()
  //     .then(res =>
  //       this.setState({ articles: res.data, title: "", date: "", url: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  // deleteArticle = id => {
  //   API.deleteArticle(id)
  //     .then(res => this.loadSavedNews())
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  saveArticle = (id) => {
    const articleData = this.state.articles.filter(article => article._id === id);
    API.saveArticle({
      title: articleData["0"].headline.main,
      date: articleData["0"].pub_date,
      url: articleData["0"].web_url
    })
    .then(res => console.log("saved", articleData))
    .catch(err => console.log(err));
  };

  handleFormSubmitNYTCall = event => {
    event.preventDefault();
    API.searchNYT({
      searchTerm: this.state.searchTerm,
      startDate: this.state.startDate,
      endDate: this.state.endDate
    })
      .then(res => {
        // console.log('this is response', response.data.response.docs);
        this.setState({ 
          articles: res.data.response.docs 
        });
      })
      .catch(err => console.log(err));
  };


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>What NYT article would you like to look up?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.searchTerm}
                onChange={this.handleInputChange}
                name="searchTerm"
                placeholder="Search Here (required)"
                type="text"
              />
              <Input
                value={this.state.startDate}
                onChange={this.handleInputChange}
                name="startDate"
                placeholder="Starting Date"
                type="number"
              />
              <Input
                value={this.state.endDate}
                onChange={this.handleInputChange}
                name="endDate"
                placeholder="Ending Date"
                type="number"
              />
              <Form
                disabled={!(this.state.searchTerm)}
                onClick={this.handleFormSubmitNYTCall}
              >
                Find NYT Articles
              </Form>
            </form>
          </Col>
        </Row>



        <Row>  
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1>NYT Articles</h1>
            </Jumbotron>
            <Container>
              {this.state.articles.length ? (
              <List>


              {this.state.articles.map(newsArticle => (
                <ListItem
                  key={newsArticle._id}
                  id={newsArticle._id}
                  title={newsArticle.headline.main}
                  href={newsArticle.web_url}
                  date={newsArticle.pub_date}
                />
                
                <button disabled={!(this.state.searchTerm)} onClick={this.saveArticle}>
                  save the article
                </button>  

              ))}
              </List>
              ) : (
                <h3>Nothing to show yet</h3>
              )}
            </Container>
          </Col>
        </Row>  



        <Row>  
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1>Saved Articles On My List</h1>
            </Jumbotron>
            {this.state.articles.length ? (
              <List>
                {this.state.articles.map(newsArticle => (
                  <ListItem key={newsArticle._id}>
                    <Link to={"/fsdlkjhsfljkhgdfljkhg/" + newsArticle._id}>
                      <strong>
                        {newsArticle.title} by {newsArticle.date}
                      </strong>
                    </Link>
                    <DeleteButton onClick={() => this.deletedsgsdfgfdgdfgfdgdfg(newsArticle._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
