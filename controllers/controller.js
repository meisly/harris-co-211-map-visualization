const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.harris211
      .findAll()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByZip: function (req, res) {
    db.harris211
      .findAll({where: {
        zip_code: req.body.zip
      }})
      .then(data => console.log(data))
  },
  // findByCol: function(req, res) {
  //   db.harris211
  //     .findAll({where: })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
};
