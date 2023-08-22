import { Aliment, Type_Aliment, CLASSE_ALIMENT } from "./Aliment.class";

export abstract class AlimentMauvais extends Aliment {

  constructor(
    nom:string,
    type: Type_Aliment,
    nbCalories: number,
    nbLipides: number,
    nbGlucides: number,
    nbProteines: number,
    image: string
  ){
    super(nom, type, CLASSE_ALIMENT.MAUVAISE, nbCalories, nbLipides, nbGlucides, nbProteines, image);
    Aliment.ALL_BAD.push(this);
  }

  protected afficher(): void {
    console.log("Classe aliment : ", CLASSE_ALIMENT.BONNE);
    super.afficherValeurNutritive();
  }

}
