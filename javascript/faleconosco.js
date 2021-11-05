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