const pessoas = require('../models/pessoas');

// Listando
const listaPessoas = async(connection,req,res)=>{
  const resultado = await pessoas.findAll(connection); 
  res.render('pessoas/listaPessoas', {resultado})
}
const deletePessoa = async(connection,req,res)=>{
  await pessoas.deletePessoa(connection, req.params.id);
  res.redirect('/pessoas');
}
const criarPessoaForm = (req, res)=>{
  res.render('pessoas/criarPessoaForm');
}
const criarPessoa = async(connection,req,res) =>{
  await pessoas.criarPessoa(connection, req.body);
  res.redirect('/pessoas');
}
const editarPessoaForm = async (connection,req,res) =>{
  const resultado = await pessoas.findOne(connection,req.params.id);
  res.render('pessoas/editarPessoaForm', {resultado: resultado});
}
const editarPessoa = async(connection,req,res) =>{
  await pessoas.editarPessoa(connection, req.params.id, req.body);
  res.redirect('/pessoas');
}


module.exports = {
  listaPessoas,
  deletePessoa,
  criarPessoaForm,
  criarPessoa,
  editarPessoaForm,
  editarPessoa
}