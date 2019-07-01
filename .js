<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <script>
        //*Autor: Jany(Janelyn Marbeth Verduga Alava)*//
        //*Dscripcion: Prueba*//

var Hugo = {}
var Paco = {}
var Luis = {}
  //*Declarar un array vacio de nombre amigos*//

var amigos =[]
//* Declarar tres objetos de nombre Hugo, Paco y Luis.   Cada objeto debe tener estos atributos:  nombre, edad, ciudad.   Usted debe asignar edades y ciudades a cada objeto.*//
var Hugo={
    nombre:"Daniel",
    cuidad:"Quito",
     edad:18,
}

var Paco={
    nombre:"Juan",
    ciudad:"Guayaquil",
    edad:19

}

var Luis= {
    nombre:"Pablo",
    ciudad:"Cuenca",
    edad:20
}

amigos.push(Hugo.edad, Hugo.ciudad, Hugo.nombre);
amigos.push(Paco.edad, Paco.ciudad, Paco.nombre);
amigos.push(Luis.edad, Luis.ciudad, Luis.nombre);
//*Imprimir en consola la longitud del array amigos*//
amigos.length
//*Declarar una variable numeroDeAmigos y guardar el número de elementos que tiene el array (usando la propiedad que devuelve el número de elementos de un array)*//
var numeroDeAmigos= (amigos.length);
//*Crear un nuevo objeto de nombre Elena (con los mismos tres atributos de los objetos iniciales: nombre, edad, ciudad)*//
var Elena={nombre:"carlos", edad:17,ciudad:"Esmeraldas"}
//*Hacer una función que se llame saludo, la función recibe como parámetro un objeto,  si la edad es par: imprime en consola “Saluton kaj bonvenon”.  Cuando la edad es impar imprime en consola “Hello moto”.*//
var saludo =function(edad){
    if(edad%2===0){
        console.log("Saluton kaj bonvenon");
    }else{
        console.log("Hello moto");
    }
}
//*Hacer una función de nombre arriba  que recibe un objeto por parámetro e imprime en consola desde el uno, de manera ascendente hasta el atributo edad del objeto recibido como parámetro.*//
var b=Luis.edad
var arriba=function (edad){
    if(edad===1){
        console.log(1);
    }else{
        arriba(edad-1);
        console.log(edad);
    }
}
//*Hacer una función de nombre abajo  que recibe un objeto por parámetro e imprime en consola desde la edad del objeto hasta cero, de manera descendente.*//
var a=Luis.edad;
var abajo=function (a){
    if(a===0){
        return(0);
    }else{
        console.log(a);
        abajo(a-1);   
    }
  
}
//*Hacer una función de nombre edadTotal que recibe cuatro objetos como parámetros y escribe en consola la suma de las edades de los cuatro objetos recibidos.*//
var Luis=Luis.edad;
var Paco=Paco.edad;
var Hugo=Hugo.edad;  
var Elena=Elena.edad;

var sumaTotal=function(n1,n2,n3,n4){
    suma=(n1+n2+n3+n4);
    console.log(suma);
}
   
    </script>
</body>
</html>
