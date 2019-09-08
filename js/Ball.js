import {bricksInCol, ballRadius, bricks, ctx, canvasWidth, canvasHeight, stop} from "./main.js";

export class Ball{
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
        if (this.x <= ballRadius || this.x >= canvasWidth - ballRadius){
            this.Xspeed *= -1;
        }
        if (this.y >= canvasHeight || this.y <= 0) {
            stop();
        }
    };
}