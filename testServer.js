"use strict"

//写一个能返回文件的服务器  
const http = require("http");
const fs = require('fs');

var server = http.createServer(function(req,res){
   
    //打开文件的路径为 ./www/sdfa.html 等等
    var fileName = './www'+req.url;
    
    //下面开始异步读取文件并且进行返回
    fs.readFile(fileName,function(err,data){

        if(err){
            res.write('404NotFound');
        }else
        {
            res.write(data);   //在这里data虽然是二进制 但是转到前端之后 就会自动生成字符 因此不需要.toString
        }

        res.end();
    })
})

server.listen(8080);