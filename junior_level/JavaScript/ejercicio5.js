// let materias = {
//     fisica:[90,6,4, "fisica"],
//     matematicas:[84,7,2, "matematicas"],
//     quimica:[75,9,6, "quimica"],
//     ingles:[98,5,7, "ingles"],
//     sociales:[85,2,2, "sociales"]
// }
//---------------------------------------------
// const aprobo =  ()=>{
//     for(materia in materias){

//         let asistencias = materias[materia][0];
//         let promedio = materias[materia][1];
//         let trabajos = materias[materia][2];

//         console.log(materias[materia][3]);


//         if(asistencias >= 90){
//             console.log("%c  Asistencias en orden", "color:green")
//         } else{
//             console.log("%c  Falta de asistencias", "color:red")
//         }
//         if(promedio >= 7){
//             console.log("%c  Promedio en orden", "color:green");
//         } else{
//             console.log("%c  Promedio desaprobado", "color:red");
//         }
//         if (trabajos >= 3){
//             console.log("%c  Promedio en orden", "color:green");
//         } else{
//             console.log("%c  Faltan trabajos practicos", "color:red");
//         }
//     }
// }
// aprobo()

// let trabajo = "240 minutos de trabajo";
// let estudio = "100 minutos de estudio";
// let tp = "100 minutos hacer trabajos practicos";
// let homework = "30 minutos de cosas de la casa";
// let descanso = "10 munutos de descando";
//---------------------------------------------
// console.log("tareas");
// for (var i = 0; i < 14; i++){
//     if (i== 0){
//         console.group("semana 1")
//     }
//     console.groupCollapsed("dia" + (i+1));
//     console.log(trabajo);
//     console.log(descanso);
//     console.log(estudio);
//     console.log(tp);
//     console.log(homework);
//     console.groupEnd()
//     if(i==7){
//         console.groupEnd()
//         console.groupCollapsed("semana 2")
//     }
// }
// console.groupEnd();
// console.groupEnd();
