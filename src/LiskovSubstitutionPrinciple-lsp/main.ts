/*
Liskov substitution principle (Príncipio da substituição de Liskov) - Se ϕ(x)
é uma propriedade demonstrável dos objetos x de tipo T. Então ϕ(y) deve ser
verdadeiro para objetos y de tipo S onde S é um subtipo de T.

Mais simples: Subtipos precisam ser substituíveis por seus tipos de base
Mais simples ainda: Se o meu programa espera um Aanimal, algo do tpo Cachorro
(que herda de animal) deve ser como qualquer outro Animal.
*/
import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { TenPercentDiscount } from './classes/discount';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
// const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(tenPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();

const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Macbook air m1', 5300));
shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Caderno', 9.9));
shoppingCart.addItem(new Product('Caneca', 15.99));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
