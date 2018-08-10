
    'use strict'
  
    // process.nextTick(function(){
    //     console.log("nextTick callback");
    // });

    // console.log("nextTick was set");

    // process.on("exit",function(code){
    //     console.log("exit the system"+code);
    //     if(typeof(window) === "undefined"){
    //         console.log("the environment is node.js");
    //     }else{
    //         console.log("browser");
    //     }
    // })


    // var fs = require('fs');

    // fs.stat('test.txt',function(err,stat){
    //     if(err){
    //         console.log(err);
    //     }

    //     else{
    //         //查询是否是文件
    //         console.log("isFile:"+stat.isFile());

    //         //查询是否是目录
    //         console.log("isDictionary:"+stat.isDirectory());

    //         //返回大小
    //         console.log('size is:' + stat.size);

    //         //查询时间·
    //         console.log('creat time is:'+stat.birthtime);

    //         //设置时间
    //         console.log('set time: ' + stat.mtime);


    //     }

    // })