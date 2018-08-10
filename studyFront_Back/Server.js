'use strict'

var http = require('http');
var urllib = require('url');
var querystring = require("querystring");
const fs = require('fs');

var users = {}; //{ 'lisi' : '123456',   }

var server = http.createServer(function(req,res){

    //post

            var obj = urllib.parse(req.url,true);

            var url = obj.pathname;
        var str = ' ';
        req.on('data',function(data){
            str += data;
        })

        req.on('end',function(){
            
            var GET = obj.query;
            var POST = querystring.parse(str);
            
            if (url =='/user')  //请求的是接口 
            { 
                switch(GET.act){  //若是请求接口 则肯定数据在url中出现 因此是get数据
                    case 'reg': //注册 

                        //1、检查用户名是否已经有了
                        if(users[GET.user])  //users中已经有了这个用户名
                        {
                            res.write('{"ok":"false","msg":"用户名已经存在"}');
                            break;
                        }

                        //2、 插入user
                        else{
                        users[GET.user] = GET.pass;  
                        res.write('{"ok":"true","msg":"注册成功"}');
                        }
                        break;
                    case 'login':
                        //检查用户名是否存在
                        if(users[GET.user] == null)  //users中已经有了这个用户名
                        {
                            res.write('{"ok":"false","msg":"用户不存在"}');
                        }
                        else if(users[GET.user] != GET.pass)
                        {
                            res.write('{"ok":"false","msg":"用户名或密码有误"}');
                        }else{
                            res.write('{"ok":"true","msg":"登陆成功"}');
                        }
                        break;
                    default:
                        res.write('{"ok": false,"msg":"未知的act"}');
                }
                res.end();

            }else{//其他的都当做文件处理
                var filename = './www'+url;   //这个url是req.url 切完之后的pathname
                fs.readFile(filename,function(err,data){
                    if (err) {
                        res.write('404');
                    }
                    else{
                        res.write(data);
                    }
        
                    res.end();
                })
        }

        })
      
    
    //文件处理
        
     
       
           
}).listen(8080);