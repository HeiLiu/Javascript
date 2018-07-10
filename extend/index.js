// es6 class 只是语法糖 底层还是由es5实现
function Person(name) {
    this.name = name;

}
Person.prototype = {
    getName:function(){
        return this.name;
    }
}

function Author(name,books){
    Person.call(this,name);
    this.books = books;
}

extend(Author,Person);

Author.prototype.getBooks = function(){
    return this.books;
}
function extend(subClass,superClass){
    // var F = function(){

    // }
    subClass.prototype = new superClass();
    // constructor属性丢失，指向Object
    subClass.prototype.constructor = subClass;
}

let author = new Author('li','afafa');
console.log(author.getName());
console.log(author.constructor.prototype);