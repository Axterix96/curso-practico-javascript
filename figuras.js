//Codigo del Cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){

 return lado * 4;

} 
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado*lado;
}
// console.log("El area del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();


//Codigo del triangulo
 console.group("Triangulos");
/*const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(
"Los lados del triangulo miden: " 
+ ladoTriangulo1 
+ "cm, " 
+ ladoTriangulo2 
+ "cm, " 
+ baseTriangulo 
+ "cm"
);*/
// console.log("La altura del triangulo es: " + alturaTriangulo + "cm");

function  perimetroTriangulo(lado1, lado2, base){

return lado1 + lado2 + base;

}

// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura){

    return (base*altura)/2;

}
//console.log("El area del triangulo es: " + areaTriangulo + "cm2");

console.groupEnd();

//Codigo del circulo
console.group("Circulos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");


// Diametro
function diametroCirculo(radio){
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log("El PI del circulo es: " + PI);

// Circunferencia
function perimetroCirculo(radio){

    const diametro = diametroCirculo(radio);

    return diametro * PI;
};
// console.log("La circunferencia del circulo es: " + perimetroCirculo + "cm");

// Area
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
function areaCirculo(radio){

return (radio * radio) * PI;

}
// console.log("El area del circulo es: " + areaCirculo + "cm2");


console.groupEnd();

// Aqui interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}
function perimetroIsosceles(){
    const lado1 = document.getElementById("InputLado1");
    const lado1Value = lado1.value;
    const lado2 = document.getElementById("InputLado2");
    const lado2Value = lado2.value;
    const base = document.getElementById("InputBase");
    const baseValue = base.value;

if(lado1Value === lado2Value){
    const altura = Math.sqrt((lado1Value*lado1Value) - (baseValue*baseValue)/4)
    return alert("La altura del isosceles es: " + altura);
}else{
    return alert("No es un triangulo Isosceles vuelve a ingresar los datos");
}

}

