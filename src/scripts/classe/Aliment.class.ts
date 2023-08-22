export abstract class Aliment {

  public static ALL:Aliment[] = [];
  public static ALL_GOOD:Aliment[] = [];
  public static ALL_AVERAGE:Aliment[] = [];
  public static ALL_BAD:Aliment[] = [];

  constructor(
    private readonly nom:string,
    private readonly type: Type_Aliment,
    private qualite: CLASSE_ALIMENT,
    private readonly nbCalories: number,
    private readonly nbLipides: number,
    private readonly nbGlucides: number,
    private readonly nbProteines: number,
    private image: string
    ) {
      Aliment.ALL.push(this);
  }

  protected abstract afficher():void;

  protected afficherValeurNutritive(this:Aliment):void{
    console.log("lipides: ", this.nbLipides);
    console.log("glucides: ", this.nbGlucides);
    console.log("proteines: ", this.nbProteines);
  }

  public getNom():string {return this.nom }

  public getType():Type_Aliment {return this.type }

  public getQualite():CLASSE_ALIMENT {return this.qualite}
  public setQualite(qualite:CLASSE_ALIMENT):Aliment{
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

export enum CLASSE_ALIMENT {
  BONNE="A", 
  MOYENNE="B", 
  MAUVAISE="C", 
  TOUTES="-"
}

export function getClasseAliment(value: string): CLASSE_ALIMENT {
  if (value === "A") {
      return CLASSE_ALIMENT.BONNE;
  } else if (value === "B") {
      return CLASSE_ALIMENT.MOYENNE;
  } else if (value === "C") {
      return CLASSE_ALIMENT.MAUVAISE;
  } else {
      return CLASSE_ALIMENT.TOUTES;
  }
}

export interface Type_Aliment {
  label: string;
  value: string;
}

// ENUM EVOLUES
export const ALIMENT_TYPES: Readonly <{
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

export const getAlimentTypesFromValue = (val:string) : Type_Aliment => {
    return Object.values(ALIMENT_TYPES)
      .filter(type => type.value === val)
      .reduce((obj, val) => val, {} as Type_Aliment);
}

console.log("getAlimentTypesFromValue = ", getAlimentTypesFromValue("FRUIT"));