function Player(name){
// enemy 实例 instanceof => new Player
    this.name = name;
    this.enemy = null; //1v1

}
Player.prototype={
    // 输和赢
    win:function(){
        console.log(`${this.name} win!`);
    },
    lose:function(){
        console.log(`${this.name} lose!`);
    },
    die:function(){
        this.lose();
        this.enemy.win();
    }
}
// 实例化两个对象 玩家上线
const player1 = new Player('皮蛋');
const player2 = new Player('小乖');
//互成敌人
player1.enemy = player2;
player2.enemy = player1;

player1.die();