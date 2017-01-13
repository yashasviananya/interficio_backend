"use strict"

var util = require('../helpers/utils');

module.exports = app => {

  let user = app.models.users_repo;

  let userLogin = function(query_data) {
    let obj;
    console.log('query_data',query_data);
    let user_id = query_data.id;
    return user.checkUser(user_id)
     .then( data => {
         console.log('exissssss',data);
         if(!data.exist) {
           return user.addUser(query_data.id,query_data.email,query_data.name)
          } else {
            console.log('data exist in database',data);
            return Promise.resolve(data);
          }
      })
      .then( data => {
        console.log('dataaaaaa',data);
        obj = {
          user_id: query_data.id,
          user_name: query_data.name
        };
        return util.formToken(obj)
      })
      .catch(error => error)
   };

   return {
     userLogin
   }
}
