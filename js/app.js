//使用原型链的方式实现JavaScript面向对象

// 这是我们的玩家要躲避的敌人
let Enemy = function() {
    // 要应用到每个敌人的实例的变量写在这里
    // 我们已经提供了一个来帮助你实现更多 
    let num = Math.random() * 3 + 1;
    this.x = -100;
    this.y = parseInt(num) * 83 - 17;
    this.speed = Math.random() * 300 + 100;

    // 敌人的图片，用一个我们提供的工具函数来轻松的加载文件
    this.sprite = 'images/enemy-bug.png';
};

// 此为游戏必须的函数，用来更新敌人的位置
// 参数: dt ，表示时间间隙
Enemy.prototype.update = function(dt) {
    // 你应该给每一次的移动都乘以 dt 参数，以此来保证游戏在所有的电脑上都是以同样的速度运行的
    this.x += dt * this.speed;

    if(this.x > 505){
        this.x = -100;
    }
};

// 此为游戏必须的函数，用来在屏幕上画出敌人，
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//碰撞检测
Enemy.prototype.checkCollision = function (player) {
    let Xp = player.x + (101 - 67) / 2;
    let Yp = player.y + (171 - 88) / 2;
    let Xe = this.x + (101 - 99) / 2;
    let Ye = this.y + (171 - 77) / 2;
    //碰撞后玩家回到原位置,玩家67*88，敌人99*77
    if(((Xe - 67) < Xp && Xp < (Xe + 99)) && ((Ye - 88) < Yp && Yp < (Ye + 77))){
        let player_x = Math.random() * 4;
        player.x = parseInt(player_x) * 101;
        //player.x = 202;
        player.y = 83 * 3 + 80;
    }
};

// 现在实现你自己的玩家类
var Player = function (x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';

    //判断玩家输赢，0为输，1为赢
    this.win_num = 0;
};

// 这个类需要一个 update() 函数，用于当玩家移动至屏幕外后更新玩家位置 
Player.prototype.update = function () { 
    if(this.x > 404){
        this.x = 404;
    }else if(this.x < 0){
        this.x = 0;
    }else if(this.y < 55){
        this.y = -10;
    }else if(this.y > 435){
        this.y = 435;
    }
};

//render() 函数，用于在屏幕上画出玩家
Player.prototype.render = function () { 
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//用于玩家移动，且不能超过四个边缘
Player.prototype.handleInput = function (movement) {
    switch (movement) {
        case 'left':
            if (this.x >= 101) {
                this.x -= 101;
            } break;
        case 'right':
            if (this.x <= 404) {
                this.x += 101;
            } break;
        case 'up':
            if (this.y >= 55) {
                this.y -= 83;
            } break;
        case 'down':
            if (this.y <= 606) {
                this.y += 83;
            } break;
    }
};

Player.prototype.checkWin = function(){
    //玩家是否成功到达岸边,当玩家到达最顶端时Y坐标为-10，左下角Y坐标为-10 + 171 = 161
    if ((this.y + 171) <= 161) {
        var audio = document.getElementById("myAudio");
        audio.pause();
        if(document.all) {
            document.getElementById("open").click();
        }
        // 其它浏览器
        else {
            var e = document.createEvent("MouseEvents");
            e.initEvent("click", true, true);
            document.getElementById("open").dispatchEvent(e);
        }
        this.win_num = 1;
    }
}

function restart(){
    history.go(0);
}

// 现在实例化你的所有对象
// 把所有敌人的对象都放进一个叫 allEnemies 的数组里面
// 把玩家对象放进一个叫 player 的变量里面 
/*var allEnemies = [
    new Enemy(-100, 83 * 0 + 55), new Enemy(-80, 83 * 0 + 55), new Enemy(-150, 83 * 0 + 55),
    new Enemy(-150, 83 * 1 + 55), new Enemy(-60, 83 * 1 + 55),
    new Enemy(-100, 83 * 2 + 55), new Enemy(-70, 83 * 2 + 55),
    ];*/
var allEnemies = [
    new Enemy(), new Enemy(), 
    new Enemy(), new Enemy(),
    new Enemy()
];
var player = new Player(202, 83 * 3 + 80);

// 这段代码监听游戏玩家的键盘点击事件并且代表将按键的关键数字送到 Player.handleInput()
// 方法里面。你不需要再更改这段代码了。
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
