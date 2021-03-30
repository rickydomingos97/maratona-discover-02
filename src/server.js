const { response } = require("express");
const express = require("express")
const server = express()

server.get('/', (request, response) => {
  return response.send('oieeeee')
})

server.listen(3000, () => {
  console.log('rodando');
})