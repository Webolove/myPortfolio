import express from 'express';
import path from 'path';

import connectDB  from './db/connectDB.js';
import router from './routes/web.js';

const port = process.env.PORT || 6969;
const DATABASE_URL = "mongodb+srv://muditanand2003:CMUtWuXLpjBC47jY@portfolio.h3ox4sv.mongodb.net/test";
const app = express();

// Connectin Database
connectDB(DATABASE_URL);

// On post request
app.use(express.urlencoded({extended:false}));

// Using static files
app.use(express.static(path.join(process.cwd(), 'public')))

// Routing
app.use('/', router);

app.listen(port, ()=>{
    console.log(`Server is listening at http://localhost:${port}`);
})