const express = require ('express');
const server = express();

const pessoas = [{
    nome:"ana", id:0},{nome:"andre", id:1},{nome:"sara", id:2},{nome:"wallace", id:3}]

const pessoasJSON = JSON.stringify(pessoas);   
//chama as pessoas
server.get('/pessoas', (_request, response) => {
    response.status(200).end(pessoasJSON)
  })
//chama pessoa especifica

server.get('/pessoas/:id', (request, response) => {
    const id = parseInt(request.params.id)
    const nomePuxado = pessoas.find(pessoa => pessoa.id === id)
    if (nomePuxado) {
      const nomePuxadoJSON = JSON.stringify(nomePuxado)
      response.status(200).end(nomePuxadoJSON)
    } else {
      response.status(404).end('Pessoa não encontrada')
    }
  })
  
  server.use((_request, response) => {
    response.status(404).end('Rota não encontrada')
  })

server.listen(3000, () => console.log('server rodando'));