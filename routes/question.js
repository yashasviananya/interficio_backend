"use strict"

let router = require('express').Router();

module.exports = app => {

  let questionController = app.controllers.question;

  router.get('/fetchSet', (req, res) => {
    let user_id = req.query.user_id;
    console.log('routess',user_id);
    questionController.fetchSet(user_id)
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

  router.get('/fetchScore', (req,res) => {
    questionController.fetchScore()
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
        console.log('router',data);
        res.send(data);
      })
      .catch( error => {
          res.status(500);
      })
  })

  return router;
}
