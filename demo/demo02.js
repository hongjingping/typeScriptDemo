"use strict";
// 1. 定义函数 参数
function searchPerson(age) {
    return '找到了' + age + '岁的人';
}
var age = 18;
var result = searchPerson(age);
console.log('result', result);
// 2. 有可选参数的函数
function searchPerson2(age, stature) {
    var yy = '';
    yy = '找到了' + age + '岁';
    if (stature != undefined) {
        yy = yy + stature;
    }
    return yy + '的人';
}
var result2 = searchPerson2(19);
console.log('result2', result2);
var result3 = searchPerson2(20, '大长腿');
console.log('result3', result3);
// 3. 有默认参数的函数
function searchPerson3(age, stature) {
    if (age === void 0) { age = 22; }
    if (stature === void 0) { stature = "水蛇腰"; }
    var yy = '';
    yy = '找到了' + age + '岁';
    if (stature != undefined) {
        yy = yy + stature;
    }
    return yy + '的人';
}
var result4 = searchPerson3();
console.log('result4', result4);
var result5 = searchPerson3(28, '鹅蛋脸');
console.log('result5', result5);
// 有剩余参数的函数
function sarchPerson() {
    var demand = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        demand[_i] = arguments[_i];
    }
    var yy = '找到了';
    for (var i = 0; i < demand.length; i++) {
        yy = yy + demand[i];
        if (i < demand.length - 1) {
            yy = yy + ',';
        }
    }
    yy = yy + '的人';
    return yy;
}
var result6 = sarchPerson('22', '大长腿', '瓜子脸', '水蛇腰');
console.log('result6', result6);
