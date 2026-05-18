"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//object表示对象
let a;
a = {};
a = function () { };
let b;
b = { name: "孙悟空", age: 18 };
let c;
c = { name: '孙悟空', age: 18, gender: '男' };
let d;
d = function (n1, n2) {
    return n1 + n2;
};
let e;
e = ['1', '2', '3'];
let f;
f = [1, '2', true];
let g;
g = [1, 2, 3];
let h;
h = ['1', 2];
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
})(Gender || (Gender = {}));
let i;
i = {
    name: '猪八戒',
    gender: Gender.male
};
let j;
let k;
