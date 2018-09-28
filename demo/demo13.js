"use strict";
var handsome;
(function (handsome) {
    var dehua = /** @class */ (function () {
        function dehua() {
            this.name = '刘德华';
        }
        dehua.prototype.talk = function () {
            console.log('我是刘德华');
        };
        return dehua;
    }());
    handsome.dehua = dehua;
})(handsome || (handsome = {}));
var bajie;
(function (bajie) {
    var dehua = /** @class */ (function () {
        function dehua() {
            this.name = '马德华';
        }
        dehua.prototype.talk = function () {
            console.log('我是马德华');
        };
        return dehua;
    }());
    bajie.dehua = dehua;
})(bajie || (bajie = {}));
var dehua1 = new handsome.dehua();
var dehua2 = new bajie.dehua();
dehua1.talk();
dehua2.talk();
