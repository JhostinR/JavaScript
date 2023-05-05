// let alto = window.screen.availHeight;
// let ancho = window.screen.availWidth;

// comprar = confirm(`El alto es: ${alto} y su ancho es ${ancho}`);

// if (comprar){
//     alert("Compra realizada exitosamente");
// } else {
//     alert("Compra cancelada")
// }

let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocol = window.location.protocol;

let html = `Protocolo: <b> ${protocol} </b> <br></br>`;
html += `Hostname: <b> ${hostname}} </b> <br></br> `;
html += `Pathname: <b> ${pathname} </b> <br></br>`;
html += `URL completa : <b> ${href} </b> <br></br>`;

document.write(html)