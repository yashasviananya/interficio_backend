"use strict"

let router = require('express').Router();

module.exports = app => {

  let questionController = app.controllers.question;

  router.get('/fetchSet', (req, res) => {
    let obj =  questionController.fetchSet()
      .then( data => {
        res.send(data);
      })
      .catch( error => {
          res.status(500);
      })
  });

  router.get('/fetchQuestion', (req, res) => {
    let answerObj = req.body;
    questionController.fetchQuestion(answerObj)
      .then( data => {
        res.send(data);
      })
      .catch( error => {
          res.status(500);
      })
  });

  router.post('/answerSubmit', (req,res) => {
    questionController.answerSubmit(req.body)
      .then( data=> {
        console.log(data);
        res.send(data);
      })
      .catch( error => {
          res.status(500);
      })
  })

  router.post('/storySubmit', (req,res) => {
    questionController.storySubmit(req.body)
      .then( data=> {
        console.log(data);
        res.send(data);
      })
      .catch( error => {
          res.status(500);
      })
  })

  return router;
}
