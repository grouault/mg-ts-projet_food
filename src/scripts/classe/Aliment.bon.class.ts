import { Aliment, CLASSE_ALIMENT, Type_Aliment } from "./Aliment.class";

export abstract class AlimentBon extends Aliment {

  constructor(
    nom:string,
    type: Type_Aliment,
    nbCalories: number,
    nbLipides: number,
    nbGlucides: number,
    nbProteines: number,
    image: string
  ){
    super(nom, type, CLASSE_ALIMENT.BONNE, nbCalories, nbLipides, nbGlucides, nbProteines, image);
    Aliment.ALL_GOOD.push(this);
  }

  protected afficher(): void {
    console.log("Classe aliment : ", CLASSE_ALIMENT.BONNE);
    super.afficherValeurNutritive();
  }

}