var request = require('request');
var fs = require('fs');
 
var img_src = 'https://www.baidu.com/img/bd_logo1.png'; //获取图片的url
        //采用request模块，向服务器发起一次请求，获取图片资源
        request.head(img_src,function(err,res,body){
            if(err){
                console.log(err);
            }
        });
         
var img_filename = 'mu.jpg';  
    request(img_src).pipe(fs.createWriteStream('./'+ img_filename));