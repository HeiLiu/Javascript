# RegRxp(正则表达式)  

> 简化对字符串的操作  
正则表达式(regular expression)描述了一种字符串匹配的模式（pattern），可以用来检查一个串是否含有某种子串、将匹配的子串替换或者从某个串中取出符合某个条件的子串等

## 什么是正则？  

规则、模式; 强大的字符串匹配的工具  

- 风格  
  js风格: const reg = new RegExp('a', i)  
  perl风格: const reg = /a/i  

- 转义  
  \d \\ \n  

- 特殊字符(元字符)  

  - [] 方括号  
    ```js
      const re = /[abc]pc/g
      // 范围匹配
      [a-z] [0-9] 
      [^a-z]  // 匹配非英文部分  
    ```

- 限定符(量词)  
  *:   
  +: 若干
- 方法  

  - search  返回匹配的位置
  - match 把所有匹配的东西都提取出来  
  - replace 字符串替换,替换所有匹配的字符串，返回替换以后的字符串


## 应用例子  

- 查找字符串中的数字并返回  
```js
  //  查找字符串中的数字  
  const str = '123ask32lks,alf21lksa12e45l3'
  const reg = /\d+/g    // global
  console.log(str.match(reg))
```  
- 敏感词过滤  
```js
  const reg = /匹配|出来/;
  const str = '把所有匹配的东西都提取出来 '
  console.log(str.replace(reg, '***'))  // 把所有***的东西都提取***
```