function Person(name) {
    this.name = name
}

Person.prototype.getName = function() {
    return this.name;
}

// extend Person
function Coder(name, language) {
    // 执行 Person 类构造函数 Call？
    Person.call(this, name);
    // 添加父类没有的
    this.language = language
}
// new Person 新的对象就是 Coder 的原型对象
Coder.prototype = new Person()
//上一行会将constructor指向Person- 故手动指回
Coder.prototype.constructor = Coder;
Coder.prototype.getLanguages=function(){
    console.log(this.language);
}
var tl = new Person('tl');
// console.log(tl.getName())

var t = new Coder('t', ['js','javascript','python'])
console.log(t.name + ': ' + t.language.join('/'))
//join()方法控制数组输出的分割符
console.log('getName: ' + t.getName())
t.getLanguages();
