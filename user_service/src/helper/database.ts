import { Sequelize } from 'sequelize';
import logger from '../helper/logger';
import config from 'config';

const databaseUrl = config.get('dbUrl');

const sequelize = new Sequelize(databaseUrl);

export const connectDatabase = async () => {
    try {
    await sequelize.authenticate();
    logger.info('Connection has been established successfully.');
  } catch (error) {
    logger.error('Unable to connect to the database:', error);
  }
}
