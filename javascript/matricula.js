function verificarSeNumero(valor) {

    let numero = "0123456789";
    for (let i = 0; i < numero.length; i++) {

        while (valor.includes(numero.charAt(i))) {
            valor = valor.replace(numero.charAt(i), "");

        }
    }
   

    if (valor.length == 0) {
        return true;
    } else {
        return false;
    }
}

function VerificarInput(x) {

    let aux = document.getElementById(x).value;
    let aux1 = '0123456789!@#$%¨&*()+=§';

    while (aux.includes('  ')) {
        aux = aux.replace('  ', ' ');
    }

    document.getElementById(x).value = aux


    for (let i = 0; i < aux1.length; i++) {

        while (aux.includes(aux1.charAt(i))) {
            aux = aux.replace(aux1.charAt(i), "");

            document.getElementById(x).value = aux 
        }
    }
   
}



function verificarEmail() {
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


function verificarsenha() {
    let aux = document.getElementById('idsenha').value;
    aux = aux.trim();
    document.getElementById('idsenha').value = aux;

    if (aux.length >= 8) {
        document.getElementById('p1').style.color = 'green';
    } else {
        document.getElementById('p1').style.color = 'red';
    }


    let letramaiuscula = 'ABCDEFGHIJKLMNOPQRSTUVXWYZ';
    let contmaiuscula = 0;

    for (let i = 0; i < letramaiuscula.length; i++) {
        if (aux.includes(letramaiuscula.charAt(i))) {
            contmaiuscula++
        }
    }
    if (contmaiuscula != 0) {
        document.getElementById('p2').style.color = 'green';
    } else {
        document.getElementById('p2').style.color = 'red';
    }


    let numero = '1234567890';
    let contnumero = 0;

    for (let i = 0; i < numero.length; i++) {
        if (aux.includes(numero.charAt(i))) {
            contnumero++
        }
    }
    if (contnumero != 0) {
        document.getElementById('p3').style.color = 'green';
    } else {
        document.getElementById('p3').style.color = 'red';
    }


    let especial = '!@#$%¨&*()_-++§{[ª}]º?/°<,>.:;"';
    let contespecial = 0;

    for (let i = 0; i < especial.length; i++) {
        if (aux.includes(especial.charAt(i))) {
            contespecial++
        }
    }
    if (contespecial != 0) {
        document.getElementById('p4').style.color = 'green';
    } else {
        document.getElementById('p4').style.color = 'red';
    }


    let minuscula = 'abcdefghijklmnopqrstuvxwyz';
    let contminuscula = 0;

    for (let i = 0; i < minuscula.length; i++) {
        if (aux.includes(minuscula.charAt(i))) {
            contminuscula++
        }
    }
    if (contminuscula != 0) {
        document.getElementById('p5').style.color = 'green';
    } else {
        document.getElementById('p5').style.color = 'red';
    }

}

function VerificarRg() {
    let aux = document.getElementById("rg").value;
    aux = aux.trim();

    if (aux.length == 12) {
        aux = aux.replace(".", "");
        aux = aux.replace(".", "");
        aux = aux.replace("-", "");
    }

    if (aux.length == 10 && verificarSeNumero(aux)) {

        let cpfFormat = aux.substring(0, 2) + "." +
            aux.substring(2, 5) + "." + aux.substring(5, 8) +
            "-" + aux.substring(8,10);

        document.getElementById("rg").value = cpfFormat;
        document.getElementById('errorg').innerHTML = '';
    } else {
        document.getElementById('errorg').innerHTML = 'incorreto'
        document.getElementById('errorg').style.color = 'red'
    }

}

function verificarCPF() {
    let aux = document.getElementById("iCPF").value;
    aux = aux.trim();

    if (aux.length == 14) {
        aux = aux.replace(".", "");
        aux = aux.replace(".", "");
        aux = aux.replace("-", "");
    }

    if (aux.length == 11 && verificarSeNumero(aux)) {
        let cpfFormat = aux.substring(0, 3) + "." + aux.substring(3, 6) + "." + aux.substring(6, 9) +
            "-" + aux.substring(9);
        document.getElementById("iCPF").value = cpfFormat;
        document.getElementById('errocpf').innerHTML = '';
    } else {
        document.getElementById('errocpf').innerHTML = 'incorreto'
    }

}


function verificarTelefone() {
    let aux = document.getElementById("telefone").value;
    aux = aux.trim();

    if (aux.length == 16) {
        aux = aux.replace("(", "");
        aux = aux.replace(")", "");
        aux = aux.replace("-", "");
        aux = aux.replace("+", "");
    }

    if (aux.length == 12 && verificarSeNumero(aux)) {

        let cpfFormat ='+'+ aux.substring(0, 2) + "(" +
            aux.substring(2, 4) + ")" + aux.substring(4, 8) +
            "-" + aux.substring(8,15);

        document.getElementById("telefone").value = cpfFormat;
        document.getElementById('errotelefone').innerHTML = '';
    } else {
        document.getElementById('errotelefone').innerHTML = 'incorreto'
    }

}

function verificarCelular() {
    let aux = document.getElementById("celular").value;
    aux = aux.trim();

    if (aux.length == 17) {
        aux = aux.replace("(", "");
        aux = aux.replace(")", "");
        aux = aux.replace("-", "");
        aux = aux.replace("+", "");
    }

    if (aux.length == 13 && verificarSeNumero(aux)) {

        let cpfFormat ='+'+ aux.substring(0, 2) + "(" +
            aux.substring(2, 4) + ")" + aux.substring(4, 9) +
            "-" + aux.substring(9,16);

        document.getElementById("celular").value = cpfFormat;
        document.getElementById('errocelular').innerHTML = '';
    } else {
        document.getElementById('errocelular').innerHTML = 'incorreto'
    }

}
function alerta() {
    alert('enviaremos o link do site do aluno para o seu email.')
}
