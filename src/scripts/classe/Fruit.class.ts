import { AlimentBon } from "./Aliment.bon.class";
import { Aliment, ALIMENT_TYPES, CLASSE_ALIMENT } from "./Aliment.class"

export class Fruit extends AlimentBon {

  public static ALL:Fruit[] = [];

  constructor(
    nom:string,
    nbCalories: number,
    nbLipides: number,
    nbGlucides: number,
    nbProteines: number,
    image: string
 ){
    super(nom, ALIMENT_TYPES.FRUIT, nbCalories, nbLipides, nbGlucides, nbProteines, image);
    Fruit.ALL.push(this);
  }

  public afficher(this:Aliment):void{
    console.log("Nom : ", this.getNom());
    console.log("Type: ", this.getType());
    super.afficher();
  }

}