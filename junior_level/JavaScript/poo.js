// // class animal {
// //   constructor(especie,edad,color){
// //     this.especie = especie;
// //     this.edad = edad;
// //     this.color = color;
// //     this.info = `Soy ${especie}, tengo ${edad} años y soy de color ${color}`;
// //     }
// //     verInfo(){
// //     document.write(this.info + "</br>")
// //     }
// // }

// // let perro = new animal("perro", 5, "Cafe")
// // let gato = new animal("gato", 2, "Naranja")
// // let pajaro = new animal("pajaro", 3, "azul")

// // perro.verInfo()
// // gato.verInfo()
// // pajaro.verInfo()



// class Animal {
//     constructor(especie,edad,color){
//       this.especie = especie;
//       this.edad = edad;
//       this.color = color;
//       this.info = `Soy ${especie}, tengo ${edad} años y soy de color ${color}`;
//       }
//       verInfo(){
//       document.write(this.info + "</br>")
//       }
//   }
  
//   class Perro extends Animal {
//     constructor(especie,edad,color,raza){
//         super(especie,edad,color);
//         this.raza = raza;
//     }
//     set modificarRaza(newName){
//         this.raza = newName;
//     }
//     get getRaza(){
//         return this.raza;
//     }
//   }

//   const perro = new Perro("perro", 5, "Cafe", "pitbull");
//   const gato = new Animal("gato", 2, "Naranja");
//   const pajaro = new Animal("pajaro", 3, "azul");
  
//   perro.modificarRaza = "Willy"

//   document.write(perro.getRaza)
