// uma class coesa, é quando nós usamos os atributos em todos os métodos.

import { Discount } from './discount';
import { CartItemProtocol } from './interfaces/cartItem-protocol';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocols';

export class ShoppingCartLow implements ShoppingCartProtocol {
  private readonly _items: CartItemProtocol[] = [];

  constructor(private readonly discount: Discount) {}

  addItem(item: CartItemProtocol): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItemProtocol[]> {
    return this._items;
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  totalWithDiscount(): number {
    return this.discount.calculate(this.total());
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo...');
    this._items.length = 0;
  }
}
