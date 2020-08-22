import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import models from './models/data';
import routes from './routes/routes';

const app = express();

app.use(cors());
app.use((req, res, next) =>{
    req.context = {
        models
    };
    next();
});

//register all router handlers here
app.use('/jokes', routes.jokes);

app.listen(process.env.PORT, () => 
console.log("listening on port 3000")
);