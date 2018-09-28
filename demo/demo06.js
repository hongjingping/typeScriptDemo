"use strict";
var wikiHong = '萍宝贝';
var wikiHonga = new String('wikiHong.com');
console.log('wikiHong:', wikiHong.length);
console.log('wikiHonga:', wikiHonga.length);
// 查找字符串 indexOf从开始最先查找字符串所在的索引的位置，没有的话返回-1，lastIndexOf从后面开始查找
var something = "国庆节马上到了，我要出去旅游啦，心情美美哒";
var lvyou = "小哥哥";
var meimieda = "美美哒";
console.log(something.indexOf(lvyou));
console.log(something.lastIndexOf(lvyou));
console.log(something.lastIndexOf(meimieda));
// 截取字符串 substr
console.log(something.substr(8));
console.log(something.substr(8, 6));
// 替换字符串 replace
console.log(something.replace('旅游', '浪'));
