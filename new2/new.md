## 如何手动实现一个New方法  
在所有的前端面试中常常喜欢考面试者如何手写一个new操作符，作为在准备秋招的大三党，我也要考虑这些。
那么我们先看看new操作符都干了什么事情，有哪些操作？通过下面的代码来进行思考：  
```js
// 新建一个类
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
person.sayYourName();

```  
