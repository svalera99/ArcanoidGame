const canvas = document.getElementById('main-canvas');
const ctx = canvas.getContext('2d');
const canvasWidth = 800;
const canvasHeight = 600;
const platform_w = 100;

import {draw_bricks_square,draw_bricks_ladder} from "./fields.js"
import {Platform} from "./Platform.js";
import {Ball} from "./Ball.js";

let playable = true, onGround = true,  bricksInCol = 5, ballRadius = 15, bricksInRow = 8, bricks, bonuses_array = [];

bricks = (function getBricks(){
    let methodSelection = prompt("Please enter which field you want to play. Available options are : 1. Square 2. Ladder. Select 1 or 2");
    while (!bricks){
        if(methodSelection === '1')
            bricks = draw_bricks_square();
        else if(methodSelection === '2')
           bricks = draw_bricks_ladder();
        else
            methodSelection = prompt("Please enter which field you want to play. Available options are : 1. Square 2. Ladder. Select 1 or 2");
    }
    return bricks;
}());
const stop = () =>{
   playable = false;
};
export {bricksInRow, bricksInCol, ballRadius, bricks, canvasWidth, canvasHeight, ctx,  bonuses_array, stop};


const play_game = (e, ball, platform) =>{
    if (!playable){
        document.location.reload();
        if(ball.y <= 0) alert("You won");
        else alert("You've lost");
    }
    if (bonuses_array.length){
        for (let i = 0; i < bonuses_array.length; ++i){
            if (platform.x <= bonuses_array[i].x &&  bonuses_array[i].x <= platform.x + platform.w && bonuses_array[i].y >= platform.y && bonuses_array[i].y <= platform.y + platform.h){
                clearInterval(bonuses_array[i].interval_handler);
                platform.apply_bonus(bonuses_array[i].type);
                bonuses_array.splice(i,1);
                break;
            }
        }
    }


    ball.coll_detect();
    if (platform.x <= ball.x &&  ball.x <= platform.x + platform.w && ball.y >= platform.y && ball.y <= platform.y + platform.h) {
        ball.Yspeed *= -1;
    }
    ball.move();
    platform.move_platform(e);
};
const game = () =>{
    let platform = new Platform();
    let ball = new Ball(platform.x , platform.y - 40);
    ball.render();
    platform.drawPlatform(ctx, platform_w);
    document.addEventListener("keydown", function (e) {
            if (e.keyCode === 32 || e.keyCode === 13){ // when enter or space is pressed
                onGround = false;
                ball.angle =  -(Math.random() * (Math.PI / 2) + Math.PI / 4);
                ball.Xspeed = 2;
                ball.Yspeed = ball.Xspeed;
                setInterval(()=>{play_game(e,ball,platform)}, 10);
            }
            platform.move_platform(e);
            if (onGround)
                ball.move_with_platform(e);
    });
};
window.onload = () => {
   game();
};