"use strict";
var age = 18;
var stature = 178.5;
var age2 = NaN;
console.log('年龄', age); // 声明未赋值 undefined
console.log('身高:', stature); // num支持整型和浮点型
console.log('NaN:', age2); // NaN
console.log('----------------');
var wikiHong = 'wikiHong是萍宝贝';
console.log('wikiHong:', wikiHong); // 字符串
// boolean true false
var b = true;
var c = false;
// enum 枚举类型  人:男人、女人、中性; 四季: 春夏秋冬
console.log('----------------');
var REN;
(function (REN) {
    REN[REN["men"] = 0] = "men";
    REN[REN["women"] = 1] = "women";
    REN[REN["gender"] = 2] = "gender";
})(REN || (REN = {}));
var REN2;
(function (REN2) {
    REN2["men"] = "\u7537\u4EBA";
    REN2["women"] = "\u5973\u4EBA";
    REN2["gender"] = "\u4E2D\u6027";
})(REN2 || (REN2 = {}));
console.log(REN.gender); // 下标 2
console.log(REN2.gender); // 中性
// any
console.log('----------------');
var t = 10;
t = 'wikiHong';
t = true;
console.log(t);
