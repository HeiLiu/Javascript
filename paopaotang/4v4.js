// 4v4
function Player(name, teamColor) {
    // enemy 实例 instanceof => new Player
    this.name = name;

    this.teamColor = teamColor;
    this.teamMates = [];
    this.enemies = [];
    // 游戏状态 游戏开始结束
    this.state = 'live';
}
Player.prototype = {
    // 输和赢
    win: function () {
        console.log(`${this.name} win!`);
    },
    lose: function () {
        console.log(`${this.name} lose!`);
    },
    die :function() {
        this.lose();
        // 假设游戏结束
        let all_dead = true;
      
        for (let i = 0; i < this.teamMates.length; i++) {
          if (this.teamMates[i].state === 'live') {
            all_dead = false;
            break;
          }else all_dead = false;
        }
      
        if (all_dead) {
          for (let i = 0; i < this.teamMates.length; i++) {
            this.teamMates[i].lose();
          }
          for (let i = 0; i < this.enemies.length; i++) {
            this.enemies[i].win();
          }
        }
        // 判断是否游戏结束?  state live | dead
        // for  this.partners   4个 dead
      
        // 游戏结束 我方输， 对方赢
        // this.
        // this.enemy.win();
      }
      
}
// 工厂模式 流程太多 但是有规律
const players = [];

function playerFactory(name, teamColor) {
    // 完成实例化并根据颜色分队
    var newPlayer = new Player(name, teamColor);
    for(var i =0;i<players.length;i++){
        // 找出已经在队伍中的玩家
        const player = players[i];
        if(player.teamColor === newPlayer.teamColor){
            player.teamMates.push(newPlayer);
            newPlayer.teamMates.push(player);
        }else{
            player.enemies.push(newPlayer);
            newPlayer.enemies.push(player);
        }
    }
    players.push(newPlayer);
    return newPlayer;
}

// 4v4
// 实例对象 玩家上线
const player1 = playerFactory('皮蛋', 'red');
const player2 = playerFactory('小乖', 'blue');
const player3 = playerFactory('矿工', 'red');
const player4 = playerFactory('蓝蓝', 'red');
const player5 = playerFactory('宝宝', 'blue');
const player6 = playerFactory('小强', 'blue');
const player7 = playerFactory('海盗', 'blue');
const player8 = playerFactory('黑妞', 'red');
player1.die();
player3.die();
player4.die();
player8.die();
console.log(player1.enemies);