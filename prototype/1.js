var obj = {
    a: 1
};
console.log('a' in obj);
// object 的原生方法 toString
// console.log('toString' in obj);
// console.log('' in obj);
function hasPrototypeProperty(obj, name) {
    // 原型链对象上是否具有某属性 obj对象 name 属性名
    // 思想：在obj内能找到 但不是自己的属性
    return name in obj && !obj.hasOwnProperty(name);
}
console.log(hasPrototypeProperty(obj, 'toString'));
console.log(hasPrototypeProperty(obj, 'a'));

// js中 函数是一等对象  Object在底层是由函数构造的
// Person 可以是程序员，作曲家 作者的原型对象
function Person(name) {
    this.name = name;
}
// Person 其实也是个函数
// Constructor 属性设置 车头
// constructor->prototype
// 方法 prototype 车身
// prototype 入口？ Js所有的对象都是由function 构造的
// Js中 几乎所有的函数都有一个prototype属性 类似指针一样 指向一个对象，这个对象通常是属性或者方法的结合
Person.prototype.getName = function () {
    return this.name;
}
// 新的对象构建
// 不是父子关系 而是原型关系
const p1 = new Person('xiaohu');

// Js原型式继承 两部分
// 1.constructor Person name+books
// 2.prototype Person的方法链 + 方法链（自身方法） 
// 一、让子类拥有父类的所有属性
function Author(name, books) {
    // 新的构造函数 call 将this指向Author实例后的对象 
    Person.call(this, name);
    this.books = books;
}
//得到Person的prototype
extend(Author,Person);

Author.prototype.getBooks = function () {
    return this.books;
}
// 构造函数 Author.prototype -> superClass.prototype
function extend(subClass,superClass){
    // 第三者
    var F = function(){}; //空的构造函数
    F.prototype = superClass.prototype;
    subClass.prototype = new F(); //实例化得到新的对象 subClass.prototype->F.prototype
    // 短暂失去Constructor,被prototype自身的
    // console.log(subClass.prototype.constructor);
    subClass.prototype.constructor = subClass;
    // console.log(subClass.prototype.constructor);
}
const author = new Author('雨果', ['悲惨世界']);
// author 函数prototype指向 Author 的prototype
// console.log(author.getName());
// console.log(author.getBooks());
// console.log(author.name);