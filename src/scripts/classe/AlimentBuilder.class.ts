import { ALIMENT_TYPES, Aliment, Type_Aliment } from "./Aliment.class";
import { Charcuterie } from "./Charcuterie.class";
import { Fruit } from "./Fruit.class";
import { Legume } from "./Legume.class";

import IMG_POMME from '../../images/pomme.png';
import IMG_POIRE from "../../images/poire.png";
import IMG_SALAMI from "../../images/salami.png";
import IMG_SAUCISSON from "../../images/saucisson.png";
import IMG_POMME_DE_TERRE from "../../images/potatoes.png";
import IMG_CREVETTE from "../../images/crevette.png";

export interface IAliment {
  nom: string;
  nbCalories: number;
  nbLipides: number;
  nbGlucides: number;
  nbProteines: number;
  image:string;
}

// build IAliment from tuple
// tuple: [nom, nbCalories, nbGlucides, nbLipides, nbProteines, image]
export function buildFromTuple(tupleAliment:[string, number, number, number, number, string]) : IAliment {
  return {
    nom: tupleAliment[0], 
    nbCalories: tupleAliment[1], 
    nbGlucides: tupleAliment[2], 
    nbLipides: tupleAliment[3], 
    nbProteines: tupleAliment[4], 
    image: tupleAliment[5] 
  }
}

export class AlimentBuilder<T extends Aliment> {

  public static buildAll(aliments:[Type_Aliment,[string, number, number, number, number, string]][]) {
    aliments.forEach(a => this.build(a[0], a[1]));
  }

  public static build(type:Type_Aliment, tAliment: [string, number, number, number, number, string]) : void {
    const {nom, nbCalories, nbLipides, nbGlucides, nbProteines, image} = buildFromTuple(tAliment);
    switch (type) {
      case ALIMENT_TYPES.FRUIT:
        new Fruit(nom, nbCalories, nbLipides, nbGlucides, nbProteines, image);
        break;
      case ALIMENT_TYPES.CHARCUTERIE:
        new Charcuterie(nom, nbCalories, nbLipides, nbGlucides, nbProteines, image);
        break;
      case ALIMENT_TYPES.LEGUME:
        new Legume(nom, nbCalories, nbLipides, nbGlucides, nbProteines, image);
        break;
      default:
        console.log(`Not implemented yet : ${type.label}`);
        break;
    }
  }

}