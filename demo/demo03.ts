// 函数申明法
function add (n1:number, n2:number):number {
  return n1 + n2
}

console.log('add运行结果:' + add(1, 2));

// 函数表达式法
var add2 = function (n1:number, n2:number):number {
  return n1 + n2
}
console.log('add2运行结果:' + add2(1, 2));

// 箭头函数(TS完全支持es6)
var add3 = (n1:number, n2:number):number => {
  return n1 + n2
}
console.log('add3运行结果:' + add3(1, 2));
