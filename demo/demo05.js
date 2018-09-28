"use strict";
// 引用类型
var wikiHong = {
    name: 'wikiHong',
    website: 'wikiHong.com',
    age: 18,
    sayHello: function () {
        console.log('为了前端技术而努力');
    }
};
console.log(wikiHong.name);
wikiHong.sayHello();
// 数组---Array String Date RegExp
// 声明数组
var arr1;
var arr2;
var arr3;
// 赋值---字面量
var arr4 = [];
var arr5 = [1, 2, 3, 4, 5];
var arr6 = ['wikiHong', '萍宝贝', 'kittyHong'];
var arr7 = [true, false, false];
// 赋值---构造函数
var arr8 = new Array();
var arr9 = new Array(1, 2, 3, 4, 5);
var arr10 = new Array('wikiHong', '萍宝贝', 'kittyHong');
var arr11 = new Array(true, false, false);
// let arr12:number[] = [1, 2, true]  // 报错，声明成什么类型，里面就必须是单一的类型
// 元祖(有顺序的)
var x;
x = ['wikihong', 10];
