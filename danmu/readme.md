[弹幕](https://juejin.im/post/5ae56927f265da0b7e0c0968 )
弹幕的核心原理是什么？
>  文章，在封面图中提供一个弹幕效果，让大家的评论滚动输出，如果有新的评论，立即输出  

- 数据流 data flow  
数据的可视化，以时间点为一个因素的弹幕,  
数据流 文章的评论
可视化 以弹幕的形式  
- 技术分析  
评论 数组 动态的  
1. ajax fetch  
2. dom appendChild 动态Dom  
3. 弹幕有的上 有的下 弹幕之间最好不要重叠  
    随机一点 但是可控的弹幕效果
    定位 position   
    随机 Math.random()  
4.弹幕位置更新   
setInterval 定时器   