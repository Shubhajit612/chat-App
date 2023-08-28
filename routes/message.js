const express = require('express');
const fs = require('fs');
const data = require('./data');
const router = new express.Router();

router.get('/',(req,res)=>{

    fs.readFile('hello.txt',(err,data)=>{
        if(err){
            console.log(err);
            data = 'NO CHAT EXISTS';
        }

        res.send(
            `${data}<form onSubmit="document.getElementById('username').value = localStorage.getItem('username')"
        action='/' method='POST'>
        <input id='message' type='text' name='message' placeholder='message'>
        <input type='hidden' name='username' id='username'>
        <button type='submit'>send</button>
        </form>`);
    })
   
});

router.post('/',(req,res)=>{
    console.log(req.body.username);
    console.log(req.body.message);
    // data.push(`${req.body.username}:${req.body.message}`);
    // console.log(data);
    // console.log(`${req.body.username}:${req.body.message}`);
    fs.writeFile('hello.txt',`${req.body.username} : ${req.body.message}`,{flag:'a'},(err)=>{
            err ? console.log(err) : res.redirect('/');
    });
    
})

module.exports =  router;