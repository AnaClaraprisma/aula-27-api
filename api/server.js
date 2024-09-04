const http = require('http');
const express = require("express");
const server = express();

server.get("/", (_request,response)=> {
  response.status(200).end("ola mundo!")
});
server.get("/ping", (_request,response)=> {
  response.status(200).end("pong")
});
//orta ue retorna todas as pessoas do objeto
//porta que retorna uma pessoa em especifico
server.get((_request,response)=> {
  response.status(404).end("rota nao encontrada")
});
server.listen(3000, () =>console.log("servidor rodando!"));

















// Função de callback para lidar com as requisições
/*const requestListener = (req, res) => {
  // Verifica se a rota solicitada é "/ping"
  if (req.url === '/ping') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('pong'); // Responde com 'pong'
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Rota não encontrada'); // Responde com erro 404 para outras rotas
  }
};

// Cria o servidor
const server = http.createServer(requestListener);

// Define a porta do servidor
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});*/
