import { Basis } from "../lib";
import { MoneyTargetInterface } from "./interfaces";

class MoneyTargetsService {
  moneyTargets: MoneyTargetInterface[] = [
    {
      name: 'Home',
      amount: 1500000,
      basis: Basis.LIFETIME
    }
  ];

  add(stream: MoneyTargetInterface){
    this.moneyTargets.push(stream);
  }

  remove(streamName: string){
    this.moneyTargets
      .splice(
        this.moneyTargets.findIndex((value,i) => {
          if(value.name === streamName) 
            return i;
        }),1);
  }
}

export default new MoneyTargetsService();