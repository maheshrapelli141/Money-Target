import firebase from '../firebase';

// export interface Achievement{
//   name: string,
//   amount: number,
//   type: 'MONEY_TARGET' | 'INCENTIVE'
// };


export interface CashflowInterface {
  id: string;
  name: string;
  amount: number;
  acheived: string[],
  deleted: boolean;
}

class CashflowsService {
  // cashflows: CashflowInterface[] = [
  //   {
  //     name: 'Salary',
  //     amount: 25000,
  //     acheived: [
  //       {
  //         name: 'Home',
  //         amount: 10000,
  //         type: 'MONEY_TARGET'
  //       }
  //     ]
  //   }
  // ];

  cashflowsRef = firebase.firestore().collection('cashflows');

  async getAll(): Promise<CashflowInterface[]>{
    const querySnapshot = await this.cashflowsRef.where('deleted','==',false).get();
    return querySnapshot.docs.map(doc =>{
      const data = doc.data();
      return{
        id: doc.id,
        name: data.name,
        amount: data.amount,
        acheived: data.acheived,
        deleted: data.deleted,
      } as CashflowInterface;
    });
  }

  add(stream: CashflowInterface){
    return this.cashflowsRef.add(stream);
  }

  remove(id: string){
    this.cashflowsRef.doc(id).update({ deleted: true });
  }
}

export default new CashflowsService();