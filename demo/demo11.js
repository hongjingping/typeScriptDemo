"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Wikihong = /** @class */ (function () {
    function Wikihong(sex, name, skill) {
        this.sex = sex;
        this.name = name;
        this.skill = skill;
    }
    Wikihong.prototype.interest = function () {
        console.log('找小哥哥');
    };
    return Wikihong;
}());
var WikihongObj = new Wikihong('女', 'wikiHong', 'coding');
WikihongObj.interest();
var wikiHongBaby = /** @class */ (function (_super) {
    __extends(wikiHongBaby, _super);
    function wikiHongBaby() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xingxiang = "美美哒";
        return _this;
    }
    wikiHongBaby.prototype.zhuangqian = function () {
        console.log('一天赚一个亿');
    };
    wikiHongBaby.prototype.interest = function () {
        _super.prototype.interest.call(this);
        console.log("建立公司");
    };
    return wikiHongBaby;
}(Wikihong));
var baby = new wikiHongBaby('男', '小美', '找小姐姐');
baby.interest();
baby.zhuangqian();
