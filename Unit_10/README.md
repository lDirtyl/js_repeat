### Задача 1. Акаунт користувача

> ❗ Виконуй це завдання у файлі `task-1.js`

Перед звільненням розробник зламав вихідний код управління акаунтами
користувачів нашого сервісу доставки їжі. Виконай рефакторинг методів об'єкта
`customer`, розставивши відсутні `this` під час звернення до властивостей
об'єкта.

---

Використай цей стартовий код і виконай рефакторинг. Після оголошення об'єкта ми
додали виклики методів. У консоль будуть виведені результати їх роботи. Будь
ласка, нічого там не змінюй.

```javascript
const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return balance;
  },
  getDiscount() {
    return discount;
  },
  setDiscount(value) {
    discount = value;
  },
  getOrders() {
    return orders;
  },
  addOrder(cost, order) {
    balance -= cost - cost * discount;
    orders.push(order);
  },
  // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
```

### Задача 2. Склад

> ❗ Виконуй це завдання у файлі `task-2.js`

Створи клас `Storage`, який створюватиме об'єкти для управління складом товарів.
Клас очікує лише один аргумент — початковий масив товарів, який записується до
створеного об'єкта в приватну властивість `items`.

Оголоси наступні методи класу:

`getItems()` — повертає масив поточних товарів у приватній властивості `items`.
`addItem(newItem)` — приймає новий товар `newItem` і додає його до масиву
товарів у приватну властивість `items` об'єкта. `removeItem(itemToRemove)` —
приймає рядок з назвою товару `itemToRemove` і видаляє його з масиву товарів у
приватній властивості `items` об'єкта.

---

Візьми код нижче з ініціалізацією екземпляра й викликами методів і встав його
після оголошення класу для перевірки коректності роботи. У консоль будуть
виведені результати їх роботи. Будь ласка, нічого там не змінюй.

```javascript
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
```

### Задача 3. Конструктор рядків

> ❗ Виконай це завдання у файлі `task-3.js`

Напиши клас `StringBuilder`, який приймає один параметр `initialValue` —
довільний рядок, який записується у приватну властивість value об'єкта, що
створюється.

Оголоси наступні методи класу:

- `getValue()` — повертає поточне значення приватної властивості `value`.
- `padEnd(str)` — отримує параметр `str` (рядок) і додає його в кінець значення
  приватної властивості `value` об'єкта, який викликає цей метод.
- `padStart(str)` — отримує параметр `str` (рядок) і додає його на початок
  значення приватної властивості `value` об'єкта, який викликає цей метод.
- `padBoth(str)` — отримує параметр `str` (рядок) і додає його на початок і в
  кінець значення приватної властивості `value` об'єкта, який викликає цей
  метод.

---

Візьми код нижче з ініціалізацією екземпляра й викликами методів і встав його
після оголошення класу для перевірки коректності роботи. У консоль будуть
виведені результати їх роботи. Будь ласка, нічого там не змінюй.

```javascript
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
```

### Задача 4. Загальний баланс

> ❗ Виконай це завдання у файлі `task-4.js`

Напиши стрілочну функцію `getTotalBalanceByGender(users, gender)`, яка
прийматиме два параметра:

- перший параметр `users` — масив об’єктів користувачів,
- другий параметр `gender` — рядок, що зберігає стать.

Функція має використовувати ланцюжок виклику методів та повертати загальний
баланс користувачів (властивість `balance`), стать яких (властивість `gender`)
збігається зі значенням параметра `gender`.

---

Візьми код нижче і встав після оголошення своєї функції для перевірки
коректності її роботи. У консоль будуть виведені результати її роботи.

```javascript
const clients = [
  {
    name: "Moore Hensley",
    gender: "male",
    balance: 2811,
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821,
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793,
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278,
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951,
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498,
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764,
  },
];

console.log(getTotalBalanceByGender(clients, "male")); // 12053

console.log(getTotalBalanceByGender(clients, "female")); // 8863
```
