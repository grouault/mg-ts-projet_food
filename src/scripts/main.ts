import '../sass/main.scss'

import IMG_POMME from '../images/pomme.png';
import IMG_POIRE from "../images/poire.png";
import IMG_SALAMI from "../images/salami.png";
import IMG_SAUCISSON from "../images/saucisson.png";
import IMG_POMME_DE_TERRE from "../images/potatoes.png";
import IMG_CREVETTE from "../images/crevette.png";

import { Aliment, ALIMENT_TYPES, CLASSE_ALIMENT, getClasseAliment } from './classe/Aliment.class';
import { Charcuterie } from './classe/Charcuterie.class';
import { Fruit } from './classe/Fruit.class';
import { Legume } from './classe/Legume.class';
import { AlimentBuilder } from './classe/AlimentBuilder.class';

const tableFoods = document.querySelector("#foods-table") as HTMLTableElement;
const tBodyFoods = tableFoods.querySelector("#foods-body") as HTMLTableSectionElement;
const selectQuality = document.querySelector("#quality") as HTMLSelectElement;
const selectAlimentType = document.querySelector("#type-aliments") as HTMLSelectElement;

type Option = {
  value: string;
  label: string;
}

const options:Option[] =[];
options.push({label:'Toutes', value:CLASSE_ALIMENT.TOUTES});
options.push({label:'Bon', value:CLASSE_ALIMENT.BONNE});
options.push({label:'Moyen', value:CLASSE_ALIMENT.MOYENNE});
options.push({label:'Mauvais', value:CLASSE_ALIMENT.MAUVAISE});

options.forEach(o => addOption(o, selectQuality));
selectQuality.addEventListener('change', (e:Event) => {
  const target = e.target as HTMLSelectElement;
  buildTable(getClasseAliment(target.value));
});

Object.values(ALIMENT_TYPES).forEach((ALIMENT_TYPE, index) => {
  addOption({'label': ALIMENT_TYPE.label, 'value': ALIMENT_TYPE.value}, selectAlimentType);
});
selectAlimentType.addEventListener('change', (e:Event) => {
  const target = e.target as HTMLSelectElement;
  console.log("target = ", typeof(target.value));
  switch (target.value) {
    case ALIMENT_TYPES.CHARCUTERIE.value:
      console.log("charcuterie");
      break;
    case ALIMENT_TYPES.FRUIT.value:
      console.log("fruit");
      break;
    default:
      console.log("breakos");
      break;
  }
});


function addOption(option:Option, selector: HTMLSelectElement):void {
  const optionElement = document.createElement("option") as HTMLOptionElement;
  optionElement.value = `${option.value}`;
  optionElement.text = `${option.label}`
  selector.add(optionElement);
}

function addCellImg(cell:HTMLTableCellElement, pathImg:string):void {
  const image = document.createElement('img') as HTMLImageElement;
  image.classList.add("img-food");
  image.src = pathImg;
  cell.appendChild(image);
}

function addRow(newRow:Aliment, tBody:HTMLTableSectionElement):void {
  var bRow = tBody.insertRow();
  bRow.insertCell().innerHTML = newRow.getNom();
  bRow.insertCell().innerHTML = `${newRow.getNbLipides()}`;
  bRow.insertCell().innerHTML = `${newRow.getNbGlucides()}`;
  bRow.insertCell().innerHTML = `${newRow.getNbProteines()}`;
  bRow.insertCell().innerHTML = newRow.getQualite();
  const cell = bRow.insertCell();
  addCellImg(cell, newRow.getImage());
}

function buildTable(qualite:CLASSE_ALIMENT):void {
  tBodyFoods.innerHTML = "";
  switch (qualite) {
    case CLASSE_ALIMENT.TOUTES:
      Aliment.ALL.forEach(f => addRow(f, tBodyFoods));
      break;
    case CLASSE_ALIMENT.BONNE:
      Aliment.ALL_GOOD.forEach(f => addRow(f, tBodyFoods));
      break;
    case CLASSE_ALIMENT.MAUVAISE:
      Aliment.ALL_BAD.forEach(f => addRow(f, tBodyFoods));
      break;
    case CLASSE_ALIMENT.MOYENNE:
      Aliment.ALL_AVERAGE.forEach(f => addRow(f, tBodyFoods));
      break;
    default:
      tBodyFoods.innerHTML = "Pas de données";
      break;
  }

};

AlimentBuilder.buildAll([
  [ALIMENT_TYPES.FRUIT, ["Pomme", 0, 0.2, 14, 0.3, IMG_POMME]],
  [ALIMENT_TYPES.CHARCUTERIE, ["Poire", 0, 0.1, 15, 0.4, IMG_POIRE]],
  [ALIMENT_TYPES.CHARCUTERIE, ["Salami", 0, 26.5, 1.3, 12, IMG_SALAMI]],
  [ALIMENT_TYPES.LEGUME, ["Pomme de terre", 0, 0.5, 20, 0.8, IMG_POMME_DE_TERRE]],
  [ALIMENT_TYPES.FRUITS_DE_MER, ["Crevettes", 0, 0.5, 10, 0.7, IMG_CREVETTE]]
]);

buildTable(CLASSE_ALIMENT.TOUTES);

console.log("Aliments:", Aliment.ALL);
console.log("Charcuterie:", Charcuterie.ALL);
console.log("Fruits:", Fruit.ALL);

