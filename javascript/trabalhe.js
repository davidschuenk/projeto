function verificaremail() {
    let aux = document.getElementById('email').value;
    aux = aux.trim()

    while (aux.includes(" ")) {
        aux.replace(' ', '')
    }
    aux = document.getElementById('email').value;

    if (aux.includes('@') && aux.includes('.com')) {
        document.getElementById('erroemail').innerHTML = '';
    } else {
        document.getElementById('erroemail').innerHTML = 'incorreto'
        document.getElementById('erroemail').style.color = 'red'
    }
}

var nota = 0;

function falso() {
    if(nota==0){
        nota = 0;
    }else{
        nota--
    }
}
function verdadeiro() {
    nota++
}

function alerta() {
    alert('sua nota foi de: '+nota+' enviaremos um email caso voce seja aceito')
}