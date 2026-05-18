let a:10;
a=10;
//a=9;

let b:"hello"|"world";
b="hello";
b="world";

let c:string|boolean;
c="hello";
c=true;

let d:any;
d=10;
d=true ;
d="whb";
console.log(a);

let e:unknown;
e=10;
e="hello";
e=true;
e=2.19;

let f:string;
f=d;//d是any类型，可以赋值给任何类型的变量
//f=e;//报错，e是unknown类型，不能赋值给其他类型的变量
if(typeof e==="string"){
    f=e;
}
//或者
f=e as string;//类型断言，告诉编译器e的类型是string
f=<string>e;//类型断言，告诉编译器e的类型是string

function fn():number{
    return 10;
}

function fn2(num:number){
    if(num>0){
        return true;
    }else {
        return 123;
    }

}
function fn3():void{
   // return 123;//报错，void类型的函数不能有返回值
}