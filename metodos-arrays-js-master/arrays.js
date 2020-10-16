//Ejercicio 1

let cities = ["miami", "barcelona", "madrid"];

const capCities = cities.map((element)=> element.charAt(0).toUpperCase()+ element.slice(1));

console.log(capCities);

//Ejercicio 2


let  students = [
  {
  name: "Tony Parker",
  firstProject: 80,
  secondProject: 75,
  finalExam: 90
  },
  {
  name: "Marc Barchini",
  firstProject: 84,
  secondProject: 65,
  finalExam: 65
  },
  {
  name: "Claudia Lopez",
  firstProject: 45,
  secondProject: 95,
  finalExam: 99
  },
  {
  name: "Alvaro Briattore",
  firstProject: 82,
  secondProject: 92,
  finalExam: 70
  },
  {
  name: "Isabel Ortega",
  firstProject: 90,
  secondProject: 32,
  finalExam: 85
  },
  {
  name: "Francisco Martinez",
  firstProject: 90,
  secondProject: 55,
  finalExam: 78
  },
  {
  name: "Jorge Carrillo",
  firstProject: 83,
  secondProject: 77,
  finalExam: 90
  },
  {
  name: "Miguel López",
  firstProject: 80,
  secondProject: 75,
  finalExam: 75
  },
  {
  name: "Carolina Perez",
  firstProject: 85,
  secondProject: 72,
  finalExam: 67
  },
  {
  name: "Ruben Pardo",
  firstProject: 89,
  secondProject: 72,
  finalExam: 65
  }
]



const notasFinales = students.map((element) => {
  let proyectosMedia = (element.firstProject + element.secondProject)/2;
  let notaFinal  = element.finalExam*0.6 + proyectosMedia*0.4;
  return {
    name: element.name,
    finalGrade: Math.round(notaFinal)
  };
})

console.log(notasFinales);


//Ejercicio 3

let menu = [
  { name: "Carrots", calories: 150 },
  { name: "Steak", calories: 350 },
  { name: "Broccoli", calories: 120 },
  { name: "Chicken", calories: 250 },
  { name: "Pizza", calories: 520 }
];

const caloriasMedia = menu.reduce((total, element) => total + element.calories, 0) / menu.length;

console.log(caloriasMedia);

//Ejercicio 4

let product = {
  name: "JIM'S STORE 2 Bobina 10W Cargador Inalámbrico Titular Anti-Deslizamiento Diseño",
  price: 15.69,
  manufacturer: "JIM'S STORE",
  reviews:
  [
    {  user: "Pavel Nedved",
      comments: "Muy contento",
      rate: 4
    },
    {  user: "Alvaro Trezeguet",
      comments: "No tiene carga rápida",
      rate: 1
    },
    {  user: "David Recoba",
      comments: "Excelente relación calidad/precio.",
      rate: 5
    },
    {  user: "Maribel Romero",
      comments: "Pocas prestaciones",
      rate: 2
    },
    {  user: "Antonio Cano",
      comments: "Materiales malos",
      rate: 1
    },
  ]
}

const notaMediaProducto = product.reviews.reduce( (total, curValue) => total + curValue.rate, 0) / product.reviews.length;

console.log(notaMediaProducto);


const starPercentage = (notaMediaProducto / 5) * 100;
const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
document.getElementsByClassName("stars-inner")[0].style.width = starPercentageRounded;
