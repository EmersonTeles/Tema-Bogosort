const { Router } = require('express');
const Bogosort = require('./Components/bogosort.js');

const router = Router();

router.get('/Tema/:intN',(req,res)=>{  

    const intN = parseInt(req.params.intN);  
    const [sortedArray, timing, attempts] = Bogosort(intN);
    
    try{
        if(!isNaN(intN)){
            if(intN > 1){
                res.status(200).json(
                    {   'Lista de numeros': `${sortedArray}`,
                        'Tempo de execução': `${timing}ms`,
                        'Tentativas': `${attempts}`,
                        'Tamanho do array': `${intN}`,
                    });
            }else{
                throw new Error ("Numero digitado igual ou menor que 1.")
            }
        }else{
            throw new Error ("Valor digitado não é um numero.")
        }
    }catch(err){
        res.status(400).json({
            ERROR: err.message,
        })
    };
});

module.exports = router;