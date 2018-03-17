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
// TODO: Handle collision with Player    
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
    this.sprite = 'images/char-horn-girl.png';
    this.x = 200;
    this.y = 320;
};

Player.prototype.update = function(dt) {
    // If player gets to water
    if(this.y < -0){
        this.y = 320;
    }

    // If player gets collides with bug
    checkCollisions();
};

Player.prototype.reset = function(){
    this.x = 200;
    this.y = 320;
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(direction){
    switch(direction){
        case 'up':
            this.y = this.y - 85;
            break;
        case 'down':
            if(this.y < 405){
                this.y = this.y + 85;
            }
            break;
        case 'left':
            if(this.x > 0){
                this.x = this.x - 100;
            }
            break;
        case 'right':
            if(this.x < 400){
                this.x = this.x + 100;
            }
            break;
    };
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemy1 = new Enemy(60,150);
var enemy2 = new Enemy(145,100);
var enemy3 = new Enemy(230,200);
var allEnemies = [enemy1, enemy2, enemy3];
var player = new Player();

var checkCollisions = function(){
    allEnemies.forEach(function(bug){
        if(player.y < bug.y + 63 && player.y > bug.y - 77 && player.x < bug.x + 70 && player.x > bug.x - 70){
            player.reset();
        }
    });
};

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
