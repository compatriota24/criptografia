function botao(){
var texto= document.getElementById("texto").value
var resultado=[]

var lista=[
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
"r","s","t","u","v","w","x","y","z"]


for (var rio=0;rio<texto.length;rio=rio+1){
   // print(texto[rio]+" ")
    for (var indice=0;indice<25;indice=indice+1){
     //print(lista[indice]) 
    
    if (texto[rio]===lista[indice]){ 
        
        var chave=(indice*16)-4
            
        if(resultado===''){
           resultado=chave    
        }else{
            resultado.push(chave)    
        }
    }
    }
}

//print(resultado)
  document.getElementById("resposta").value=resultado

for (let elemento of resultado){
    //console.log(elemento) 
    var resunti=(elemento-16)/4
    //console.log(resunti)
   // console.log (lista[resunti])
   //lista[resunti] push=lista[resunti]  
  
  ///document.getElementById("lista[resunti]").value=lista[resunti]
      
}

return (texto)
  
}
  
