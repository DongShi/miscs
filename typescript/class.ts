abstract class Animal {
  public name;
  public constructor(name) {
    this.name = name;
  }
  public abstract sayHi();
}

class Cat extends Animal {
  public eat() {
    console.log(`${this.name} is eating.`);
  }

  public sayHi () {}
}

let cat = new Cat('Tom');

let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
};

interface sample {
  a: number,
  b: string
} 

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  return source.search(subString) !== -1;
}

interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter>function (start: number) { };
  counter.interval = 123;
  counter.reset = function () { };
  return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;


interface Alarm {
  price: number;
}
interface Alarm {
  weight: number;
}


// generics
function createArray<T>(length: number, value: T): Array<T> {
  let result = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

createArray(3, 'x'); // ['x', 'x', 'x']


interface lengthWise {
  length: number
}

function getGenericLength<T extends lengthWise>(arg: T): number {
  return arg.length
}


interface CreateArrayFunc<T> {
  (length: number, value: T): Array<T>;
}

let createArrayT: CreateArrayFunc<any>;
createArrayT = function<T>(length: number, value: T): Array<T> {
  let result = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

createArray(3, 'x'); // ['x', 'x', 'x']

// interface template.
interface templateFunc {
  <T>(arg: T) : Array<T>
}

let funcT: templateFunc =  function<T>(arg: T) : Array<T> {
  return [ arg ];
}

// class template
class PersonT<T> {
  name: T;
  age: number;  
}

let p = new PersonT<string>()


interface addT {
  <T extends lengthWise, U extends lengthWise>(arg1: T, arg2: U) : number
}

let addTFuc: addT = function<T extends lengthWise, U extends lengthWise>(arg1 :T, arg2: U) : number {
  return arg1.length + arg2.length
}

addTFuc<string, string>('123', 'abc');





// interface + templating
interface CapableInstance {
  count : number;
  getLength(): number;
}

class Instanace implements CapableInstance {
  public count : number;
  public getLength() {
    return 2 * this.count;
  }
  private id;
  public constructor(c) {
    this.count = c
  }
}


interface StrongMultiplyT {
  <T extends lengthWise, U extends CapableInstance>(arg1: T, arg2: U, ...items:Array<T>) : number 
}

let strongMultiplyFunc: StrongMultiplyT = function<T extends lengthWise, U extends CapableInstance>(arg1: T, arg2: U, ...items:Array<T>) : number {
  return arg1.length + arg2.count + arg2.getLength() + (items.length > 0 ? items[0].length : 0)
}






