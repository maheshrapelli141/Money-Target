import { Basis } from "../lib";

export interface IncomeStreamInterface {
  name: string;
  amount: number;
  basis: Basis
}

class IncomeStreamsService {
  incomeStreams: IncomeStreamInterface[] = [
    {
      name: 'Salary',
      amount: 25000,
      basis: Basis.MONTHLY
    }
  ];

  add(stream: IncomeStreamInterface){
    this.incomeStreams.push(stream);
  }

  remove(streamName: string){
    this.incomeStreams
      .splice(
        this.incomeStreams.findIndex((value,i) => {
          if(value.name === streamName) 
            return i;
        }),1);
  }
}

export default new IncomeStreamsService();