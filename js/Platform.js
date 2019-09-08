import {canvasHeight, canvasWidth, ctx} from "./main.js";

export class Platform{
    constructor(){
        this.x = 0.1*canvasWidth;
        this.y = 0.9*canvasHeight;
        this.speed = 10;
        this.w = 100;
        this.h = 20;
    }
    drawPlatform() {
        ctx.beginPath();
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(this.x, this.y, this.w,this.h);
        ctx.closePath();
    };

    move_platform (e) {
        ctx.clearRect(this.x - 1, this.y - 1, canvasWidth + 1, canvasHeight + 1);
        if (e.keyCode === 37) {
            if (this.x - 10 > 0)
                this.x -= this.speed;
        } else if (e.keyCode === 39) {
            if (this.x + 10 < canvasWidth - this.w)
                this.x += this.speed;
        }
        this.drawPlatform();
    };
    apply_bonus(bonusType){
        switch (bonusType) {
            case "speed_up":
                this.speed += 2;
                break;
            case "slow_down":
                this.speed -= 4;
                break;
            case "grow_up":
                this.w += 15;
                break;
        }
    }
}