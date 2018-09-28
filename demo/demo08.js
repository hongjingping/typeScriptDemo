"use strict";
// RegExp  string
// 构造函数声明法
var reg1 = new RegExp("wikiHong");
console.log(reg1);
var reg2 = new RegExp("wikiHong", "gim");
console.log(reg2);
// 字面量声明法
var reg3 = /RegExp/;
var reg4 = /RegExp/gi;
// test(string) exec(string)
var reg5 = /wikiHong/i;
var website = 'wikiHong.com';
var results = reg5.test(website);
console.log(results);
console.log(reg5.exec(website));
