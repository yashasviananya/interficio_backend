"use strict";

var newPromise = require('es6-promise').Promise;

module.exports = app => {

  let fetchSet = function () {      
    let obj = { id:1 , description: 'Walter White, the famous chemistry teacher is found murdered! A note\
     hanging out of the pocket coat of Mr. White read:\
     9-53-8-11/3-3/11-52/4-90/22-11/20-90-39 Sherlock, the greatest detective in town is called upon\
     to look into this case. In no time, he decrypts the code and the students involved in the murder are found!\
     Can YOU be the Sherlock?'};
    return new Promise (function(resolve, reject) {
      if(obj) {
        return resolve(obj);
      } else {
        return reject('error');
      }
    });
  };

  let fetchQuestion = function () {
    let obj = [{ set_id: 1,id: 1,description: 'A bevy of Bridesmaids are standing, evenly spaced, in a circle.\
     Mariah the 7th bridesmaid isA bevy of Bridesmaids are standing, evenly spaced, in a circle. Mariah the\
     7th bridesmaid is directly opposite to the 18th bridesmaid Lucy. How many bridesmaids are there? directly\
    opposite to the 18th bridesmaid Lucy. How many bridesmaids are there?'}, { set_id: 1,id: 2,description: 'A bevy of Bridesmaids are standing, evenly spaced, in a circle.\
     Mariah the 7th bridesmaid isA bevy of Bridesmaids are standing, evenly spaced, in a circle. Mariah the\
     7th bridesmaid is directly opposite to the 18th bridesmaid Lucy. How many bridesmaids are there? directly\
    opposite to the 18th bridesmaid Lucy. How many bridesmaids are there?'}, { set_id: 1,id: 3,description: 'A bevy of Bridesmaids are standing, evenly spaced, in a circle.\
     Mariah the 7th bridesmaid isA bevy of Bridesmaids are standing, evenly spaced, in a circle. Mariah the\
     7th bridesmaid is directly opposite to the 18th bridesmaid Lucy. How many bridesmaids are there? directly\
    opposite to the 18th bridesmaid Lucy. How many bridesmaids are there?'},{ set_id: 1,id: 4,description: 'A bevy of Bridesmaids are standing, evenly spaced, in a circle.\
     Mariah the 7th bridesmaid isA bevy of Bridesmaids are standing, evenly spaced, in a circle. Mariah the\
     7th bridesmaid is directly opposite to the 18th bridesmaid Lucy. How many bridesmaids are there? directly\
    opposite to the 18th bridesmaid Lucy. How many bridesmaids are there?'}];
    return new Promise (function(resolve, reject) {
       if(obj) {
       return resolve(obj);
      } else {
       return reject('error');
      }
    });
  }

  let answerSubmit = function (answerObj) {
    let answer = answerObj.answer, obj;
     return new Promise (function(resolve, reject) {
       if(answer == '22') {
           obj = { verified: true, url: 'http://www.w3schools.com/'};
       } else {
         obj = { verified: false, message: 'wrong answer'}; 
       } 
       if(obj) {
         return resolve(obj);
       }  else {
         return reject('error');
       }
    });
  }

  let storySubmit = function (storyObj) {
    let answer = storyObj.answer, obj;
     return new Promise (function(resolve, reject) {
       if(answer == 'FIONa/LiLi/NaTe/BeTh/TiNa/CaThY.') {
           // update user table with incremented set id;
           obj = { verified: true};
       } else {
         obj = { verified: false, message: 'wrong answer'}; 
       } 
       if(obj) {
         return resolve(obj);
       }  else {
         return reject('error');
       }
    });
  }
 
 return {
    fetchSet,
    fetchQuestion,
    answerSubmit,
    storySubmit
  };
}
