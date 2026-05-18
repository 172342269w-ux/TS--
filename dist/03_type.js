"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a;
a = 10;
//a=9;
let b;
b = "hello";
b = "world";
let c;
c = "hello";
c = true;
let d;
d = 10;
d = true;
d = "whb";
console.log(a);
let e;
e = 10;
e = "hello";
e = true;
e = 2.19;
let f;
f = d; //d是any类型，可以赋值给任何类型的变量
//f=e;//报错，e是unknown类型，不能赋值给其他类型的变量
if (typeof e === "string") {
    f = e;
}
//或者
f = e; //类型断言，告诉编译器e的类型是string
f = e; //类型断言，告诉编译器e的类型是string
function fn() {
    return 10;
}
function fn2(num) {
    if (num > 0) {
        return true;
    }
    else {
        return 123;
    }
}
function fn3() {
    // return 123;//报错，void类型的函数不能有返回值
}
