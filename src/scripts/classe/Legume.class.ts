import { AlimentBon } from "./Aliment.bon.class";
import { Aliment, ALIMENT_TYPES } from "./Aliment.class";

export class Legume extends AlimentBon {

  public static ALL:Legume[] = [];

  constructor(
    nom:string,
    nbCalories: number,
    nbLipides: number,
    nbGlucides: number,
    nbProteines: number,
    image: string
 ){
    super(nom, ALIMENT_TYPES.LEGUME, nbCalories, nbLipides, nbGlucides, nbProteines, image);
    Legume.ALL.push(this);
  }

  public afficher(this:Aliment):void{
    console.log("Nom : ", this.getNom());
    console.log("Type: ", this.getType());
    super.afficher();
  }

}