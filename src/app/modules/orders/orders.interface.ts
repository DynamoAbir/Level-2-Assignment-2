export interface IOrders {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: IVariant[];
  inventory: {
    quantiry: number;
    inStock: boolean;
  };
}

export interface IVariant {
  type: string;
  value: string;
}
