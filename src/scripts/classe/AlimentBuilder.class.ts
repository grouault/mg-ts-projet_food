import { ALIMENT_CATEGORIES, Aliment, ALIMENT_QUALITY, Type_Aliment } from "./Aliment.class";
import { Aliments } from "./Aliments.class";
import { Charcuterie } from "./Charcuterie.class";
import { Fruit } from "./Fruit.class";
import { FruitDeMer } from "./FruitDeMer.class";
import { Legume } from "./Legume.class";

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

export class AlimentBuilder {

  private static ALL = new Aliments<Aliment>();
  private static QUALITY_GOOD = new Aliments<Aliment>();
  private static QUALITY_BAD = new Aliments<Aliment>();
  private static QUALITY_AVERAGE = new Aliments<Aliment>();

  private static FRUITS = new Aliments<Fruit>();
  private static LEGUMES = new Aliments<Legume>();
  private static CHARCUTERIES = new Aliments<Charcuterie>();
  private static FRUITS_DE_MER = new Aliments<FruitDeMer>();

  public static listAll():Readonly<Aliment[]> {
    return this.ALL.get();
  }

  public static list(category:Type_Aliment):Readonly<Aliment[]> {
    let aliments:Readonly<Aliment[]> = null;
    switch (category) {
      case ALIMENT_CATEGORIES.FRUIT:
        aliments = this.FRUITS.get();
        break;
      case ALIMENT_CATEGORIES.LEGUME:
        aliments = this.LEGUMES.get();
        break;
      case ALIMENT_CATEGORIES.CHARCUTERIE:
        aliments = this.CHARCUTERIES.get();
        break;
      case ALIMENT_CATEGORIES.FRUITS_DE_MER:
        aliments = this.FRUITS_DE_MER.get();
        break;
      default:
        aliments = this.listAll()
        break;
    }
    return aliments;
  }

  public static listQuality(quality:ALIMENT_QUALITY):Readonly<Aliment[]> {
    let aliments:Readonly<Aliment[]> = null;

    switch (quality) {
      case ALIMENT_QUALITY.BONNE:
        aliments = this.QUALITY_GOOD.get();
        break;
      case ALIMENT_QUALITY.MAUVAISE:
        aliments = this.QUALITY_BAD.get();
        break;
      case ALIMENT_QUALITY.MOYENNE:
        aliments = this.QUALITY_AVERAGE.get();
        break;
      default:
        aliments = this.listAll()
        break;
    }

    return aliments;
  }

  public static buildAll(aliments:[Type_Aliment,[string, number, number, number, number, string]][]) {
    aliments.forEach(a => this.build(a[0], a[1]));
  }

  public static build(type:Type_Aliment, tAliment: [string, number, number, number, number, string]) : void {
    let current:Aliment = null;
    const {nom, nbCalories, nbLipides, nbGlucides, nbProteines, image} = buildFromTuple(tAliment);
    switch (type) {
      case ALIMENT_CATEGORIES.FRUIT:
        current = new Fruit(nom, nbCalories, nbLipides, nbGlucides, nbProteines, image);
        this.FRUITS.add(current as Fruit);
        break;
      case ALIMENT_CATEGORIES.CHARCUTERIE:
        current = new Charcuterie(nom, nbCalories, nbLipides, nbGlucides, nbProteines, image);
        this.CHARCUTERIES.add(current as Charcuterie);
        break;
      case ALIMENT_CATEGORIES.LEGUME:
        current = new Legume(nom, nbCalories, nbLipides, nbGlucides, nbProteines, image);
        this.LEGUMES.add(current as Legume);
        break;
      case ALIMENT_CATEGORIES.FRUITS_DE_MER:
        current = new FruitDeMer(nom, nbCalories, nbLipides, nbGlucides, nbProteines, image);
        this.FRUITS_DE_MER.add(current as FruitDeMer);
        break;
      default:
        console.log(`Not implemented yet : ${type.label}`);
        break;
    }
    current && this.addToGlobalList(current);
  }

  protected static addToGlobalList (aliment:Aliment) : void {
    this.ALL.add(aliment);
    switch (aliment.getQualite()) {
      case ALIMENT_QUALITY.BONNE:
        this.QUALITY_GOOD.add(aliment);
        break;
      case ALIMENT_QUALITY.MAUVAISE:
        this.QUALITY_BAD.add(aliment);
        break;
      case ALIMENT_QUALITY.MOYENNE:
        this.QUALITY_AVERAGE.add(aliment);
        break;
      default:
        break;
    }
  }

}