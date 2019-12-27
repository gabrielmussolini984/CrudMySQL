// Listando Pessoas
const findAll = (connection) =>{
  return new Promise((resolve, reject) =>{
    connection.query('select * from pessoas', (err ,results)=>{
      if (err){
        reject(err);
      }else {
        resolve(results);
      }
    });
  });
};
const findOne = (connection, id) =>{
  return new Promise((resolve, reject) =>{
    connection.query(`select * from pessoas where id = ${id}`, (err ,results)=>{
      if (err){
        reject(err);
      }else {
        if (results.length > 0){
          resolve(results[0]);
        }else{
          resolve({});  
        }
      }
    });
  });
};
// Deletando Pessoas
const deletePessoa = (connection, id) =>{
  return new Promise((resolve,reject)=>{
    connection.query('delete from pessoas where id = '+id+' limit 1', (err, results)=>{
      if (err){
        reject(err);
      }else{
        resolve();
      }
    });
  });
};
// Criando Pessoas
const criarPessoa = (connection, data) =>{
  return new Promise((resolve,reject)=>{
    connection.query(`insert into pessoas (nome,nascimento,cargo) values('${data.nome}','${data.nascimento}','${data.cargo}')`, (err,results)=>{
      if (err){
        console.log(err)
        reject(err);
      }else{
        resolve();
      }
    });
  });
};
// Editando Pessoas
const editarPessoa = (connection, id, data) =>{
  return new Promise((resolve,reject)=>{
    connection.query(`update pessoas set nome = '${data.nome}',nascimento = '${data.nascimento}', cargo = '${data.cargo}' where id = ${id}`, (err,results)=>{
      if (err){
        console.log(err)
        reject(err);
      }else{
        resolve();
      }
    });
  });
};
// Exportando Funções.
module.exports = {
  findAll,
  findOne,
  deletePessoa,
  criarPessoa,
  editarPessoa
}