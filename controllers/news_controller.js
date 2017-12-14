const db = require("../models");
const axios = require("axios");
const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
const queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";

// this is to intereact with the mongo database to show SAVED articles
module.exports = {
    // API call to NYT to show articles based on query
    findNews: (req, res) => {
        axios
            .get(queryURLBase, { params: req.query })
            .then(({ data: { results } }) => res.json(results))
            .catch(err => res.status(422).json(err));

    },
    // show all saved articles
    findAll: (req, res) => {
        db.News
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // create a saved article from a click 
    create: (req, res) => {
        db.News
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // delete a saved article
    remove: (req, res) => {
        db.News
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
