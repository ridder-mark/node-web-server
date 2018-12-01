const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');

hbs.registerPartials( __dirname + '/views/partials');

// express middleware to set the root directory of HTML pages
app.use(express.static( __dirname + '/public'));


app.use((req,res, next) => {
    var now = new Date().toString();

    console.log(now);
    
    
    next();
});


app.get('/', (req, res) => {

// res.send('<h1>welcome to a homepage served by express</h1>');

res.send ( {
    name: "yolo",
    likes: "Polo"
})
});

app.get('/about', (req, res ) => {
   res.render('about.hbs', {
       pageTitle:'About',
       year:'2018'
   });
})

app.listen(3000); 

