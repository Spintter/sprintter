/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-var-requires */
import { Sequelize } from 'sequelize-typescript';
import env from '../config/environment';

const { config } = require('../config/database-config');

const modelsPath = `${__dirname}/models`;
const settings = {
  ...config[env.NODE_ENV],
  models: [modelsPath],
};

const database = new Sequelize(settings);

export default database;
export { Op } from 'sequelize';
