export interface Fruit {
  id: string;
  name: string;
  unityPrice: number;
  image: string;
}

export interface ICart extends Fruit {
  quantity: number;
}
