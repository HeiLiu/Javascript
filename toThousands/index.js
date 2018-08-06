function toThousand(data) {
  let result = ''
  let num = (data || 0).toString()
  console.log(num)
  while(num.length > 3) {
    result = ',' + num.slice(-3) + result
    console.log(result)
    num = num.slice(0, num.length-3)
  }
  if(num) result = num + result
  return result
}
console.log(toThousand(1234341))

