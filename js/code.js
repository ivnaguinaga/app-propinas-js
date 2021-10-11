function calculo(params) {
    //alert("hola");
    let totalCuenta = document.getElementById('total').value;
    alert(totalCuenta);
    let servicio = document.getElementById('servicio').value;
    alert(servicio);
    let personas = document.getElementById('personas').value;
    alert(personas);
    let resultado = (servicio * totalCuenta) / personas;
    console.log('resultado: ' + resultado);
    //document.getElementById("res").innerHTML = "<p>total a pagar</p><h3>" + resultado + " por persona</h3>";

    if (isNaN(resultado)) {
        alert("Introduce datos correctamente");
    } else if (personas == '') {
        alert("Introduce las personas");
    } else {
        document.getElementById("resultado").innerHTML = "<p>total a pagar</p><h3>" + resultado + " por persona</h3>";
    }
}

/*function limpiar() {
    document.getElementById("total").reset();
}*/

function limpiar() {
    document.getElementById("total").value = "";
    document.getElementById("personas").value = "";
    document.getElementById("resultado").innerHTML = "";
}