"use strict";

var  db = require('../config/db');

module.exports = {
  addUser: function (data) {
    let query =  `INSERT INTO user (email, name) VALUES('a@a.a','piyush')`;
      return db.query(query)
     .then(data => {
       return data;
     })
      .catch(error => error);
   } 
}

