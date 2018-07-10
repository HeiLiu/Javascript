## JSON
JSON 全称是 Javascript Object Notation, 意为Javascript对象标记法

JSON中的js，指的是JSON其语法是参考的Javascript对象表示，并不是只能用于Javascript这一门语言当中

JSON 格式的创始人称此格式永远不升级，这其中可以看出JSON具有长时间的稳定性，即使是很久以前写的JSON文件，以后也不会遇到兼容性的问题而导致无法访问。 

### JSON 解析和生成  
在Javascript 中：  
- eval()/JSON.parse用于解析JSON对象  
- JSON.stringify
```
const str = '{"name":"HeiLiu", "age": 22}';

//const obj = eval("("+ str +")");
//在eval中str需加()才能进行正确的编译，如果不加eval()遇到{}会将str当作js的代码块来执行
const obj = JSON.parse(str);
console.log(obj);
// 再将JSON对象生成字符串
var jsonStr = Json.stringify(obj)
```

```
/*JSON.parse()可以有第二个参数，是一个函数。函数接收两个参数：name和 value，即名称和值  
当传入json字符串时，json中的每一组名值对都要调用此函数，该函数返回value，将value赋值给当前的name*/
const str = '{"name":"HeiLiu", "age": 22}';
const obj = JSON.parse(str, fun);
function fun(name, value){
    if(name == 'age'){
        value = 18
    }
    return value
}
```
### 名称/值(name/value)  
名称(name) 是一个字符串，必须要用双引号括起来，不能用单引号，这一点与javascript不同    
值的类型有七种：string,number,object,array,true,false,null,之外的类型是不能有的如：undifined、函数等
### 字符串  
**规则如下：**  
    - 字符串用双引号括起来，不能用单引号，也不能没有  
    - 字符串中不能单独出现双引号(") 和 右斜杠("\"),如需使用，需要用、进行转义如：
    \" 和 \\ 其他需转义的也如此  

[在线解析及格式化验证工具][1]

### 对象转化成JSON字符串  
JSON.stringify(value[, replacer[, space]] )
value： 要被转换的值，必选，一般是对象或者数组      
**注意：**  
如果obj中有不符合JSON值的要求，会产生什么结果？  
- undefined 不会被转换  
- function  不做转换    
如下：
```
const obj ={
    name:"liu",
    age: 22,
    a: undefined,
    say:function(){}
}
let jsonstr = JSON.stringify(obj);
console.log(josnstr)    //{"name":"liu","age":22}
```  
如果数组中有函数呢？   
```
const obj ={
    name:"liu",
    age: 22,
    a: undefined,
    say:function(){},
    hei:[function(){}]
}
let jsonstr = JSON.stringify(obj);
console.log(josnstr)    //{"name":"liu","age":22,"b":[null]}
```
replacer: 可选参数，一般为数组或者函数  
当replacer为函数时，作用与JSON.parse()中第二个参数为fn时的作用一样
space: 可选参数，为了方便阅读排版而存在，可以在JSON字符串中添加空白或者制表符  
```
const obj ={
   a: 1,
   b: 2,
   c: 3,
   d: 4
}
let jsonstr = JSON.stringify(obj, ['a','b','c], '\t');
console.log(josnstr) 
// 输出的结果会自动排版，只转换name在['a','c','b']中有的名值对,且按照其中的顺序转换
{
    "a":1,
    "c":3,
    "b":2
}
```

### JSON2XML  
依赖文件：Jquery，Jquery.xml2json.js,jquery.json2xml.js
后两个文件依赖于jquery，在`json.cn`中组件可以找到  
```
xml2json  
let str = "<root>"+
          "<name>"Liu"</name>"+
          "<age>"22"</age>"+
          "<friends>"Zhang"</friends>"+
          "<friends>"Wang"</friends>"+
          "<root>";
console.log(str);
const obj = $.xml2json(str);
console.log(obj);// 为一个js对象，还需转换为json字符串
let jsonstr = JSON.stingify(obj);
console.log(obj);
```
  [1]: https://www.json.cn/%20json