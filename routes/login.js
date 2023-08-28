const express = require('express');

const router = express.Router();

router.get('/login',(req,res)=>{

    res.send('<form onSubmit="localStorage.setItem(`username`,document.getElementById(`username`).value)" action="/"><input type="text" name="username" id="username"><button>Login</button></form>')
    
})


module.exports = router;