const { Console } = require('console');
const express=require('express');
const app= express();
const path= require('path');
const filtro=require('./js/filtros.js');

app.use(express.json()); 

const info = require('./productos.json');

let prodIndex= filtro.filtroIndex(info);
let prodHombre= filtro.filtroHombre(info);
let prodMujer= filtro.filtroMujer(info);

//------------------SETEO EXPRESS-------------------------

app.set('views',path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));

//-------------------GETS---------------------------------
 
app.get('/',(req,res)=>{
    res.render('index',{
        productos:prodIndex
    });
   
});

app.get('/nosotros',(req,res)=>{
    res.render('./pages/nosotros');
});

app.get('/hombre',(req,res)=>{
    res.render('./pages/hombre',{
        productos:prodHombre
    });
});

app.get('/mujer',(req,res)=>{
    res.render('./pages/mujer',{
        productos:prodMujer
    });
});

app.get('/todo',(req,res)=>{
    res.render('./pages/todo',{
        productos:info
    });
});



//---------------------LISTEN------------------------------

app.listen(3000,()=>{
    console.log("Conectado al puerto 3000");
  
});