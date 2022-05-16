import { ICart } from '../../pages/Dashboard/types';

export interface IPDFFile {
  cartItems: ICart[];
  totalPrice: number;
  quantityItems: number;
}
