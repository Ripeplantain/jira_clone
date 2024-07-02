// templates/app.js

// eslint-disable-next-line import/no-unresolved
import express, {Application, Response, Request} from 'express';
import cors from 'cors';
import config from 'config';
import { connectDatabase } from './helper/database.js';
import logger from './helper/logger';

const appUrl: string = config.get('appUrl');

const app: Application = express();

app.use(express.json());
app.use(
  cors({
    origin: '*',
    methods: 'GET,POST,PUT,DELETE',
  })
);

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello World🤩🤗',
    info: 'https://www.npmjs.com/package/@codetanna/nex-cli',
  });
});
connectDatabase();

app.listen(3000, () => {
  logger.info(`Server is running on ${appUrl} 😎...`);
});
