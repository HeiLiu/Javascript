// console.log('工厂模式');
//函数属于js基本类型中的对象
// 函数是一等对象

// var Bicycle = function(brand){
//     // 构造函数 constructor
//     // 在执行new方法时执行 
//     this.brand = brand || '凤凰';
// }
//只有一个构造函数 类跟函数没有区别 Javascript本身并没有类 只是用的人多了，给了这个实现
//javascript中只有对象 object原型对象的鼻祖
function Bicycle(brand) {
    // 构造函数 constructor
    // 在执行new方法时执行 
    // this.brand = brand || '凤凰';

}
//原型： 凤凰 永久
// 共享单车在原型上多了二维码 手机支付 在js中表现为继承关系 但是js中不需要传统的继承 只要有个参照物就可实现原型继承
//共享单车完全颠覆了自行车
Bicycle.prototype = {
    sellBicycle: function (model) {
        var bicycle = null;
        switch (model) {
            case 'Speedster':
                bicycle = new Speedster();
                break;
            case 'Giant':
                bicycle = new Giant();
                break;
            case 'U2':
                bicycle = new U2();

                break;
            default:
                console.log('没货');
                break;
        }
        bicycle.assemble(function () {

        });
        bicycle.wash(function () {

        });
        bicycle.provideRepair();
        return bicycle;
        // console.log('买车啦'); 
        // return null;
        // 面向对象们
        // 卖车 商店 很多车 维修 仓库

    }
}
//雷速达
function Speedster() {
    console.log('恭喜李总提走一辆雷速达');
}
Speedster.prototype = {
    assemble: function () {
        console.log('您的雷速达组装完毕');
    },
    wash: function () {
        console.log('你的雷速达洗好啦');
    },
    provideRepair: function () {
        console.log('保修一年');
    }
}
//捷安特
function Giant() {
    console.log('恭喜李总提走一辆捷安特');
}
Giant.prototype = {
    assemble: function () {
        console.log('您的捷安特组装完毕');
    },
    wash: function () {
        console.log('你的捷安特洗好啦');
    },
    provideRepair: function () {
        console.log('保修三年');
    }
}
//U2
function U2() {
    console.log('恭喜李总提走一辆U2');
}
U2.prototype = {
    assemble: function () {
        console.log('您的U2组装完毕');
    },
    wash: function () {
        console.log('你的U2洗好啦');
    },
    provideRepair: function () {
        console.log('保修二年');
    }
}
// js基本类型 
// 字符串 数字 布尔值 undefined null
// 复杂类型 object <-Array function json 的原型链
var what = process.argv.slice(2)[0];
var Bike = new Bicycle();
console.log(Bike.sellBicycle(what));