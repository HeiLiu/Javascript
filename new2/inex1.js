function Otaku(name, age) {
    this.name = name;
    this.age = age;
    this.habit = 'Games';
}

Otaku.prototype.strength = 60;
Otaku.prototype.sayYourName = function () {
    console.log('I am ' + this.name);
}

const person = new Otaku('乔峰', 5000);
console.log(person);
const person1 = objectFactory(Otaku, '鸠摩智', 5000);
person1.sayYourName();
console.log(person1.constructor);
// 开始来实现objectFactory 方法 
// function objectFactory(otaku, name, age) {}
// 这种方法将自身写死了 如此他只能构造以Otaku为原型，并且只有name 和 age 属性的 obj
// 在js中 函数因为arguments 使得函数参数的写法异常灵活，在函数内部可以通过arguments来获得函数的参数
function objectFactory() {
    console.log(arguments);
    // return obj;
    // 通过arguments类数组打印出的结果，我们可以看到其中包含了构造函数以及我们调用objectfactory时传入的其他参数
    // 接下来就是要想如何得到其中这个构造函数和其他的参数
    // 由于arguments是类数组，没有直接的方法可以供其使用，我们可以有以下两种方法:
    // 1. Array.from(arguments).shift(); //转换成数组 使用数组的方法shift将第一项弹出
    // 2.[].shift().call(arguments); // 通过call() 让arguments能够借用shift方法
    let Constructor = [].shift.call(arguments);
    let obj = new Object();
    obj.__proto__ = Constructor.prototype;
    Constructor.call(obj,...arguments);
    return obj;
}