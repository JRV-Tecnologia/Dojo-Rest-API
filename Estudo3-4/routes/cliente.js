const express = require('express');
const router = express.Router();
const mysql = require('../database/mysql').pool;

//Retorna lista de todos clientes
router.get('/', (req, res, next)=>{
  mysql.getConnection((error, conn)=>{
    conn.query(
      'SELECT * FROM cliente ',
      (error, result, field)=>{
        conn.release();
        if(error){
          return res.status(500).send({
            error: error,
            response: null
          });
        }

        res.status(200).send({
          mensagem:'Consulta realizada com sucesso',
          clientes: result
        });
      }
    )
  })
});

//Retorna lista de todos clientes
router.get('/:codigo', (req, res, next)=>{
  const cliente = req.params.codigo
  res.status(200).send({
    mensagem:'Consulta realizada com sucesso'
  });
});

//Insere um novo cliente
router.post('/', function(req, res, next) {

  mysql.getConnection((error, conn)=>{
    conn.query(
      'INSERT INTO cliente (nome) VALUES (?)',
      [req.body.nome],
      (error, result, field)=>{
        conn.release();
        if(error){
          return res.status(500).send({
            error: error,
            response: null
          });
        }

        res.status(201).send({
          mensagem:'Usuário inserido com sucesso',
          cliente: result
        });
      }
    )
  })
});

//Altera o cliente
router.patch('/', (req, res, next)=>{
  mysql.getConnection((error, conn)=>{
  conn.query(
    'UPDATE cliente SET nome = (?) WHERE codigo = (?) ',
    [req.body.nome, req.body.codigo],
    (error, result, field)=>{
      conn.release();
      if(error){
        return res.status(500).send({
          error: error,
          response: null
        });
      }

      res.status(202).send({
        mensagem:'Usuário editado com sucesso',
        result:result
      });
    }
  )
  })
});

//Deleta o cliente
router.delete('/', (req,res,next)=>{
  mysql.getConnection((error, conn)=>{
  conn.query(
    'DELETE FROM cliente WHERE codigo = ?',
    [req.body.codigo],
    (error, result, field)=>{
      conn.release();
      if(error){
        return res.status(500).send({
          error: error,
          response: null
        });
      }

      res.status(202).send({
        mensagem:'Usuário deletado com sucesso',
        result:result
      });
    }
  )
  })
});



module.exports = router;