//var nombre = prompt("como te llamas?")
//alert("hola, "+nombre+" como estas?")
var yo;
yo=150;
alert(yo)

/*var estadoCivil = "casado";
var mensaje = "Lo invitamos a un viaje a Chiapas, ";
var mensaje2 = "";
switch(estadoCivil){
	case "soltero":
		mensaje2 = "donde podrás conocer a más personas solteras ";
		break;
	case "casado":
		mensaje2 = "donde podrás disfrutar a tu familia ";
		break;
	case "divorciado":
		mensaje2 = "donde podrás olvidar tus problemas ";
		break;
	case "viudo":
		mensaje2 = "donde podrás recordar tus mejores tiempos ";
		break;
	case "arrejuntado":
		mensaje2 = "para que tomes esa importante decisión ";
		break;
	default:
		mensaje2 = "para que definas tu estado civil ";
		break;
}
var mensaje3 = " en una extraordinaria experiencia en la selva";
document.write(mensaje+mensaje2+mensaje3+"<br><br>");*/

/*var edad = prompt("¿Cuál es tu edad?");
if(edad>18){
	alert("Bienvenido");
} else {
	alert("no puede entrar a la pagina");
}

var clave="";
do{
	clave=prompt("Clave de acceso");
} while(clave!="007");
alert("Bienvenido, agente 007");*/

/*var numero = 7;
var entrada = 0;
while(numero!=entrada){
	var entrada = prompt("Adivina el número entre 1 y 10");
	if(entrada==numero){
		alert("El número secreto es "+numero);
		break;
	}
}*/

// Funciones en JavaScript
function saludo(miNombre, fecha){
	alert("Hola, "+miNombre+", tienes cara de bola, "+fecha);	
}//fin funcion saludos
//Llamar a la funcion
//
//Llamar la variable
var nombre = "";
//Solicitamos la entrada al usuario
nombre = prompt("¿Cuál es tu nombre?");
//Enviamos el parámetro
saludos(nombre, "hoy es martes, ni te cases ni te embarques");