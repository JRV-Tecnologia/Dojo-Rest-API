const express = require('express');
const router = express.Router();

//Retorna lista de todos clientes
router.get('/', (req, res, next)=>{
  const clientes=[{  
      codigo: 5,
      nome: "Reginaldo",
    },
    {  
      codigo: 6,
      nome: "Nikollas",
    }
  ]
  res.status(200).send({
    mensagem:'Teste método GET',
    clientes: clientes
  });
});

//Retorna lista de todos clientes
router.get('/:codigo', (req, res, next)=>{
  const cliente = req.params.codigo
  res.status(200).send({
    mensagem:'Teste método GET'
  });
});

//Insere um novo cliente
router.post('/', function(req, res, next) {
  const cliente={
    codigo: req.body.codigo,
    nome: req.body.nome,
  }

  res.status(201).send({
    mensagem:'Teste método POST',
    cliente: cliente
  });
});

//Altera o cliente
router.patch('/', (req, res, next)=>{
  const cliente={
    codigo: req.body.codigo,
    nome: req.body.nome,
  }
  res.status(202).send({
    mensagem:'Teste método PATCH',
    cliente:cliente
  });
});

//Deleta o cliente
router.delete('/', (req,res,next)=>{
  const cliente = req.params.codigo;
  res.status(202).send({
    mensagem:'Teste método DELETE'
  });
});



module.exports = router;