// "use strict";
// var jwt = require('jsonwebtoken'),
//     readfile = require('fs-readfile-promise'),

// module.exports = {

//   tokenValidate: function(token) {
//     if (token) {
//       let decoded_data = {}, token_data = {};
//       let auth = false;
//       return readfile('config/id_rsa','base64')
//         .then(key_value => {
//         jwt.verify(token, key_value.toString(), function(error, decoded) {
//           if (error) {
//             console.log("error--",error);
//             return res.send({not_verified: true});
//           } else {
//             auth = true;
//             decoded_data = decoded;
//           }
//           token_data = {
//             data: decoded_data,
//             auth: auth
//           }
//           console.log('token dataaa',token_data);
//           return token_data;
//          })
//       })
//       .catch(error => {
//         console.log("error-auth-",error);
//       })
//     } else {
//       return res.send({not_verified: true});
//     }
//  }

// }

