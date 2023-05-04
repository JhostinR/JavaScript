// class Calculadora {
//     constructor(){

//     }
//     sumar = (num1,num2)=>{
//         return parseInt(num1) + parseInt(num2);
//     }
//     restar = (num1,num2)=>{
//         return parseInt(num1) - parseInt(num2);
//     }
//     multiplicar = (num1,num2)=>{
//         return parseInt(num1) * parseInt(num2);
//     }
//     dividir = (num1,num2)=>{
//         return parseInt(num1) / parseInt(num2);
//     }
//     potenciar = (num,exp)=>{
//         return(num**exp)
//     }
//     raizCuadrada =(num)=>{
//         return Math.sqrt(num);
//     }
//     raizCubica =(num)=>{
//         return Math.cbrt(num);
//     }
// }

// const calculadora = new Calculadora();


// alert("Que operacion deseas realizar?");
// let operacion = prompt("1: Suma, 2: Resta, 3: Multiplicacion, 4: Division, 5: potenciacion, 6: raiz cuadrada, 7: raiz cubica" );

// if(operacion == 1){
//     let numero1 = prompt("Primer numero para sumar");
//     let numero2 = prompt("Segundo numero para sumar");
//     resultado = calculadora.sumar(numero1,numero2);
//     alert(`Tu resultado es: ${resultado}`)
// }
// else if(operacion == 2){
//     let numero1 = prompt("Primer numero para restar");
//     let numero2 = prompt("Segundo numero para restar");
//     resultado = calculadora.restar(numero1,numero2);
//     alert(`Tu resultado es: ${resultado}`)
// }
// else if(operacion == 3){
//     let numero1 = prompt("Primer numero para multiplicar");
//     let numero2 = prompt("Segundo numero para multiplicar");
//     resultado = calculadora.multiplicar(numero1,numero2);
//     alert(`Tu resultado es: ${resultado}`)
// }
// else if(operacion == 4){
//     let numero1 = prompt("Primer numero para dividir");
//     let numero2 = prompt("Segundo numero para dividir");
//     resultado = calculadora.dividir(numero1,numero2);
//     alert(`Tu resultado es: ${resultado}`)
// }
// else if(operacion == 5){
//     let numero1 = prompt("numero a potenciar");
//     let numero2 = prompt("exponente");
//     resultado = calculadora.potenciar(numero1,numero2);
//     alert(`Tu resultado es: ${resultado}`)
// }
// else if(operacion == 6){
//     let numero1 = prompt("Raiz cuadrada de:");
//     resultado = calculadora.raizCuadrada(numero1);
//     alert(`Tu resultado es: ${resultado}`)
// }
// else if(operacion == 7){
//     let numero1 = prompt("Raiz cubica de:");
//     resultado = calculadora.raizCubica(numero1);
//     alert(`Tu resultado es: ${resultado}`)
// }
// else {
//     alert("No se ha encontrado la operacion")
// }


// const obtenerInfo = (materia)=>{
//     materias = {
//         fisica:["sofia", "antonio", "valentina","cofla"],
//         matematicas:["ana", "liz", "jimmy"],
//         lenguaje:["dahiana", "laura", "nayibe", "cofla"]
//     }
//     if(materias[materia] !== undefined){
//         return [materias[materia],materia,materias];
//     } else {
//         return materias;
//     }
// }

// const mostrarInformacion = (materia)=>{
//     let informacion = obtenerInfo(materia)

// if(informacion !== false){
//     let profesor = obtenerInfo(materia)[0][0];
//     personass = obtenerInfo(materia)[0];
//     personass.shift();
//     document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color:red">${profesor}</b> <br>
//     Los personass son: <b style="color:blue">${personass}</b> <br> <br>
//     `);
// }
// }

// const cantidadDeClases = (personas)=>{
//     let informacion = obtenerInfo();
//     let clasesPresentes = [];
//     let cantidadTotal = 0;
//     for(info in informacion){
//         if(informacion[info].includes(personas)){
//             cantidadTotal++;
//             clasesPresentes.push(" "+ info);
//         }
//     }
//     return `<b style= 'color:blue'>${alumno}</b> Esta en <b> ${cantidadTotal} clases: <b style= 'color:green'>${clasesPresentes}</b> <br> <br>
//     `;
// }
// mostrarInformacion("fisica");
// mostrarInformacion("matematicas");
// mostrarInformacion("lenguaje");

// document.write(cantidadDeClases("cofla"))


// let materias = {
//     fisica: ["Perez","pedro","pepito","cofla","maria"],
//     programacion: ["Dalto","pedro","juan","pepito"],
//     logica: ["Hernandez","pedro","juan","pepito","cofla","maria"],
//     quimica: ["Rodriguez","pedro","juan","pepito","cofla","maria"]
// }


// const inscribir = (alumno,materia)=>{
// personas = materias[materia];
// if (personas.length >= 21) {
//     document.write(`lo siento ${alumno}, las clases de ${materia} ya estan llenas<br><br>`);
// } else {
//     personas.push(alumno);
//     if (materia == "fisica") {
//         materias = {
//             fisica: personas,
//             programacion: materias['programacion'],
//             logica: materias['logica'],
//             quimica:materias['quimica']
//         }
//     }
//     else if (materia == "programacion") {
//         materias = {
//             fisica: materias['fisica'],
//             programacion: personas,
//             logica: materias['logica'],
//             quimica:materias['quimica']
//         }
//     }else if (materia == "logica") {
//         materias = {
//             fisica: materias['fisica'],
//             programacion: materia['programacion'],
//             logica: personas,
//             quimica:materias['quimica']
//         }
//     }else if (materia == "quimica") {
//         materias = {
//             fisica: materias['fisica'],
//             programacion: materia['programacion'],
//             logica: materias['logica'],
//             quimica: personas
//         }
//     }
//     document.write(`¡Felicidades ${alumno}! te has inscrito a ${materia} correctamente.<br><br>`);
// }
// }

// document.write(materias['fisica'] + "<br>")

// inscribir("pedrito","fisica");
// inscribir("jorge","fisica");
// inscribir("ramses","fisica");
// inscribir("pedrito","fisica");
// inscribir("jorge","fisica");
// inscribir("ramses","fisica");
// inscribir("pedrito","fisica");
// inscribir("jorge","fisica");
// inscribir("ramses","fisica");
// inscribir("pedrito","fisica");
// inscribir("jorge","fisica");
// inscribir("ramses","fisica");
// inscribir("pedrito","fisica");

// document.write("<br>" + materias['fisica'])