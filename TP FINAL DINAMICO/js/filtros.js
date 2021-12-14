const info = require('../productos.json');


function filtroIndex(info)
{let filtro=[];
   let i=0;
   info.forEach((dato)=>{

      if (dato.temporada==true) 
      { 
         filtro[i]=dato;   
         i=i+1;
      }
   
   }) 
  
   return(filtro)
}

function filtroHombre(info)
{  let filtro=[];
   let i=0;
   info.forEach((dato)=>{

      if ((dato.genero=="hombre") || (dato.genero=="masculino"))
      { 
         filtro[i]=dato;   
         i=i+1;
      }
   
   }) 
  
   return(filtro)
}

function filtroMujer(info)
{  let filtro=[];
   let i=0;
   info.forEach((dato)=>{

      if ((dato.genero=="mujer") || (dato.genero=="femenino"))
      { 
         filtro[i]=dato;   
         i=i+1;
      }
   
   }) 
  
   return(filtro)
}

module.exports={    
   filtroIndex,
   filtroHombre,
   filtroMujer
} 

   