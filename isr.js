 //Este proyecto es para sacar el isr de los salarios brutos en mexico
 
 //Agarramos el valor del salario ingresado

//Calculamos la cuota fija con el limite inferior de la tabla de impuestos
 function calcularISR(){
    let salary = document.getElementById("salario").value;
    console.log(salary);

if(salary >= 0.01 && salary <= 578.52){

    let limite = salary - 0.01;
    let limite2 = limite * .0192;
    let limite3 = limite2 + 0;

    let salarioReal = salary - limite3;

    return alert('El salario neto es: ' + salarioReal);

}else if(salary >= 578.53 && salary <= 4910.18){

    let limite = salary - 578.53;
    let limite2 = limite * .0640;
    let limite3 = limite2 + 11.11;

    let salarioReal = salary - limite3;
    return alert('El salario neto es: ' + salarioReal);

}else if(salary >= 4910.19 && salary <= 8629.20){

    let limite = salary - 4910.19;
    let limite2 = limite * .1088;
    let limite3 = limite2 + 288.33;

    let salarioReal = salary - limite3;

    return alert('El salario neto es: ' + salarioReal);

}else if(salary >= 8629.21 && salary <= 10031.07){

    let limite = salary - 8629.21;
    let limite2 = limite * .16;
    let limite3 = limite2 + 692.96;

    let salarioReal = salary - limite3;

    return alert('El salario neto es: ' + salarioReal);

}else if(salary >= 10031.08 && salary <= 12009.94){

    let limite = salary - 10031.08;
    let limite2 = limite * .1792;
    let limite3 = limite2 + 917.26;

    let salarioReal = salary - limite3;

    return alert('El salario neto es: ' + salarioReal);

}else if(salary >= 12009.95 && salary <= 24222.31){

    let limite = salary - 12009.95;
    let limite2 = limite * .2136;
    let limite3 = limite2 + 1271.87;

    let salarioReal = salary - limite3;

    return alert('El salario neto es: ' + salarioReal);

}else if(salary >= 24222.32 && salary <= 38177.69){

    let limite = salary - 24222.32;
    let limite2 = limite * .2352;
    let limite3 = limite2 + 3880.44;

    let salarioReal = salary - limite3;

    return alert('El salario neto es: ' + salarioReal);

}else if(salary >= 38177.70 && salary <= 72887.50){

    let limite = salary - 38177.70;
    let limite2 = limite * .3;
    let limite3 = limite2 + 7162.74;

    let salarioReal = salary - limite3;

    return alert('El salario neto es: ' + salarioReal);

}else if(salary >= 72887.51 && salary <= 97183.33){

    let limite = salary - 72887.51;
    let limite2 = limite * .32;
    let limite3 = limite2 + 17575.69;

    let salarioReal = salary - limite3;

    return alert('El salario neto es: ' + salarioReal);

}else if(salary >= 97183.34 && salary <= 291550.00){

    let limite = salary - 97183.34;
    let limite2 = limite * .34;
    let limite3 = limite2 + 25350.35;

    let salarioReal = salary - limite3;

    return alert('El salario neto es: ' + salarioReal);

}else{

    let limite = salary - 291550.01;
    let limite2 = limite * .35;
    let limite3 = limite2 + 91435.02;

    let salarioReal = salary - limite3;

    return alert('El salario neto es: ' + salarioReal);

}


}