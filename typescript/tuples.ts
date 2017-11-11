let xcatliu: [string, number];
xcatliu[0] = 'Xcat Liu';
xcatliu[1] = 25;

xcatliu[0].slice(1);
xcatliu[1].toFixed(2);

enum Color {Red, Green = "yellow".length, Blue = "blue".length};
const enum Directions { Up,  Down,  Left,  Right }
let direct = Directions.Right

const enum Dir { ss, yy }
let dir = Dir.yy