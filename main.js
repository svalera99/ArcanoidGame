const canvas = document.getElementById('main-canvas');
const ctx = canvas.getContext('2d');
const canvasWidth = 800;
const canvasHeight = 600;
const platform_w = 100;

let playable = true, onGround = true, bricksInRow = 8, bricksInCol = 5, ballRadius = 15;
const draw_bricks_square = () =>{
    let bricks = [];
    let brick_w = 90, brick_h = 30;
    let render_x = 5, render_y = 10;
    for (let i = 0; i < bricksInCol; ++i){
        bricks[i] = [];
        for (let j=0; j < bricksInRow; ++j){
            ctx.fillStyle = "#"+((1<<24)*Math.random()|0).toString(16); // random color generator
            let brick = new Brick(render_x, render_y,brick_h,brick_w);
            brick.render(ctx);
            bricks[i].push(brick);
            render_x += 100;
        }
        render_x = 5;
        render_y += 40;
    }
    return bricks;
};
const draw_bricks_ladder = () =>{
    let bricks = [];
    let brick_w = 90, brick_h = 30;
    let render_y = 10;
    let padding = 5;
    for (let i = 0; i < bricksInCol; ++i){
        let canvas_slice = (canvasWidth - bricksInRow * (brick_w + padding) ) / 2;
        bricks[i] = [];
        for (let j = bricksInRow; j > 0; --j){
            ctx.fillStyle = "#"+((1<<24)*Math.random()|0).toString(16); // random color generator
            let brick = new Brick(canvas_slice, render_y,brick_h,brick_w);
            brick.render(ctx);
            bricks[i].push(brick);
            canvas_slice += padding + brick_w;
        }
        bricksInRow-=2;
        if (bricksInRow === 0) bricksInRow = 1;
        render_y += 40;
    }
    return bricks;
};
class Brick{
    constructor(x,y,h,w){
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
        this.isAlive = true;
    }
    render(ctx){
        if (this.isAlive)
            ctx.fillRect(this.x,this.y,this.w,this.h);
    }
    kill(){
        this.isAlive = false;
        ctx.clearRect(this.x,this.y,this.w,this.h);
    }
}
let bricks;
while (!bricks){
	let methodSelection = prompt("Please enter which field you want to play. Available options are : 1. Square 2. Ladder. Select 1 or 2");
	if(methodSelection === '1')
		bricks = draw_bricks_square();
	else if(methodSelection === '2')
	   bricks = draw_bricks_ladder();
	else
		methodSelection = prompt("Please enter which field you want to play. Available options are : 1. Square 2. Ladder. Select 1 or 2");
}


class Ball{
    constructor(plat_x, plat_y){
        this.x = plat_x;
        this.y =  plat_y;
        this.Xspeed = 10;
        this.Yspeed = 0;
        this.angle = 0;
    }
    render(){
        ctx.beginPath();
        ctx.fillStyle = "#FF0000";
        ctx.arc(this.x, this.y, ballRadius,0,2*Math.PI);
        ctx.fillStyle="rgb(50, 200, 200)";
        ctx.fill();
    }
    move_with_platform(e){
        if (e.keyCode === 37){
            if ( this.Xspeed > 0)
                this.Xspeed *= -1;
            if (this.x > 20)
                this.move();
        }
        if (e.keyCode === 39 ){
            if (this.Xspeed < 0)
                this.Xspeed *= -1;
            if (this.x < canvasWidth - 30)
                this.move();
        }
    }
    move(){
        ctx.clearRect(this.x - ballRadius - 1, this.y - ballRadius - 1,
            ballRadius * 2 + 2, ballRadius * 2 + 2);
        if (Math.cos(this.angle) < 0.4)
            this.angle = 0;
        this.x += this.Xspeed * Math.cos(this.angle);
        this.y += this.Yspeed * Math.cos(this.angle);
        this.render();
    }
    coll_detect(){
        for (let i=0; i<bricksInCol; i++){
            for (let j=0; j< bricks[i].length; j++){
                if (bricks[i][j].isAlive && bricks[i][j].x - 2 <= this.x && this.x <= bricks[i][j].x + bricks[i][j].w &&
                                                this.y - ballRadius <= bricks[i][j].y + bricks[i][j].h + 10){
                    bricks[i][j].kill();
                    this.Yspeed *= -1;
                }
            }
        }
        if (this.x <= 0 || this.x >= canvasWidth){
            this.Xspeed *= -1;
        }
        if (this.y >= canvasHeight || this.y <= 0) {
            playable = false;
        }
    };
}
class Platform{
    constructor(){
        this.x = 0.1*canvasWidth;
        this.y = 0.9*canvasHeight;
        this.w = 100;
        this.h = 20;
    }
    draw_platform = () =>{
        ctx.beginPath();
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(this.x, this.y, this.w,this.h);
        ctx.closePath();
    };

    move_platform = (e) => {
        ctx.clearRect(this.x - 1, this.y - 1, canvasWidth + 1, canvasHeight + 1);
        if (e.keyCode === 37){
            if (this.x - 10 > 0)
                this.x -= 10;
        }else if(e.keyCode === 39){
            if (this.x + 10 < canvasWidth - this.w)
                this.x += 10;
        }
        this.draw_platform();
    }
}
const game_loop = (e, ball, platform) =>{
    if (!playable){
        document.location.reload();
        if(ball.y <= 0) alert("You won");
        else alert("You've lost");
    }
    ball.coll_detect();
    if (platform.x <= ball.x &&  ball.x <= platform.x + platform.w && ball.y >= platform.y && ball.y <= platform.y + platform.h) {
        ball.Yspeed *= -1;
    }
    ball.move();
    platform.move_platform(e);
};
const play = () =>{
    let platform = new Platform();
    let ball = new Ball(platform.x , platform.y - 40);
    ball.render();
    platform.draw_platform(ctx, platform_w);
    document.addEventListener("keydown", function (e) {
            if (e.keyCode === 32 || e.keyCode === 13){ // when enter or space is pressed
                onGround = false;
                ball.angle =  -(Math.random() * (Math.PI / 2) + Math.PI / 4);
                ball.Xspeed = 2;
                ball.Yspeed = ball.Xspeed;
                setInterval(()=>{game_loop(e,ball,platform)}, 10);
            }
            platform.move_platform(e);
            if (onGround)
                ball.move_with_platform(e);
    });
};
window.onload = () => {
   play();
};