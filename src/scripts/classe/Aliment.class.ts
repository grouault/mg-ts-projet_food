export abstract class Aliment {

  constructor(
    private readonly nom:string,
    private readonly type: Type_Aliment,
    private qualite: ALIMENT_QUALITY,
    private readonly nbCalories: number,
    private readonly nbLipides: number,
    private readonly nbGlucides: number,
    private readonly nbProteines: number,
    private image: string
    ) {}

  protected abstract afficher():void;

  protected afficherValeurNutritive(this:Aliment):void{
    console.log("lipides: ", this.nbLipides);
    console.log("glucides: ", this.nbGlucides);
    console.log("proteines: ", this.nbProteines);
  }

  public getNom():string {return this.nom }

  public getType():Type_Aliment {return this.type }

  public getQualite():ALIMENT_QUALITY {return this.qualite}
  public setQualite(qualite:ALIMENT_QUALITY):Aliment{
    this.qualite = qualite;
    return this;
  }

  public getNbCalories():number {return this.nbCalories }

  public getNbLipides():number {return this.nbLipides }

  public getNbGlucides():number {return this.nbGlucides }

  public getNbProteines():number {return this.nbProteines }

  public getImage():string {return this.image}
  public setImage(image:string):Aliment{
    this.image = image;
    return this;
  }

}

export enum ALIMENT_QUALITY {
  BONNE="A", 
  MOYENNE="B", 
  MAUVAISE="C", 
  TOUTES="-"
}

export function getClasseAliment(value: string): ALIMENT_QUALITY {
  if (value === "A") {
      return ALIMENT_QUALITY.BONNE;
  } else if (value === "B") {
      return ALIMENT_QUALITY.MOYENNE;
  } else if (value === "C") {
      return ALIMENT_QUALITY.MAUVAISE;
  } else {
      return ALIMENT_QUALITY.TOUTES;
  }
}

export interface Type_Aliment {
  label: string;
  value: string;
}

// ENUM EVOLUES
export const ALIMENT_CATEGORIES: Readonly <{
   FRUIT: Readonly<Type_Aliment>;
   LEGUME: Readonly<Type_Aliment>;
   CHARCUTERIE: Readonly<Type_Aliment>;
   VIANDE: Readonly<Type_Aliment>;
   PRODUITS_LAITIERS: Readonly<Type_Aliment>;
   PRODUITS_CEREALIERS: Readonly<Type_Aliment>;
   PRODUITS_SCURES: Readonly<Type_Aliment>;
   MATIERE_GRASSE: Readonly<Type_Aliment>;
   POISSON: Readonly<Type_Aliment>;
   FRUITS_DE_MER: Readonly<Type_Aliment>;
}> = {
  FRUIT: {label: "fruit", value: "FRUIT"},
  LEGUME: {label: "légume", value: "LEGUME"},
  CHARCUTERIE: {label: "charcuterie", value: "CHARCUTERIE"},
  VIANDE: {label: "viande", value: "VIANDE"},
  PRODUITS_LAITIERS: {label: "produits laitiers", value: "PRODUITS LAITIERS"},
  PRODUITS_CEREALIERS: {label: "produits céréaliers", value: "PRODUITS CEREALIERS"},
  PRODUITS_SCURES: {label: "produits sucrés", value: "PRODUITS SUCRES"},
  MATIERE_GRASSE: {label: "matière grasse", value: "MATIERE GRASSE"},
  POISSON: {label:  "poisson", value: "POISSON"},
  FRUITS_DE_MER: {label: "fruits de mer", value: "FRUITS DE MER"}
}

export const getAlimentCategoryFromValue = (val:string) : Type_Aliment => {
    return Object.values(ALIMENT_CATEGORIES)
      .filter(type => type.value === val)
      .reduce((obj, val) => val, {} as Type_Aliment);
}

