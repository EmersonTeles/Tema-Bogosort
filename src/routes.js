const { Router } = require('express');
const Bogosort = require('./Components/bogosort.js');

const router = Router();

router.get('/Tema/:intN',(req,res)=>{  
    const intN = parseInt(req.params.intN);  
    const [sortedArray, timing, attempts] = Bogosort(intN);

    try{
        if(intN > 1){
            res.status(200).json(
                {   'Lista de numeros': `${sortedArray}`,
                    'Tempo de execução': `${timing}ms`,
                    'Tentativas': `${attempts}`,
                    'Tamanho do array': `${intN}`,
                });
        }else{
            throw new Error ("Numero igual ou menor que 1.")
        }
    }catch(err){
        console.log(err)
    };
});

module.exports = router;