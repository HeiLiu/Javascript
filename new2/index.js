function Otaku(name, age) {
    this.name = name;
    this.age = age;
    this.habit = 'Games';
}

Otaku.prototype.strength = 60;
Otaku.prototype.sayYourName = function () {
    console.log('I am ' + this.name);
}

// const person = new Otaku('乔峰','5000');
// person.sayYourName();

// 手写new函数
// 1. 要返回一个新的对象  
// 2. 访问到Otaku 构造函数里的属性  
// 3. 访问到Otaku.prototype中的属性或方法
// Object  

var person = objectFactory(Otaku, '乔峰', 5000);
// 参数是不确定的 第一个参数是类 后几个...  
// js 函数的参数不需要确定 异常灵活;数量可以不定 甚至可以不给  
// ... reset运算符整合起来，都会跟arguments结合起来
function objectFactory() {
    // arguments 类数组 如何通过arguments中获得构造函数以及其他参数
    console.log(arguments);
    // 数组中的shift 方法 弹出第一个元素
    // var {constructor,...args} = {'0':constructor,...arguments};
    // var Constructor = Array.from(arguments);
    // 借用一下数组的shift方法
    var Constructor = [].shift.call(arguments);
    var obj = new Object();
    //设置 obj __proto__ 指向实例化时候的构造函数上的原型
    obj.__proto__ = Constructor.prototype;
    // 构造函数上的this属性  
    // 参数要传进去，要赋值，this要指向当前对象
    // 在apply内部手动指定函数执行时的this 使用call、apply实现
    Constructor.call(obj,...arguments); 
    // Constructor.apply(obj,arguments);
    console.log(obj);
    console.log(obj.constructor.prototype);
    console.log(Constructor,arguments);
    return obj;
}