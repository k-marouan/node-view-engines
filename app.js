const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs'); // if your forder's name "view"
// app.set('views', 'myviews'); // if you want to use different forder's name "myviews"

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    const blogs = [
        { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'Marouan finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    ];
    res.render('index', { title: 'Home', blogs });
});
app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new Blog' })
});

// 404 page, the code below should be in the very bottom to work correctly
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});