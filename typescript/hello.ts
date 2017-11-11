function sayHello (person: string) {
  return 'Hello, ' + person
}

let user = 'a'
console.log(sayHello(user))

let boolObject: Boolean = new Boolean(true)
let boolVal1: boolean = Boolean(1)
let boolVal2: boolean = true

let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

let compositeString: string = `boolVal is ${boolVal1}`

// void
function alertName (): void {
  alert('this is a alert')
}

// undefined and null
let voidVar1: void = undefined
let voidVar2: void = null
let nullVar : null = undefined
let udfVar  : undefined = null

// any
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;

let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);

anyThing.setName('Jerry');
anyThing.setName('Jerry').sayHello();
anyThing.myName.setFirstName('Cat');
anyThing.getUp().BrushTeech().breakfast.Cook()


// type infer
let something;
something = 'seven';
something = 7;

something.setName('Tom');

let somethingElse = 1
// somethingElse = ''

// union
function getString(something: string | number): string {
  return something.toString();
}

function getLength(something: string | Object): number {
  if ((<string>something).length) {
    return (<string>something).length
  }

  return 0
}
