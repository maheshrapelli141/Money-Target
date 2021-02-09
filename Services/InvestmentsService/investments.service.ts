import { Basis } from "../lib";
import { InvestmentInterface } from "./interfaces";
import firebase from '../firebase';

class InvestmentsService {
  investmentsRef = firebase.firestore().collection('investments');

  async getAll(): Promise<InvestmentInterface[]>{
    const querySnapshot = await this.investmentsRef.where('deleted','==',false).get();
    return querySnapshot.docs.map(doc =>{
      const data = doc.data();
      return{
        id: doc.id,
        name: data.name,
        amount: data.amount,
        basis: data.basis,
        deleted: data.deleted,
      } as InvestmentInterface;
    });
  }

  async add(stream: InvestmentInterface){
    return await this.investmentsRef.add(stream);
  }

  async remove(id: string){
    return await this.investmentsRef.doc(id).update({ deleted: true });
  }
}

export default new InvestmentsService();