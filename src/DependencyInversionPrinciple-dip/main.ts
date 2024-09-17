/*
Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem
depender de abstrações.
Dependa de abstrações, não de implementações.
Abstrações não devem depender de detalher. Detalhes devem depender de abstraçõe
s.

Classes de baixo nívels são classes que executam tarefas (os detalhes)
Classes de alto nível são classes que gerenciam as classes de baixo nível.
*/
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';

import { Order } from './services/classes/order';
import { TenPercentDiscount } from './services/classes/discount';
import { ShoppingCartLow } from './services/classes/shopping-cart';
import { IndividualCustomer } from './services/classes/customer';
import { Product } from './services/classes/product';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
// const noDiscount = new NoDiscount();
const shoppingCartLow = new ShoppingCartLow(tenPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const individualCustomer = new IndividualCustomer(
  'Matheus',
  'Lopes',
  '672.432.654-98',
);

const order = new Order(
  shoppingCartLow,
  messaging,
  persistency,
  individualCustomer,
);

shoppingCartLow.addItem(new Product('Macbook air m1', 5300));
shoppingCartLow.addItem(new Product('Camiseta', 49.9));
shoppingCartLow.addItem(new Product('Caderno', 9.9));
shoppingCartLow.addItem(new Product('Caneca', 15.99));

console.log(shoppingCartLow.items);
console.log(shoppingCartLow.total());
console.log(shoppingCartLow.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
