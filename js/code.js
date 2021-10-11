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

}