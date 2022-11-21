import express from 'express';
import carRouter from './Routes/cars.routes';
import MotoRouter from './Routes/motocycle.routes';

const app = express();
app.use(express.json());

app.use('/cars', carRouter);
app.use('/motorcycles', MotoRouter);

export default app;
