// 浅拷贝，双向改变,指向同一片内存空间
let arr1 = [1, 2, 3]
let arr2 = arr1
arr1[0] = 'c'

console.log(arr1)
console.log(arr2)
// 浅拷贝的实现 
function shallowCopy(obj) {
  let copyObj = {}
  for(let i in obj) {
    copyObj[i] = obj[i]
  }
  return copyObj
}

const x = {
  name: 'liu',
  age: 22
}

const y = shallowCopy(x)
x.name = 'Liu'
x.birth = '1996/5/19'
console.log(y)

// Array 的 slice 和 concat 也是通过浅拷贝实现

// Object.assign()
// Object.assign() 方法可以把任意多个的源对象自身的可枚举属性拷贝给目标对象，然后返回目标对象。

var z = {
  a: 1,
  b: { f: { g: 1 } },
  c: [ 1, 2, 3 ]
};
var k = Object.assign({}, z);
console.log(k.b.f === z.b.f);     // true
