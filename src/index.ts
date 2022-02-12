import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import appConfig from './config/appConfig';
import appRouter from './routes';

const app: express.Application = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api', appRouter)
app.listen(appConfig.PORT || 6000, () => console.log(`Server started and running at ${appConfig.BASE_URL}`))

