import { error } from "util";

window.onload = function(){

    var user_con = document.getElementById("user");
    var pass_con = document.getElementById("pass");
    var reg_btn = document.getElementById("reg_btn");
    var login_btn = document.getElementById("login_btn");

    //登陆事件
    login_btn.onclick = function(){
        $.ajax({
            url:'/user',
            dataType:"json",
            data:{
                act     :   "login",
                user    :   user_con.value,
                pass    :   pass_con.value
            },
            type    :   "get",
            success(data){
                if(data.ok == "true"){
                    alert("登录成功");
                }else{
                    alert("登录失败"+data.msg);
                }
            },
            error() {
                alert("通信错误");
            }
        })
    }

    //注册事件
    reg_btn.onclick = function(){
        $.ajax({
            url:'/user',
            dataType: "json",                      //如果不写dataType 则后台默认返回的是一个字符串 而不是json
            data:{
                act     :   "reg",
                user    :   user_con.value,
                pass    :   pass_con.value
            },
            type:'get',
            success:function(data){
                console.log(data);
                console.log(data.ok);
                //  console.log(data["ok"]);
                // var json_0 = eval('('+data+')');   //可以把String 转换为字符串
               var json_0 = data;

                if(json_0.ok=="true"){
                    alert("注册成功");
                }
                else{
                    alert("注册失败"+json_0.msg);
                }
            }
            
       
        })
    }

}
