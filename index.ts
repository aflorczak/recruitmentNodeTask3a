import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { getFilms } from './services/films';

dotenv.config();

const app: Express = express();
app.set('PORT', process.env.PORT || 80);
app.set('NODE_ENV', process.env.NODE_ENV || 'prod');

app.get('/favorites/:id/file', (req: Request, res: Response) => {
    res.send('/favorites/:id/file');
});

app.get('/favorites/:id', (req: Request, res: Response) => {
    res.send('/favorites/:id');
});

app.get('/favorites', (req: Request, res: Response) => {
    res.send("favorites get");
});

app.post('/favorites', (req: Request, res: Response) => {
    res.send('favorites post');
});


app.get('/films', (req: Request, res: Response) => {
    getFilms((error: any, data: any) => {
        if (error) {
            if (app.get("NODE_ENV") == 'dev') {
                res.status(500).json(error);
            } else {
                res.status(500).send('error');
            }
        } else {
            res.json(data);
        }
    });
});

 app.listen(app.get('PORT'), () => {
    console.log(`
        Server working.
        Port: ${app.get('PORT')}.
        ENV: ${app.get('NODE_ENV')}
        `)
})