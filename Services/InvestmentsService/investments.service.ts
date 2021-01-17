import { Basis } from "../lib";
import { InvestmentInterface } from "./interfaces";

class InvestmentsService {
  investments: InvestmentInterface[] = [
    {
      name: 'Wazirx',
      amount: 9000,
      basis: Basis.LIFETIME
    }
  ];

  add(stream: InvestmentInterface){
    this.investments.push(stream);
  }

  remove(streamName: string){
    this.investments
      .splice(
        this.investments.findIndex((value,i) => {
          if(value.name === streamName) 
            return i;
        }),1);
  }
}

export default new InvestmentsService();