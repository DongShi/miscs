// interface
interface Person {
  name: string;
  age: number;
}

let tom: Person = {
  name: 'Tom',
  age: 25,
  //foo: 11, // would result in ts error.
};


interface Person1 {
  name: string;
  age?: number; // optional
}
let tom1: Person1 = {
  name: ''
}


interface Person2 {
  name: string;
  age?: number;
  [propName: string]: any;
}

let tom2: Person2 = {
  name: 'Tom',
  gender: 'male',
  foo: 'bar' //< allowed 
};


interface Person3 {
  readonly name: string;
  age?: number;
  [propName: string]: any; //other fileds should be a subfield to this one.
}

let tom3: Person3 = {
  name: 'Tom',
  age: 25,
  gender: 'male'
};

//tom3.name = 'xx'




// number string array funcion symbol null undefined object


// array
let f: number[] = [1, 2, 3]
let g: Array<number> = [4, 5, 2]
let k: any[] = ['a', 1, 1]

// array-like
function foo0 () {
  let args: IArguments = arguments
}


// function

function foo1 (x: number, y: number) : number {
  return x + y
}

let foolExpress: (x: number, y: number) => number = function (x, y) {
  return x + y
}

interface SearchFunc {
  (x: number, y: string) : boolean
}

let foolFunc : SearchFunc
function buildName(firstName: string = 'Tom', lastName: string) {
  return firstName + ' ' + lastName;
}
let tomcat = buildName('Tom', 'Cat');
let cat = buildName(undefined, 'Cat');


function push(array: any[], ...items: any[]) {
  items.forEach(function(item) {
      array.push(item);
  });
}

let a = [];
push(a, 1, 2, 3);


// overload
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

// type
type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
  // do something
}

handleEvent(document.getElementById('hello'), 'scroll');  // 没问题

type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
  if (typeof n === 'string') {
    return n;
  }
  else {
    return n();
  }
}




