// // // let free = false;

// // // const validarCliente = (time)=>{
// // //     let edad = prompt("Cual es tu edad?");
// // //     if (edad > 18 ){
// // //         if (time >= 2 && time < 7 && free == false){
// // //             alert("Puedes pasar gratis");
// // //             free = true;
// // //         } else {
// // //             alert(`Son las ${time}:00Hs, podes pasar pero tienes que pagar la entrada`)
// // //         }
// // //     } else {
// // //         alert("Mira niño, eres menor de edad y por ende no puedes pasar")
// // //     }
// // // }
// // // validarCliente(23);
// // // validarCliente(24);
// // // validarCliente(0.2);
// // // validarCliente(1);
// // // validarCliente(2.4);

// // let cantidad = prompt("¿Cuantos alumnos son:");
// // let alumnosTotales = [];

// // for (i = 0; i < cantidad; i++) {
// //     alumnosTotales[i] = [prompt("Nombre del alumno" + (i+1)),0];
// // }
// // const tomarAsistencia = (nombre,p)=>{
// //     let presencia = prompt(nombre);
// //     if (presencia == "p" || presencia == "p"){
// //         alumnosTotales[p][i]++;
// //     }
// // }

// // for (i = 0; i < 10; i++){
// //     for(alumno in alumnosTotales){
// //         tomarAsistencia(alumnosTotales[alumno][0],alumno)
// //     }
// // }

// // for (alumno in alumnosTotales){
// //     let resultado = `${alumnosTotales[alumno][0]}: <br>
// //     ___________Presentes: <b>${alumnosTotales[alumno][1]}:</b> <br> <br>  
// //     ___________Ausencias: <b>${10 - alumnosTotales[alumno][1]}:</b>`;
// //     if (10 - alumnosTotales[alumno][1] > 8){
// //     resultado += "<b style='color:red'> REPROBADO POR INASISTENCIAS </b><br><br>";
// //     } else {
// //     resultado += "<br><br>"
// //     }
// //     document.write(resultado)
// // }

// const sumar = (num1,num2)=>{
//     return parseInt(num1) + parseInt(num2);
// }
// const restar = (num1,num2)=>{
//     return parseInt(num1) - parseInt(num2);
// }
// const multiplicar = (num1,num2)=>{
//     return parseInt(num1) * parseInt(num2);
// }
// const dividir = (num1,num2)=>{
//     return parseInt(num1) / parseInt(num2);
// }

// alert("Que operacion deseas realizar?");
// let operacion = prompt("1: Suma, 2: Resta, 3: Multiplicacion 4: Division" );

// if(operacion == 1){
//     let numero1 = prompt("Primer numero para sumar");
//     let numero2 = prompt("Segundo numero para sumar");
//     resultado = sumar(numero1,numero2);
//     alert(`Tu resultado es: ${resultado}`)
// }
// else if(operacion == 2){
//     let numero1 = prompt("Primer numero para restar");
//     let numero2 = prompt("Segundo numero para restar");
//     resultado = restar(numero1,numero2);
//     alert(`Tu resultado es: ${resultado}`)
// }
// else if(operacion == 3){
//     let numero1 = prompt("Primer numero para multiplicar");
//     let numero2 = prompt("Segundo numero para multiplicar");
//     resultado = multiplicar(numero1,numero2);
//     alert(`Tu resultado es: ${resultado}`)
// }
// else if(operacion == 4){
//     let numero1 = prompt("Primer numero para dividir");
//     let numero2 = prompt("Segundo numero para dividir");
//     resultado = dividir(numero1,numero2);
//     alert(`Tu resultado es: ${resultado}`)
// }
// else {
//     alert("No se ha encontrado la operacion")
// }