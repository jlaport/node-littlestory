
function getProducts(req, res) {
  res.send(products);
}



// let products = [
//   {
//     id: 1,
//     name: "Juguete de estrellas",
//     category: "juguetes",
//     image: "./assets/Juguetes/estrella.jpeg",
//     price: 50,
//   },
//   {
//     id: 2,
//     name: "Juguete de madera",
//     category: "juguetes",
//     image: "./assets/Juguetes/madera1.jpeg",
//     price: 50,
//   },
//   {
//     id: 3,
//     name: "Juguete de figuras",
//     category: "juguetes",
//     image: "./assets/Juguetes/figura.jpeg",
//     price: 50,
//   },
//   {
//     id: 4,
//     name: "Juguete de piramide",
//     category: "juguetes",
//     image: "./assets/Juguetes/piramide.jpeg",
//     price: 50,
//   },
//   {
//     id: 5,
//     name: "Juguete de vasos",
//     category: "juguetes",
//     image: "./assets/Juguetes/vasos.jpg",
//     price: 50,
//   },
//   {
//     id: 6,
//     name: "Mordillo de aros",
//     category: "mordillos",
//     image: "./assets/Mordillos/Aros.jpg",
//     price: 60,
//   },
//   {
//     id: 7,
//     name: "Mordillo aros 2",
//     category: "mordillos",
//     image: "./assets/Mordillos/Aros1.jpg",
//     price: 60,
//   },
//   {
//     id: 8,
//     name: "Mordillo aros 3",
//     category: "mordillos",
//     image: "./assets/Mordillos/Aros3.jpg",
//     price: 60,
//   },
//   {
//     id: 9,
//     name: "Mordillo aros 4",
//     category: "mordillos",
//     image: "./assets/Mordillos/Aros2.jpg",
//     price: 60,
//   },
//   {
//     id: 10,
//     name: "Mordillo gris",
//     category: "mordillos",
//     image: "./assets/Mordillos/Gris.jpg",
//     price: 60,
//   },
//   {
//     id: 11,
//     name: "Mordillo marron",
//     category: "mordillos",
//     image: "./assets/Mordillos/Marron.jpg",
//     price: 60,
//   },
//   {
//     id: 12,
//     name: "Plato alto blanco",
//     category: "platos",
//     image: "./assets/Platos/altoblanco.jpg",
//     price: 70,
//   },
//   {
//     id: 13,
//     name: "Plato alto rosa",
//     category: "platos",
//     image: "./assets/Platos/altorosa.jpg",
//     price: 70,
//   },
//   {
//     id: 14,
//     name: "Plato alto azul",
//     category: "platos",
//     image: "./assets/Platos/altoazul.jpg",
//     price: 70,
//   },
//   {
//     id: 15,
//     name: "Plato cuadrado blanco",
//     category: "platos",
//     image: "./assets/Platos/altoblanco.jpg",
//     price: 70,
//   },
//   {
//     id: 16,
//     name: "Plato cuadrado azul",
//     category: "platos",
//     image: "./assets/Platos/cuadradoazul.jpg",
//     price: 70,
//   },
//   {
//     id: 17,
//     name: "Plato cuadrado rosa",
//     category: "platos",
//     image: "./assets/Platos/cuadradorosa.jpg",
//     price: 70,
//   },
//   {
//     id: 18,
//     name: "Plato redondo claro",
//     category: "platos",
//     image: "./assets/Platos/redondoclaro.jpg",
//     price: 70,
//   },
//   {
//     id: 19,
//     name: "Plato redondo gris",
//     category: "platos",
//     image: "./assets/Platos/redondogris.jpg",
//     price: 70,
//   },
//   {
//     id: 20,
//     name: "Plato redondo rojo",
//     category: " ",
//     image: "./assets/Platos/redondorojo.jpg",
//     price: 70,
//   },
//   {
//     id: 21,
//     name: "Babero Amarillo",
//     category: "baberos",
//     image: "./assets/Baberos/baberoamarillo.jpg",
//     price: 30,
//   },
//   {
//     id: 22,
//     name: "Babero Rosa",
//     category: "baberos",
//     image: "./assets/Baberos/baberorosa.jpg",
//     price: 30,
//   },
//   {
//     id: 23,
//     name: "Babero Rojo",
//     category: "baberos",
//     image: "./assets/Baberos/baberorojo.jpg",
//     price: 30,
//   },
//   {
//     id: 24,
//     name: "Babero Gris",
//     category: "baberos",
//     image: "./assets/Baberos/baberogris.jpg",
//     price: 30,
//   },
//   {
//     id: 25,
//     name: "Babero Azul",
//     category: "baberos",
//     image: "./assets/Baberos/baberoazul.jpg",
//     price: 30,
//   },
//   {
//     id: 26,
//     name: "Chuprte blanco",
//     category: "chuprtes",
//     image: "./assets/Chupetes/blanco.png",
//     price: 100,
//   },
//   {
//     id: 27,
//     name: "Chuprte celeste",
//     category: "chuprtes",
//     image: "./assets/Chupetes/celeste.png",
//     price: 100,
//   },
//   {
//     id: 28,
//     name: "Chuprte naranja",
//     category: "chuprtes",
//     image: "./assets/Chupetes/naranja.png",
//     price: 100,
//   },
//   {
//     id: 29,
//     name: "Chuprte rojo",
//     category: "chuprtes",
//     image: "./assets/Chupetes/rojo.png",
//     price: 100,
//   },
//   {
//     id: 30,
//     name: "Muselina blanca",
//     category: "muselinas",
//     image: "./assets/Muselinas/blanca.jpg",
//     price: 150,
//   },
//   {
//     id: 31,
//     name: "Muselina gris",
//     category: "muselinas",
//     image: "./assets/muselinas/gris.jpg",
//     price: 150,
//   },
//   {
//     id: 32,
//     name: "Muselina naranja",
//     category: "muselinas",
//     image: "./assets/muselinas/naranja.jpg",
//     price: 150,
//   },
//   {
//     id: 33,
//     name: "Muselina rosa",
//     category: "muselinas",
//     image: "./assets/muselinas/rosa.jpg",
//     price: 150,
//   },
//   {
//     id: 34,
//     name: "Portachupetes rojo",
//     category: "portachupetes",
//     image: "./assets/Portachupetes/rojo.jpg",
//     price: 20,
//   },
//   {
//     id: 35,
//     name: "Portachupetes azul",
//     category: "portachupetes",
//     image: "./assets/Portachupetes/azul.jpg",
//     price: 20,
//   },
//   {
//     id: 36,
//     name: "Portachupetes blanco",
//     category: "portachupetes",
//     image: "./assets/Portachupetes/blanco.jpg",
//     price: 20,
//   },
//   {
//     id: 37,
//     name: "Portachupetes gris",
//     category: "portachupetes",
//     image: "./assets/Portachupetes/gris.jpg",
//     price: 20,
//   },
//   {
//     id: 38,
//     name: "Portachupetes verde",
//     category: "portachupetes",
//     image: "./assets/Portachupetes/verde.jpg",
//     price: 20,
//   },
//   {
//     id: 39,
//     name: "Portachupetes rosa",
//     category: "portachupetes",
//     image: "./assets/Portachupetes/rosa.jpg",
//     price: 20,
//   },
//   {
//     id: 40,
//     name: "Vaso azul",
//     category: "vasos",
//     image: "./assets/Vasos/Azul.jpg",
//     price: 35,
//   },
//   {
//     id: 41,
//     name: "Vaso crema",
//     category: "vasos",
//     image: "./assets/Vasos/Crema.jpg",
//     price: 35,
//   },
//   {
//     id: 42,
//     name: "Vaso gris",
//     category: "vasos",
//     image: "./assets/Vasos/Gris.jpg",
//     price: 35,
//   },
//   {
//     id: 43,
//     name: "Vaso rojo",
//     category: "vasos",
//     image: "./assets/Vasos/Rojo.jpg",
//     price: 35,
//   },
//   {
//     id: 44,
//     ame: "Vaso rosa",
//     category: "vasos",
//     image: "./assets/Vasos/Rosa.jpg",
//     price: 35,
//   },
//   {
//     id: 45,
//     name: "Vaso verde",
//     category: "vasos",
//     image: "./assets/Vasos/Verde.jpg",
//     price: 35,
//   },
//   {
//     id: 46,
//     name: "Rebozo blanco",
//     category: "rebozos",
//     image: "./assets/Rebozos/Blanco.jpg",
//     price: 160,
//   },
//   {
//     id: 47,
//     name: "Rebozo Claro con puntos",
//     category: "rebozos",
//     image: "./assets/Rebozos/Claropuntos.jpg",
//     price: 160,
//   },
//   {
//     id: 48,
//     name: "Rebozo crema",
//     category: "rebozos",
//     image: "./assets/Rebozos/Crema.jpg",
//     price: 160,
//   },
//   {
//     id: 49,
//     name: "Rebozo lila",
//     category: "rebozos",
//     image: "./assets/Rebozos/Lila.jpg",
//     price: 160,
//   },
//   {
//     id: 50,
//     name: "Rebozo negro",
//     category: "rebozos",
//     image: "./assets/Rebozos/negro.jpg",
//     price: 160,
//   },
//   {
//     id: 51,
//     name: "Rebozo rosa",
//     category: "rebozos",
//     image: "./assets/Rebozos/Rosa.jpg",
//     price: 160,
//   },
//   {
//     id: 52,
//     name: "Rebozo verde",
//     category: "rebozos",
//     image: "./assets/Rebozos/verde.jpg",
//     price: 160,
//   },
// ];

// let users = [

//   {
//     id: 1,
//     name: "jorge",
//     mail: "j@j.com",
//   },
//   {
//     id: 2,
//     name: "hernan",
//     mail: "h@h.com",
//   },
//]
module.exports = {
  getProducts
}