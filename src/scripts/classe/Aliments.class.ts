import { Aliment } from "./Aliment.class";

export class Aliments<T extends Aliment> {

  private list:T[];

  constructor(){
    this.list = new Array<T>();
  }

  public add(aliment:T) : Aliments<T> {
    this.list.push(aliment);
    return this;
  }

  public get() : Readonly<T[]> {
    return this.list;
  }

}