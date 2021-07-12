const express = require('express')
const Bogosort = require('./bogosort.js')

const routes = express.Router()

routes.get('/Tema/:num',(req,res)=>{  
    const { num } = req.params  
    const valor = parseInt(num)
    const [sortedArray, timing, attempts] = Bogosort(valor)
    try{
        res.status(200).json(
            {   'Lista de numeros': `${sortedArray}`,
                'Tempo de execução': `${timing}ms`,
                'Tentativas': `${attempts}`,
                'Tamanho do array': `${valor}`,
            })
    }catch(error){
        console.log(error)
    }
})

module.exports = routes;