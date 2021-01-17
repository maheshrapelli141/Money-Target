
interface Achievement{
  name: string,
  amount: number,
  type: 'MONEY_TARGET' | 'INCENTIVE'
};


interface CashflowInterface {
  name: string;
  amount: number;
  acheived: Achievement[]
}

class CashflowsService {
  cashflows: CashflowInterface[] = [
    {
      name: 'Salary',
      amount: 25000,
      acheived: [
        {
          name: 'Home',
          amount: 10000,
          type: 'MONEY_TARGET'
        }
      ]
    }
  ];

  add(stream: CashflowInterface){
    this.cashflows.push(stream);
  }

  remove(streamName: string){
    this.cashflows
      .splice(
        this.cashflows.findIndex((value,i) => {
          if(value.name === streamName) 
            return i;
        }),1);
  }
}

export default new CashflowsService();