import { ALIMENT_CATEGORIES, Aliment, ALIMENT_QUALITY } from "./Aliment.class";

export class FruitDeMer extends Aliment {

  constructor(
    nom:string,
    nbCalories: number,
    nbLipides: number,
    nbGlucides: number,
    nbProteines: number,
    image: string
 ){
    super(
      nom, 
      ALIMENT_CATEGORIES.FRUITS_DE_MER, 
      ALIMENT_QUALITY.MOYENNE, 
      nbCalories, nbLipides, nbGlucides, nbProteines, 
      image);
  }

  public afficher(this:Aliment):void{
    console.log("Nom : ", this.getNom());
    console.log("Type: ", this.getType());
    console.log("Classe : ", this.getQualite());
    super.afficherValeurNutritive();
  }
  
}