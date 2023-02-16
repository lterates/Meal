const MassaBolonhesa = ["Massa", "Cenoura", "Soja Fina", "Molho de Tomate"];
const AlmondegasMassa = ["Massa", "Almondegas de Soja", "Molho de Tomate"];
const Chili = ["Arroz", "Cenoura", "Milho", "Molho de Tomate", "Soja Grossa", "Pimentos", "Feijão Preto"];
const GnocchiPestoTomate = ["Batata", "Manjericão", "Pinhões ou outro tipo de Noz", "Ovos", "Molho de Tomate"];
const douradinhos = ["Literalmente só Douradinhos"];

let mealBtn = document.getElementById("meal-btn");
let results = document.getElementById("meal");
function randomIntFromInterval(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function getMeal() {
  let random = randomIntFromInterval(1, 5);
  results.style.visibility = "visible";
  results.style.opacity = "1";

  switch (random) {
    case 1:
      results.innerHTML = "<h2>Massa à Bolonhesa</h2>";
      MassaBolonhesa.forEach( element => results.innerHTML += "<p>"+ element +"</p>");
      break;

    case 2:
      results.innerHTML = "<h2>Almondegas Veggie com Massa</h2>";
      AlmondegasMassa.forEach( element => results.innerHTML += "<p>"+ element +"</p>");
      break;

    case 3:
      results.innerHTML = "<h2>Chili</h2>";
      Chili.forEach( element => results.innerHTML += "<p>"+ element +"</p>");
      break;

    case 4:
      results.innerHTML = "<h2>Gnocchi com Molho de Tomate e Pesto</h2>";
      GnocchiPestoTomate.forEach( element => results.innerHTML += "<p>"+ element +"</p>");
      break;
    
    case 5:
      results.innerHTML = "<h2>Douradinhos</h2>";
      douradinhos.forEach( element => results.innerHTML += "<p>"+ element +"</p>");
      break;
  }
}

mealBtn.addEventListener("click", getMeal);