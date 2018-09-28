"use strict";
// public
// protected
// private
var Kitty = /** @class */ (function () {
    function Kitty(sex, name, age) {
        this.sex = sex;
        this.name = name;
        this.age = age;
    }
    Kitty.prototype.sayHello = function () {
        console.log("hello");
    };
    Kitty.prototype.sayLove = function () {
        console.log("I love you");
    };
    return Kitty;
}());
var kittyHong = new Kitty('女', 'kittyGuo', 18);
console.log(kittyHong.sex);
console.log(kittyHong.name);
console.log(kittyHong.age);
kittyHong.sayHello();
kittyHong.sayLove();
