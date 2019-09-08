import {ctx, bonuses_array} from "./main.js";

export class Brick{
    constructor(x,y,h,w, bonus){
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
        this.isAlive = true;
        if (bonus)
            this.bonus = bonus;
        else
            this.bonus = undefined
    }
    render(ctx){
        if (this.isAlive)
            ctx.fillRect(this.x,this.y,this.w,this.h);
    }
    kill(){
        this.isAlive = false;
        ctx.clearRect(this.x,this.y,this.w + 1,this.h);
        if (this.bonus){
            bonuses_array.push(this.bonus);
            this.interval_handler  = setInterval(()=>{this.bonus.fall()},25);
        }
    }
}