var express = require('express');
var app = express();
const PORT = process.env.PORT || 5000;

app.get('/',function(req,res){
  res.sendFile('index.html', {root:__dirname});
})

app.get('/secondpage',function(req,res){
  res.sendFile('secondpage.html', {root:__dirname});
})

app.listen(PORT,function(){
  console.log("server corriendo en el puerto 5000");
});
