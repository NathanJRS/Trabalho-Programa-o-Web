function converter() {
    var celsius = parseFloat(document.getElementById('inputCelsius').value);
    var convert = (celsius * 1.8) + 32;
    document.getElementById('result').innerHTML = `${celsius} Graus celsius é igual a ${convert} Fanhereith`
}