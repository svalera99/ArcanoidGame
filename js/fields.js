import {bricksInRow, bricksInCol, ctx, canvasWidth} from "./main.js";
import {Brick} from "./Brick.js";
import {Bonus} from "./Bonus.js";

export const draw_bricks_square = () =>{
    let bricks = [];
    let brick_w = 90, brick_h = 30;
    let render_x = 5, render_y = 10;
    for (let i = 0; i < bricksInCol; ++i){
        bricks[i] = [];
        for (let j=0; j < bricksInRow; ++j){
            ctx.fillStyle = "#"+((1<<24)*Math.random()|0).toString(16); // random color generator
            let brick;
            if (getChance())
                brick = new Brick(render_x, render_y,brick_h,brick_w, new Bonus(render_x, render_y));
            else
                brick = new Brick(render_x, render_y,brick_h,brick_w);
            brick.render(ctx);
            bricks[i].push(brick);
            render_x += 100;
        }
        render_x = 5;
        render_y += 40;
    }
    return bricks;
};
export const draw_bricks_ladder = () =>{
    let bricks = [];
    let brick_w = 90, brick_h = 30;
    let render_y = 10;
    let padding = 5;
    let bricksInRo = bricksInRow;
    for (let i = 0; i < bricksInCol; ++i){
        let canvas_slice = (canvasWidth - bricksInRo * (brick_w + padding) ) / 2;
        bricks[i] = [];
        for (let j = bricksInRo; j > 0; --j){
            ctx.fillStyle = "#"+((1<<24)*Math.random()|0).toString(16); // random color generator
            let brick;
            if (getChance())
                brick = new Brick(canvas_slice, render_y,brick_h,brick_w, new Bonus(canvas_slice, render_y));
            else
                brick = new Brick(canvas_slice, render_y,brick_h,brick_w);
            brick.render(ctx);
            bricks[i].push(brick);
            canvas_slice += padding + brick_w;
        }
        bricksInRo-=2;
        if (bricksInRo === 0) bricksInRo = 1;
        render_y += 40;
    }
    return bricks;
};

const getChance = ()=>{let i = Math.random(); if (i < 0.2) return 1; else return 0;};
