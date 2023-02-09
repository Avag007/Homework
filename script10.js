// 1. Create an Author class and a Book class.
class Autor {
  constructor(name, mail, gender) {
    (this.name = name), (this.mail = mail), (this.gander = gender);
  }
  toString() {
    return `This is ${this.name}-s book`;
  }
  get Name() {
    return this.name;
  }
  set Mail(val) {
    return (this.mail = val);
  }
}
class Book extends Autor {
  constructor(title, price, quantity) {
    super("viktor", "viktor@gmail.com", "mail");
    this.title = title;
    this.price = price;
    this.quantity = quantity;
  }
  get Title() {
    return this.title;
  }
  set Title(val) {
    return (this.title = val);
  }
  toString() {
    return `this is ${this.title}-s book`;
  }
  getProfit() {
    return `Your profit is ${this.price * this.quantity}$`;
  }
}
const book = new Book("animae0", 2500, 100);

console.log(book);

// 2. Create an Account class. Account should have: id, name, balance.

class Accaunt {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
    this.id = Date.now();
  }
  get Name() {
    return this.name;
  }
  get Balance() {
    return this.balance;
  }
  get Id() {
    return this.id;
  }
  set _Name(val) {
    return (this.name = val);
  }
  set _Balance(val) {
    return (this.balance = val);
  }
  credit(amount) {
    this.balance += amount;
    return this.balance;
  }
  debit(amount) {
    if (amount <= this.balance) this.balance -= amount;
    else return "Amount exceeded balance";
  }
  transferTo(anotherAccount, amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      anotherAccount.balance += amount;
    } else {
      return "Amount exceeded balance";
    }
  }
  static identifyAccounts(accountFirst, accountSecond) {
    if (accountFirst.id === accountSecond.id) {
      return true;
    } else {
      return false;
    }
  }
  toString() {
    return `This account name is ${this.name}, and on heve ${this.balance} money on his balance`;
  }
}
const accaunt = new Accaunt("Armen", 1600.25);

console.log(account);

// 3 Write classes: Person, Student, Staff.

class Person {
  constructor(firstName, lastName, gender, age) {
    this.age = age;
    this.lastName = lastName;
    this.gender = gender;
    this.firstName = firstName;
  }
  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this._lastName = value;
  }

  get gender() {
    return this._gender;
  }

  set gender(value) {
    this._gender = value;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value;
  }
  toString() {
    return `this person name is ${this.firstName}`;
  }
}
const p = new Person("Samvel", "Margaryan", "mail", 35);
console.log(p);
class Student extends Person {
  constructor(firstName, lastName, gender, age, program, year, free) {
    super(firstName, lastName, gender, age);
    this.program = program;
    this.year = year;
    this.free = free;
  }
  get year() {
    return this._year;
  }

  set year(value) {
    this._year = value;
  }
  toString() {
    return `this styudent started learninin at ${this.year}`;
  }
}
const s = new Student(
  "Samvel",
  "Margaryan",
  "mail",
  35,
  "program",
  2015,
  "free"
);
console.log(s);

class Teacher extends Person {
  constructor(firstName, lastName, gender, age, program, pay) {
    super(firstName, lastName, gender, age);
    this.program = program;
    this.pay = pay;
  }
}
const t = new Teacher("Samvel", "Margaryan", "mail", 35, "program", 1500);
console.log(t);
