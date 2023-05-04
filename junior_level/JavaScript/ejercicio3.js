
// class Celular {
//     constructor(color,peso,rdp,rdc,ram){
//         this.color = color;
//         this.peso = peso;
//         this.resolucionDePantalla = rdp;
//         this.resolucionDeCamara = rdc;
//         this.memoriaRam = ram;
//         this.encendido = false;
//      }
//     presionarBotonEncendido(){
//         if(this.encendido == false){
//             alert("celular prendido");
//             this.encendido = true;
//         } else{
//             alert("celular apagado");
//             this.encendido = false;
//         }
//     }

//     reiniciar(){
//         if(this.encendido == true){
//             alert("reiniciando celular");
//         } else {
//             alert("el celular esta apagado")
//         }
//     }

//     tomarFoto(){
//         alert(`foto tomada en una resolucion de: ${this.resolucionDeCamara}`)
//     }
//     grabarVideo(){
//         alert(`grabando video en ${this.resolucionDeCamara}`)
//     }
//     mobileInfo(){
//         return `
//         Color: <b> ${this.color}</b> <br>
//         Peso: <b> ${this.peso}</b> <br>
//         Tamaño: <b> ${this.resolucionDePantalla}</b> <br>
//         Resolucion de camara: <b> ${this.resolucionDeCamara}</b> <br>
//         Resoludion de video: <b> ${this.resolucionDeCamara}</b> <br>
//         Memoria RAM: <b> ${this.memoriaRam}</b> <br>
//         `
//     }
// }

//     class celularAltaGama extends Celular {
//     constructor(color,peso,tamaño,rdc,ram,rdce){
//         super(color,peso,tamaño,rdc,ram);
//         this.resolucionDeCamaraExtra = rdce;
//     }
//     grabarVideoLento(){
//         alert("estas grabando en camara lenta")
//     }
//     reconocimientoFacial(){
//         alert("vamos a iniciar un reconocimiento facial")
//     }
//     infoAltaGama(){
//         return this.mobileInfo() + `Resolucion de camara trasera: ${this.resolucionDeCamaraExtra} + <br>`;
//     }
// } 

// celular1 = new celularAltaGama("rojo", "130g", "7.2", "4k", "8gb","Full hd");
// celular2 = new celularAltaGama("negro", "120g", "7,0", "4k", "8gb","Full hd");


// // celular1 = new Celular ("rojo", "150", "5'", "hd", "2gb");
// // celular2 = new Celular ("negro", "155", "6.5", "full hd", "4gb");
// // celular3 = new Celular ("blanco", "143", "6.2", "full hd", "6gb");



// // celular1.presionarBotonEncendido();
// // celular1.tomarFoto();
// // celular1.grabarVideo();
// // celular1,reiniciar();
// // celular1.presionarBotonEncendido();

// // document.write(`
// // ${celular1.Info()} <br>
// // ${celular2.Info()} <br>
// // ${celular3.Info()} <br>
// // `)

// document.write(`
// ${celular1.infoAltaGama()} <br>
// ${celular2.infoAltaGama()} <br>
// `);


// class App {
//     constructor(descargas,puntuacion,peso){
//         this.descargas = descargas;
//         this.puntuacion = puntuacion;
//         this.peso = peso;
//         this.iniciada = false;
//         this.instalada = false;
//     }
//     instalar(){
//         if (this.instalada == false){
//             this.instalada = true;
//             alert("app instalada correctamente")
//         }
//     }
//     desinstalar(){
//         if(this.instalada == true) {
//             this.instalada = false;
//             alert("app desinstalada correctamente")
//         }
//     }
//     abrir(){
//         if(this.iniciada == false && this.instalada == true){
//             this.iniciada = true;
//             alert("app iniciada")
//         }
//     }
//     cerrar(){
//         if (this.iniciada == true && this.instalada == true){
//             this.iniciada = false;
//             alert("app cerrada")
//         }
//     }
//     appInfo(){
//         return `
//         Descargas: <b>${this.descargas}</b><br>
//         Puntuacion: <b>${this.puntuacion}</b><br>
//         Peso: <b>${this.peso}</b><br>

//         `
//     }
// }

// app = new App("16.000", "5 estrellas", "900mb");
// app2 = new App("16.000", "4 estrellas", "600mb");
// app3 = new App("17.000", "5 estrellas", "700mb");
// app4 = new App("10.000", "4 estrellas", "300mb");
// app5 = new App("14.000", "4 estrellas", "900mb");
// app6 = new App("12.000", "6 estrellas", "600mb");
// app7 = new App("19.000", "7 estrellas", "900mb");


// document.write(`
// ${app.appInfo()} <br>
// ${app2.appInfo()} <br>
// ${app3.appInfo()} <br>
// ${app4.appInfo()} <br>
// ${app5.appInfo()} <br>
// ${app6.appInfo()} <br>
// ${app7.appInfo()} <br>
// `)

// app.instalar()
// app.abrir()
// app.cerrar()
// app.desinstalar()