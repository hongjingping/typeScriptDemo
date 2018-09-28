"use strict";
// 类是对象具体事务的一个抽象，对象是类的具体表现
var WikiHong = /** @class */ (function () {
    function WikiHong(name, age) {
        this.name = name;
        this.age = age;
    }
    WikiHong.prototype.say = function () {
        console.log('hello, wikiHong');
    };
    return WikiHong;
}());
var wikiHong88 = new WikiHong('wikiHong', 18);
console.log(wikiHong88);
wikiHong88.say();
