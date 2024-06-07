const express = require('express');
const db = require('./database/database');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//conexão com banco de dados aqui


app.get('/', (req, res) => {
    res.render('index');
});

const port = 3000;

app.listen(port , () => {
    console.log(`Rodando em: http://localhost:${port}`)
});