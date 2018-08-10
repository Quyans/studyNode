'use strict'


//node.js中内置fs模块 文件系统模块 负责读写文件

// var fs = require('fs');

// fs.readFile("test.txt",function(err,data){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//         console.log(data.toString());
//     }
// })

//同步读取文件
// try{
//     var data = fs.readFileSync("test.txt",'utf-8');
//     console.log(data);

// }
// catch(err){
//     console.log(err)
// }





/*
写入文件  这是异步写入  因此先打印下面的 test the order 再写入文件
write (function(err){})
*/

var datatowrite = "hello node.js";
fs.writeFile('output.txt',datatowrite,function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("写入了文件")
    }
})
console.log("test the order");


//下面测试直接写入
// var datatowrite = "hello node.js";
// fs.writeFileSync("Out1put.txt",datatowrite)
    

// console.log("test the order");




//***********************下面这个存在问题  从源文件中读出的数据和转到string然后转回buffer 的数据不一样*************************** */

//下面读取二进制文件
// fs.readFile('timg.png',function(err,data){

//     if(err){
//         console.log(err);
//     }

//     else{
//         console.log(data);
//         console.log(data.length+'bytes');

       
//     }

//     var text = data.toString('utf-8');
//     var buf = Buffer.from(text,'utf-8');
//     console.log(buf);
//     console.log(buf.length+'bytes');
// })

