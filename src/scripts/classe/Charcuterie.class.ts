import { Aliment, ALIMENT_TYPES } from "./Aliment.class";
import { AlimentMauvais } from "./Aliment.mauvais.class";

export class Charcuterie extends AlimentMauvais{

  public static ALL:Charcuterie[] = [];

  constructor(
    nom:string,
    nbCalories: number,
    nbLipides: number,
    nbGlucides: number,
    nbProteines: number,
    image: string
 ){
    super(nom, ALIMENT_TYPES.CHARCUTERIE, nbCalories, nbLipides, nbGlucides, nbProteines, image);
    Charcuterie.ALL.push(this);
  }

  public afficher(this:Aliment):void{
    console.log("Nom : ", this.getNom());
    console.log("Type: ", this.getType());
    super.afficherValeurNutritive();
  }

}