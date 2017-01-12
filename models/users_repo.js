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
   },
   fetchSetId: function (data) {
     let query =  `SELECT story_id from user where id = :data`;
     return db.query(query, {replacements: {data: data}, type: db.QueryTypes.SELECT})
     .then(data => {
       return data;
     })
      .catch(error => error);   
  },
  updateSetId: function (data) {
     let query =  `UPDATE user set story_id = story_id+1 where id = :data`;
     return db.query(query, {replacements: {data: data}, type: db.QueryTypes.UPDATE})
     .then(data => {
      //  console.log('update data',data);
       return {message: 'update-success'};
     })
      .catch(error => {
      console.log('error',error);
      return error;
    });     
  },
  fetchScore: function () {
     let query =  `SELECT name,score from user order by score ASC`;
     return db.query(query, { type: db.QueryTypes.SELECT})
     .then(data => {
      //  console.log('update data',data);
       return data;
     })
      .catch(error => {
      console.log('error',error);
      return error;
    });       
  }
};

