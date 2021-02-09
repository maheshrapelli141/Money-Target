import { Basis } from "../lib";
import firebase from '../firebase';


export interface IncomeStreamInterface {
  id: string;
  name: string;
  amount: number;
  basis: Basis;
  deleted: boolean;
}

class IncomeStreamsService {
  incomeStreamRef = firebase.firestore().collection('incomestreams');

  async getAll(): Promise<IncomeStreamInterface[]>{
    const querySnapshot = await this.incomeStreamRef.where('deleted','==',false).get();
    return querySnapshot.docs.map(doc =>{
      const data = doc.data();
      return{
        id: doc.id,
        name: data.name,
        amount: data.amount,
        basis: data.basis,
        deleted: data.deleted,
      };
    });
  }

  add(stream: IncomeStreamInterface){
    return this.incomeStreamRef.add(stream);
  }

  remove(id: string){
    this.incomeStreamRef.doc(id).update({ deleted: true });
  }
}

export default new IncomeStreamsService();