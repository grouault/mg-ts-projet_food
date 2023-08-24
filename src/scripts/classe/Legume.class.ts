import { Aliment, ALIMENT_CATEGORIES, ALIMENT_QUALITY } from "./Aliment.class";

export class Legume extends Aliment {

  constructor(
    nom:string,
    nbCalories: number,
    nbLipides: number,
    nbGlucides: number,
    nbProteines: number,
    image: string
 ){
    super(nom, ALIMENT_CATEGORIES.LEGUME, ALIMENT_QUALITY.BONNE, nbCalories, nbLipides, nbGlucides, nbProteines, image);
  }

  public afficher(this:Aliment):void{
    console.log("Nom : ", this.getNom());
    console.log("Type: ", this.getType());
    console.log("Qualite : ", this.getQualite())
    super.afficherValeurNutritive();
  }

}