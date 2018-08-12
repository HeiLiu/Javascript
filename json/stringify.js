const types = ["number", "boolean", "string"];
// var   
function stringify(obj) {
  var type = typeof obj
  // console.log(type)
  if( types.indexOf(type) > -1 ) {
    // console.log('简单类型')
    obj ='\"' + obj + '\"'
    return obj
  }
  // undefined function 不会被转换
  if( typeof obj === 'undefined' || typeof obj === 'function') {
    return null
  }

  if(obj instanceof Array){
    let str = obj.toString()
    str = '\"[\"' + str + '\"]\"'
    return str
  }
  if(obj instanceof Object){
    let str = ''
    if( obj === null) {
      return null
    }
    for(let key in obj) {
      if(obj[key].constructor === Array || obj[key].constructor === Object) {
        stringify(obj[key])
      }
      str += '\"' + key +'\":' + obj[key]
    }
    str = '\"{\"' + str + '\"}\"'
    return str
  }
}

console.log(stringify({a:1, b: 2}))


