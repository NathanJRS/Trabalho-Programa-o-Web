function converter() {
    var hora = parseFloat(document.getElementById('inputHora').value);
    var convert = hora * 60
    document.getElementById('result').innerHTML = `${hora} horas é igual a ${convert} minutos`
}