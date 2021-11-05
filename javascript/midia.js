var lista=[];
var texto=[];

lista.push('../../projeto/img/luta1.jpg')
lista.push('../../projeto/img/luta2.jpg')
lista.push('../../projeto/img/luta3.jpg')
lista.push('../../projeto/img/luta4.jpg')



texto.push('texto1')
texto.push('texto2')
texto.push('texto3')
texto.push('texto4')


var i = 0
var u = 0

function voltar(x){
if(i <= 0){
    
   i = lista.length-1
   u = texto.length-1
}else{
    i--;
    u--;
  
}
document.getElementById('itela').src = lista[i];
document.getElementById('texto1').innerHTML = texto[u];
}


function proximo(x){
    if(i>=lista.length-1){
        i=0
        u=0
    }else{
        i++
        u++
    }

document.getElementById('itela').src = lista[i];
document.getElementById('texto1').innerHTML = texto[u];
}