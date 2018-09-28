"use strict";
// 不传递任何参数
var d = new Date();
console.log(d);
// 传递一个整数 1970-01-01 00:00:00往前数1000ms
var d1 = new Date(1000);
var d2 = new Date(2000);
console.log(d1);
console.log(d2);
// 传递一个字符串
var d3 = new Date('2018/09/28 15:23:00');
var d4 = new Date('2018-09-28 15:23:00');
var d5 = new Date('2018-09-28T15:23:00');
console.log(d3);
console.log(d4);
console.log(d5);
