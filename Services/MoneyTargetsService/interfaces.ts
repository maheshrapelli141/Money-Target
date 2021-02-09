import { Basis } from "../lib";

export interface MoneyTargetInterface {
  id: string;
  name: string;
  amount: number;
  basis: Basis,
  deleted: boolean;
}