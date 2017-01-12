"use strict";

var  db = require('../config/db');

module.exports = {
  addUser: function (id,email,name) {
    console.log(id,email,name);
    // console.log('add data--',data);
    let query =  `INSERT INTO user (id, email, name) VALUES (2,'asdf','piu')`;
      return db.query(query, {replacements: {id: id, email: email, name: name }})
     .then(data => {
       console.log('insert',data);
       return {message: 'success'};
     })
      .catch(error => error);
   },

  checkUser: function (id) {
    var obj;
    let query = `SELECT id,name from user where id = :id`;
    return db.query(query, {replacements: {id: id}, type: db.QueryTypes.SELECT})
      .then(data => {
        if(data.length) {
          obj = {exist: true,id: data[0].id,name: data[0].name}
        } else {
          obj = {exist: false}
        }
        return obj;
      })
     .catch(error => error);
  }
};

