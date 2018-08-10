'use strict';

var name = 'world';

var s = `Hello,${name}!`;


function greet(name){
    console.log(s+','+name);
}

function nihao(){
    console.log("你好")
}




module.exports.nihao = nihao;
module.exports.greet = greet;
