function bindEvent(elem, type, selector, fn) {
  // 当只传三个参数的时候  第三个selector给fn
  if( fn === null) {
    fn = selector
    selector = null
  }
  elem.addEventListener(type, function(e) {
    var target
    if(selector) {
      // 如果需要事件代理
      target = e.target
      if (target.matches(selector)) {
        fn.call(target, e)
      } else {
        // 不需要事件代理
        fn(e)
      }
    }
  })
}