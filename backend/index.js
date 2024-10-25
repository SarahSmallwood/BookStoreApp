import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

// Middleware for Parsing request body

app.use(express.json());

// Middleware for handling CORS policy
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowHeaders: ['Content-Type'],
})
);

app.get(`/`, (request, response) => {
    console.log(request);
    return  response.status(234).send(`Welcome to MERN stack Tutorial`);
});

app.use('/books', booksRoute);


mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log(`App connected to database`);
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        })
    })
    .catch((error) => {
        console.log(error);
    });

// M.m.p
// Major.minor.patch
// Semantic versioning
// Major -> Breaking change in the app (CM: 'feat!: ...')
// minor -> New feature in the app (CM: 'feat: ...)
// patch -> Fix/Small change in the app that doesn't add 
//          new value (e.g. Change text size)
//          (CM: 'fix/chore/hotfix: ...')
