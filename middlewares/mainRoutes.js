"use strict";

module.exports = app => {
  app.use('/api/v1/question', app.routes.question);
};
