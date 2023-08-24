import '../sass/main.scss';

import IMG_CREVETTE from "../images/crevette.png";
import IMG_POIRE from "../images/poire.png";
import IMG_POMME from '../images/pomme.png';
import IMG_POMME_DE_TERRE from "../images/potatoes.png";
import IMG_SALAMI from "../images/salami.png";

import { Aliment, ALIMENT_CATEGORIES, ALIMENT_QUALITY, getAlimentCategoryFromValue, getClasseAliment, Type_Aliment } from './classe/Aliment.class';
import { AlimentBuilder } from './classe/AlimentBuilder.class';
import { Fruit } from './classe/Fruit.class';
import { Charcuterie } from './classe/Charcuterie.class';

const tableFoods = document.querySelector("#foods-table") as HTMLTableElement;
const tBodyFoods = tableFoods.querySelector("#foods-body") as HTMLTableSectionElement;
const selectQuality = document.querySelector("#quality") as HTMLSelectElement;
const selectAlimentType = document.querySelector("#type-aliments") as HTMLSelectElement;

type Option = {
  value: string;
  label: string;
}

const options:Option[] =[];
options.push({label:'Toutes', value:ALIMENT_QUALITY.TOUTES});
options.push({label:'Bon', value:ALIMENT_QUALITY.BONNE});
options.push({label:'Moyen', value:ALIMENT_QUALITY.MOYENNE});
options.push({label:'Mauvais', value:ALIMENT_QUALITY.MAUVAISE});

options.forEach(o => addOption(o, selectQuality));
selectQuality.addEventListener('change', (e:Event) => {
  const target = e.target as HTMLSelectElement;
  buildTableFromQuality(getClasseAliment(target.value));
});

addOption({'label': 'Toutes', 'value': '-'}, selectAlimentType);
Object.values(ALIMENT_CATEGORIES).forEach((ALIMENT_TYPE, index) => {
  addOption({'label': ALIMENT_TYPE.label, 'value': ALIMENT_TYPE.value}, selectAlimentType);
});
selectAlimentType.addEventListener('change', (e:Event) => {
  const target = e.target as HTMLSelectElement;
  console.log("target = ", typeof(target.value));
  buildTableFromCategory(getAlimentCategoryFromValue(target.value));
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

function buildTableFromCategory(category:Type_Aliment){
  tBodyFoods.innerHTML = "";
  AlimentBuilder.list(category).forEach(a => addRow(a, tBodyFoods));;
}

function buildTableFromQuality(quality:ALIMENT_QUALITY):void {
  tBodyFoods.innerHTML = "";
  AlimentBuilder.listQuality(quality).forEach(a => addRow(a, tBodyFoods));
};

AlimentBuilder.buildAll([
  [ALIMENT_CATEGORIES.FRUIT, ["Pomme", 0, 0.2, 14, 0.3, IMG_POMME]],
  [ALIMENT_CATEGORIES.FRUIT, ["Poire", 0, 0.1, 15, 0.4, IMG_POIRE]],
  [ALIMENT_CATEGORIES.CHARCUTERIE, ["Salami", 0, 26.5, 1.3, 12, IMG_SALAMI]],
  [ALIMENT_CATEGORIES.LEGUME, ["Pomme de terre", 0, 0.5, 20, 0.8, IMG_POMME_DE_TERRE]],
  [ALIMENT_CATEGORIES.FRUITS_DE_MER, ["Crevettes", 0, 0.5, 10, 0.7, IMG_CREVETTE]]
]);

buildTableFromQuality(ALIMENT_QUALITY.TOUTES);

console.log("Aliments:", AlimentBuilder.listAll());
console.log("Charcuterie:", AlimentBuilder.list(ALIMENT_CATEGORIES.CHARCUTERIE));
console.log("Fruits:", AlimentBuilder.list(ALIMENT_CATEGORIES.FRUIT));

