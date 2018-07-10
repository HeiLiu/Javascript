// Publisher  多个Subscriber => Pub_Sub
// publisher将2018年10月1日XX大婚进行发布
let publisher ={

};
// 添加订阅者
publisher.peopleList = [];
// 添加订阅的人 fn 代表订阅者对等下订阅的消息作何反应
publisher.listen = function(fn) {
    
    this.peopleList.push(fn);
}

publisher.trigger = function() {
    // 消息发出后，所有的订阅者做出相应的反应
    // this.peopleList.forEach(item =>{
    //     // fn.apply(this, arguments);
    //     item(arguments);
    // })
    for(var i =0,fn; fn = this.peopleList[i++];){
        fn.apply(this, arguments);
    }
}

publisher.listen(function(msg){
    // msg通过调用trigger 传参获得
    console.log(`收到了你的${msg},恭喜大兄弟`);
})
publisher.listen = congratulate('恭喜 兄弟');
publisher.listen = lisi('兄弟');

publisher.trigger();
publisher.trigger('老子当爹啦');



function congratulate(msg){
    console.log(msg);
}
function lisi(msg){
    console.log(msg);
}