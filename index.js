const express = require('express');
const chalk = require('chalk');
const server = express();

server.get('/', function(req,res){

    res.send('<h1>mi primera vez en express y node</h1>');
    res.end();
});

server.listen(3000,function(){

    console.log(chalk.green('server on port 3000'));

});