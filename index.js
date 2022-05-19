import express from 'express';
import dotenv from 'dotenv';
import { getFilms } from './services/films';
dotenv.config();
const app = express();
app.set('PORT', process.env.PORT || 80);
app.set('NODE_ENV', process.env.NODE_ENV || 'prod');
app.get('/favorites/:id/file', (req, res) => {
    res.send('/favorites/:id/file');
});
app.get('/favorites/:id', (req, res) => {
    res.send('/favorites/:id');
});
app.get('/favorites', (req, res) => {
    res.send("favorites get");
});
app.post('/favorites', (req, res) => {
    res.send('favorites post');
});
app.get('/films', (req, res) => {
    getFilms()
        .then(r => {
        console.log('controller: ok');
    }).catch(e => {
        console.log('controller: error');
    });
});
app.listen(app.get('PORT'), () => {
    console.log(`
        Server working.
        Port: ${app.get('PORT')}.
        ENV: ${app.get('NODE_ENV')}
        `);
});
