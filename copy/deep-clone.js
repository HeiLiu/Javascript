function deepClone(target,source) {
  for(let key in source) {
    if(typeof source[key] === 'object') {
      target[key] = {}
      deepClone(target[key], source[key])
    } else {
      target[key] = source[key]
    }

  }
}

let obj ={
  a: 1,
  b: [1, 2, 3],
  c: {
    d: 4
  }
}
let target = Object.create(null)
deepClone(target, obj)
console.log(target.a == obj.a) 
console.log(target.b == obj.b) 
