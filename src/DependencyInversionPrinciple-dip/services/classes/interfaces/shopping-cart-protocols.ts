import { CartItemProtocol } from './cartItem-protocol';

export interface ShoppingCartProtocol {
  items: Readonly<CartItemProtocol[]>;

  addItem(item: CartItemProtocol): void;

  removeItem(index: number): void;

  total(): number;

  totalWithDiscount(): number;

  isEmpty(): boolean;

  clear(): void;
}
