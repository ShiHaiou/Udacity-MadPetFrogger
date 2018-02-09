# 街机游戏克隆

### **1. 游戏简介**

该游戏是经典的街机游戏“[青蛙过河](http://www.3366.com/flash/51653.shtml)”克隆版,如下图所示：

![游戏初始界面](https://raw.githubusercontent.com/ShiHaiou/Udacity-MadPetFrogger/master/images/game-page.PNG)

在此游戏中有玩家和敌人(小虫)。玩家的目标是抵达水域，并且不会撞到任何其他敌人。玩家可以上下左右移动。敌人在场景中的道路上移动速度变化不一。一旦玩家撞到敌人，游戏就会重置，并且玩家返回起始方框。玩家抵达水域后，游戏胜利。

### **2. 游戏目标**

玩家控制小男孩成功到达岸边，加油👍

### **3. 操作指南**

方向键⬆️ ⬇️ ⬅️ ➡️️ 分别控制上下左右移动，游戏获胜页面点击play again按钮游戏重新开始，点击close按钮关闭当前页面，游戏停止。

### **4. 程序说明**

该程序使用面向对象的JavaScript创建了Enemy类和Player类：

- Enemy类
    - update方法用于更新Enemy位置，Enemy需横穿屏幕
    
    - render方法用于在屏幕上画出敌人

    - checkCollision方法用于实现玩家和敌人的碰撞检测
     
- Player类
    - update方法用于更新Player位置，且玩家无法移动至屏幕外
    
    - render方法用于在屏幕上画出玩家

    - handleInput方法用于控制玩家的上下左右移动
    
    - checkWin方法用于检测玩家是否成功到达岸边
    
### **5. 玩家获胜**

如下图所示，当玩家获胜后，出现相当动画，且音乐暂停：

![游戏获胜界面](https://raw.githubusercontent.com/ShiHaiou/Udacity-MadPetFrogger/master/images/win-game.PNG)

点击play again按钮游戏重新开始，点击close按钮游戏结束，停止在当前页面

### **6. 文档参考**

如需了解更多相关知识请参考下面的文档：

- [碰撞检测](http://www.cnblogs.com/lxglbk/archive/2012/08/17/2644910.html)

- [彻底理解javascript中的原型链](http://blog.csdn.net/ljl157011/article/details/19677059)

- [HTML5 canvas](http://www.runoob.com/html/html5-canvas.html)







