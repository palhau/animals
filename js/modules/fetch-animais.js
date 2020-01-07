import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  // Creates the div containing info about the total animals
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  // Fills each animal in the DOM
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  // Animate the numbers for each animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  // Pull the animals trough a json file
  // and creates each animal using 'createAnimal'
  async function criarAnimais() {
    try {
      // Fetch, awaits the answer and transforms into json
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      // After transforming the json, activates fuctions to fill and animate the numbers
      animaisJSON.forEach(animal => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
}
