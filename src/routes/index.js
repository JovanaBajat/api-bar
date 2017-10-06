import express from 'express';
import config from '../config';
import initializeDb from '../db';
import middleware from '../middleware';
import bar from '../controller/bar';

let router = express();

//connect to the db
initializeDb(db => {

  //test Router ?
  router.use(middleware());

  router.use('/bar', bar({config, db}));
});

export default router;
