// Imports
const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

// Banco de Dados
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cadastro'
});
// Dependencias
const dependencies = {
  connection
}

// Inicializando o APP
const app = express();
// Configurando Porta
const port = process.env.PORT || 3000;
// Public
app.use(express.static(path.join(__dirname,'public')));
// Handlebars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
// Body-Parser
app.use(bodyParser.urlencoded({extended: 'false'}));


// Routes
const pessoas = require('./routes/pessoas');
app.use('/pessoas',pessoas(dependencies));


// Rotas
app.get('/', (req, res)=>{
  res.render('home')
})








connection.connect((err)=>{
  if (err) console.log('Erro ao se conectar com o banco');
  else{
    console.log('Conectado ao banco');
    app.listen(port, ()=> console.log('APP rodando na porta '+port));
  }
})




