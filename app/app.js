const express = require('express')
const port = 3000
const app = express()
var bodyParser = require('body-parser')

/* identificar dados passados na URL */
app.use(bodyParser.urlencoded({ extended: false }))

/* padronizar a pasta public como base para acessar imagens e outros dados */
app.use(express.static('public'));

/* usar arquivos ejs como renderização */
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');  
})

app.listen(port, () => {
console.log(`App usando a porta ${port}`)
})

app.use((req, res) => {
res.status(404).send('Página não encontrada');
});

app.use((req, res) => {
console.error(err.stack);
res.status(500).send('Algo deu errado');
});