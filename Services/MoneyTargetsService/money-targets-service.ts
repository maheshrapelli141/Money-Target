import { Basis } from "../lib";
import { MoneyTargetInterface } from "./interfaces";
import firebase from '../firebase';

class MoneyTargetsService {
  moneyTargetsRef = firebase.firestore().collection('moneytargets');

  async getAll(){
    const querySnapshot = await this.moneyTargetsRef.where('deleted','==',false).get();
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        name: data.name,
        amount: data.amount,
        basis: data.basis,
        deleted: data.deleted
      }
    });
  }

  async add(stream: MoneyTargetInterface){
    return await this.moneyTargetsRef.add(stream);
  }

  remove(id: string){
    this.moneyTargetsRef.doc(id).update({ deleted: true });
  }
}

export default new MoneyTargetsService();