export interface IProduct {
  _id?: string;
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: IVariant[];
  inventory: {
    quantity: number;
    inStock: boolean;
  };
}

export interface IVariant {
  type: string;
  value: string;
}
