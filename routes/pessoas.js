// Imports  
const express = require('express'); 
const path = require('path');
const pessoasController = require('../controllers/pessoas');


//Injetando dependencias
const pessoasRouter = ({connection}) =>{
  const router = express.Router();
  router.get('/', pessoasController.listaPessoas.bind(null, connection));
  router.get('/delete/:id', pessoasController.deletePessoa.bind(null, connection));
  router.get('/criarPessoaForm', pessoasController.criarPessoaForm);
  router.post('/criarPessoa', pessoasController.criarPessoa.bind(null, connection));
  router.get('/editarPessoaForm/:id', pessoasController.editarPessoaForm.bind(null, connection));
  router.post('/editarPessoa/:id', pessoasController.editarPessoa.bind(null, connection));
  return router
};




module.exports = pessoasRouter;