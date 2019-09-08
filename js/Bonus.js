import {ctx} from "./main.js";

export class Bonus{
    constructor(x,y){
        this.x = x;
        this.y = y;
        let rand_int = Math.floor(Math.random() * 3);
        switch (rand_int) {
            case 0:
                this.type = "speed_up";
                this.color = "#69ea30";
                break;
            case 1:
                this.type = "slow_down";
                this.color = "#ff3f1e";
                break;
            case 2:
                this.type = "grow_up";
                this.color = "#09b6fb";
                break;
        }
    }
    render(){
        ctx.clearRect(this.x+30,this.y-5,30, 15);
        ctx.beginPath();
        ctx.moveTo(this.x + 30,this.y);
        ctx.lineTo(this.x + 60,this.y);
        ctx.lineTo(this.x+45,this.y+15);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
    fall(){
        this.y += 2;
        this.render();
    }
}