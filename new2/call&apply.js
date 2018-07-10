// var obj = {
//     name: 'seven'
// }

// var obj2 = {
//     name: 'halo'
// }

// window.name = 'window';

// var getName = function () {
//     // 函数的this由函数运行时决定,运行时的函数调用方式来决定
//     console.log(`Hi, I am ${this.name}`);
// }
// 普通函数
// getName();

// // 在obj 和 obj2 中没有getName 方法 可以通过call 和 apply 来临时借用 
// // 在只有一个参数的时候call 和 apply 用法是一样的 都是用来改变this的指向 在其中不传参的话 函数的this指向不变
// getName.call(obj);  

// var func = function(a,b,c) {
//     console.log([a, b, c]);
// }
// // 经典用法 null
// func.apply(null,[1,2,3]);
// func.call(null,1, 3, 4);
function Otaku(name, age) {
    this.name = name;
    this.age = age;
    this.habit = 'Games';
}
// 给类的原型上添加属性和方法
Otaku.prototype.strength = 60;
Otaku.prototype.sayYourName = function () {
    console.log('I am ' + this.name);
}
// 实例化一个person对象
const person = new Otaku('乔峰','5000');
// person.sayYourName();
console.log(person);