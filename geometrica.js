function calcularMediaGeometrica(lista){

    console.log(lista);
    let lista2 = lista.map(
        function(elemento){
            return elemento / 100;
        }
    );
        console.log(lista2);

    let lista3 = lista2.reduce(
        function(valorAcumulado = 0, nuevoValor){
        return valorAcumulado * nuevoValor; 
        }
    );
    //console.log(lista3);
    let mediaGeometrica = (Math.pow(lista3, 1/lista.length))*100;
    
    return mediaGeometrica;
}