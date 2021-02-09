import { Basis } from "../lib";

export interface InvestmentInterface {
  id: string;
  name: string;
  amount: number;
  basis: Basis;
  deleted: boolean;
}