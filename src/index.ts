import express from 'express';
import { CategoryRoutes } from './routes/categories.routes';

const port = 3051;
const app = express();

app.use(express.json());

app.use("/categories", CategoryRoutes);

app.listen(port, ()=> console.log(`server running on port ${port}`))