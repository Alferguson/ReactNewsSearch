const db = require("../models");
const axios = require("axios");

// this is to intereact with the mongo database to show SAVED articles
module.exports = {
    // show all saved articles
    findAll: (req, res) => {
        db.News
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // when a user saves an article, it searches the id
    findById: function(req, res) {
        db.News
            .findById(req.params.id)
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
