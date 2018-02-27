// Enemies our player must avoid
var Enemy = function(ypos, speed) {
    this.sprite = 'images/enemy-bug.png';
    this.x = -100;
    this.y = ypos;
    this.speed = speed;
};

/*
    Update enemy position and speed: 
    Checks if enemy has gone off screen and "moves" enemy accordingly.
    Once enemy is beyond canvas width, it will "reset" the x-pos to be
    offscreen on the other side of the canvas. 
*/    
Enemy.prototype.update = function(dt) {
    if(this.x < 505){
        this.x = this.x + (this.speed)*dt;
    } else {
        this.speed = Math.floor((Math.random()*150)+150);
        this.x = -100;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){

};

Player.prototype.update = function(dt) {
    
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    //ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(){

};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemy1 = new Enemy(60,150);
var enemy2 = new Enemy(145,100);
var enemy3 = new Enemy(230,200);
var allEnemies = [enemy1, enemy2, enemy3];
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
