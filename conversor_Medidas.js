function converter() {
    var centimetro = parseFloat(document.getElementById('inputCm').value);
    var metros = centimetro / 100
    document.getElementById('result').innerHTML = `${centimetro} centimetros é igual a ${metros} metros`
}