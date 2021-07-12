const express = require('express')
const app = express()
const Bogosort = require('./bogosort.js')

app.use(express.json())

app.get('/Tema/:num',(req,res)=>{  
    const { num } = req.params  
    const valor = parseInt(num)
    const [sortedArray, timing, attempts] = Bogosort(valor)
    res.status(200).json({'Lista de numeros': `${sortedArray}`,
              'Tempo de execução': `${timing}ms`,
              'Tentativas': `${attempts}`,
              'Tamanho do array': `${valor}`,
              })
})

app.listen(3000, ()=> {
    return console.log('server running!')
})
