const express = require('express');
const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');

const app = express();

app.set('view engine', 'hbs');

app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.locals.pageTitle = 'Jerry the Storm Trooper';

app.get('/home', (request, response) => {
  response.render('home', { message: 'Jerry' });
});

app.get('/about', (request, response) => {
  response.render('about', { message: 'About' });
});

app.get('/works', (request, response) => {
  response.render('works', { message: 'Works' });
});

app.get('/gallery', (request, response) => {
  response.render('gallery', { message: 'Gallery' });
});

app.listen(3000);
