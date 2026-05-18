//object表示对象
let a:object;
a = {};
a = function(){};

let b:{name:string,age:number};
b={name:"孙悟空",age:18};

let c:{name:string,[peopname:string]:any};
c={name:'孙悟空',age:18,gender:'男'};
    
let d:(a:number,b:number)=>number;
d=function(n1,n2){
    return n1+n2;
}
 let e:string[];
 e=['1','2','3'];
 let f:any[];
    f=[1,'2',true];
let g:Array<number>;
g=[1,2,3];
let h:[string ,number];
h=['1',2];

enum Gender{
    male=0,
    female=1
}
let i:{name:string ,gender:Gender}
i={
    name:'猪八戒',
    gender:Gender.male
}
//console.log(i.name , i.gender);
//类型别名
type mytype=1|2|3|4|5;
let j:mytype;
let k:mytype;
