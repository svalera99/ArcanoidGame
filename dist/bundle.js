/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/Ball.js":
/*!********************!*\
  !*** ./js/Ball.js ***!
  \********************/
/*! exports provided: Ball */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ball\", function() { return Ball; });\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ \"./js/main.js\");\n\r\n\r\nclass Ball{\r\n    constructor(plat_x, plat_y){\r\n        this.x = plat_x;\r\n        this.y =  plat_y;\r\n        this.Xspeed = 10;\r\n        this.Yspeed = 0;\r\n        this.angle = 0;\r\n    }\r\n    render(){\r\n        _main_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].beginPath();\r\n        _main_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = \"#FF0000\";\r\n        _main_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].arc(this.x, this.y, _main_js__WEBPACK_IMPORTED_MODULE_0__[\"ballRadius\"],0,2*Math.PI);\r\n        _main_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle=\"rgb(50, 200, 200)\";\r\n        _main_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fill();\r\n    }\r\n    move_with_platform(e){\r\n        if (e.keyCode === 37){\r\n            if ( this.Xspeed > 0)\r\n                this.Xspeed *= -1;\r\n            if (this.x > 20)\r\n                this.move();\r\n        }\r\n        if (e.keyCode === 39 ){\r\n            if (this.Xspeed < 0)\r\n                this.Xspeed *= -1;\r\n            if (this.x < _main_js__WEBPACK_IMPORTED_MODULE_0__[\"canvasWidth\"] - 30)\r\n                this.move();\r\n        }\r\n    }\r\n    move(){\r\n        _main_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].clearRect(this.x - _main_js__WEBPACK_IMPORTED_MODULE_0__[\"ballRadius\"] - 1, this.y - _main_js__WEBPACK_IMPORTED_MODULE_0__[\"ballRadius\"] - 1,\r\n            _main_js__WEBPACK_IMPORTED_MODULE_0__[\"ballRadius\"] * 2 + 2, _main_js__WEBPACK_IMPORTED_MODULE_0__[\"ballRadius\"] * 2 + 2);\r\n        if (Math.cos(this.angle) < 0.4)\r\n            this.angle = 0;\r\n        this.x += this.Xspeed * Math.cos(this.angle);\r\n        this.y += this.Yspeed * Math.cos(this.angle);\r\n        this.render();\r\n    }\r\n    coll_detect(){\r\n        for (let i=0; i<_main_js__WEBPACK_IMPORTED_MODULE_0__[\"bricksInCol\"]; i++){\r\n            for (let j=0; j< _main_js__WEBPACK_IMPORTED_MODULE_0__[\"bricks\"][i].length; j++){\r\n                if (_main_js__WEBPACK_IMPORTED_MODULE_0__[\"bricks\"][i][j].isAlive && _main_js__WEBPACK_IMPORTED_MODULE_0__[\"bricks\"][i][j].x - 2 <= this.x && this.x <= _main_js__WEBPACK_IMPORTED_MODULE_0__[\"bricks\"][i][j].x + _main_js__WEBPACK_IMPORTED_MODULE_0__[\"bricks\"][i][j].w &&\r\n                    this.y - _main_js__WEBPACK_IMPORTED_MODULE_0__[\"ballRadius\"] <= _main_js__WEBPACK_IMPORTED_MODULE_0__[\"bricks\"][i][j].y + _main_js__WEBPACK_IMPORTED_MODULE_0__[\"bricks\"][i][j].h + 10){\r\n                    _main_js__WEBPACK_IMPORTED_MODULE_0__[\"bricks\"][i][j].kill();\r\n                    this.Yspeed *= -1;\r\n                }\r\n            }\r\n        }\r\n        if (this.x <= _main_js__WEBPACK_IMPORTED_MODULE_0__[\"ballRadius\"] || this.x >= _main_js__WEBPACK_IMPORTED_MODULE_0__[\"canvasWidth\"] - _main_js__WEBPACK_IMPORTED_MODULE_0__[\"ballRadius\"]){\r\n            this.Xspeed *= -1;\r\n        }\r\n        if (this.y >= _main_js__WEBPACK_IMPORTED_MODULE_0__[\"canvasHeight\"] || this.y <= 0) {\r\n            Object(_main_js__WEBPACK_IMPORTED_MODULE_0__[\"stop\"])();\r\n        }\r\n    };\r\n}\n\n//# sourceURL=webpack:///./js/Ball.js?");

/***/ }),

/***/ "./js/Bonus.js":
/*!*********************!*\
  !*** ./js/Bonus.js ***!
  \*********************/
/*! exports provided: Bonus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Bonus\", function() { return Bonus; });\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ \"./js/main.js\");\n\r\n\r\nclass Bonus{\r\n    constructor(x,y){\r\n        this.x = x;\r\n        this.y = y;\r\n        let rand_int = Math.floor(Math.random() * 3);\r\n        switch (rand_int) {\r\n            case 0:\r\n                this.type = \"speed_up\";\r\n                this.color = \"#69ea30\";\r\n                break;\r\n            case 1:\r\n                this.type = \"slow_down\";\r\n                this.color = \"#ff3f1e\";\r\n                break;\r\n            case 2:\r\n                this.type = \"grow_up\";\r\n                this.color = \"#09b6fb\";\r\n                break;\r\n        }\r\n    }\r\n    render(){\r\n        _main_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].clearRect(this.x+30,this.y-5,30, 15);\r\n        _main_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].beginPath();\r\n        _main_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].moveTo(this.x + 30,this.y);\r\n        _main_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].lineTo(this.x + 60,this.y);\r\n        _main_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].lineTo(this.x+45,this.y+15);\r\n        _main_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = this.color;\r\n        _main_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fill();\r\n        _main_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].closePath();\r\n    }\r\n    fall(){\r\n        this.y += 2;\r\n        this.render();\r\n    }\r\n}\n\n//# sourceURL=webpack:///./js/Bonus.js?");

/***/ }),

/***/ "./js/Brick.js":
/*!*********************!*\
  !*** ./js/Brick.js ***!
  \*********************/
/*! exports provided: Brick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Brick\", function() { return Brick; });\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ \"./js/main.js\");\n\r\n\r\nclass Brick{\r\n    constructor(x,y,h,w, bonus){\r\n        this.x = x;\r\n        this.y = y;\r\n        this.h = h;\r\n        this.w = w;\r\n        this.isAlive = true;\r\n        if (bonus)\r\n            this.bonus = bonus;\r\n        else\r\n            this.bonus = undefined\r\n    }\r\n    render(ctx){\r\n        if (this.isAlive)\r\n            ctx.fillRect(this.x,this.y,this.w,this.h);\r\n    }\r\n    kill(){\r\n        this.isAlive = false;\r\n        _main_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].clearRect(this.x,this.y,this.w + 1,this.h);\r\n        if (this.bonus){\r\n            _main_js__WEBPACK_IMPORTED_MODULE_0__[\"bonuses_array\"].push(this.bonus);\r\n            this.interval_handler  = setInterval(()=>{this.bonus.fall()},25);\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./js/Brick.js?");

/***/ }),

/***/ "./js/Platform.js":
/*!************************!*\
  !*** ./js/Platform.js ***!
  \************************/
/*! exports provided: Platform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Platform\", function() { return Platform; });\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ \"./js/main.js\");\n\r\n\r\nclass Platform{\r\n    constructor(){\r\n        this.x = 0.1*_main_js__WEBPACK_IMPORTED_MODULE_0__[\"canvasWidth\"];\r\n        this.y = 0.9*_main_js__WEBPACK_IMPORTED_MODULE_0__[\"canvasHeight\"];\r\n        this.speed = 10;\r\n        this.w = 100;\r\n        this.h = 20;\r\n    }\r\n    drawPlatform() {\r\n        _main_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].beginPath();\r\n        _main_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = \"#FF0000\";\r\n        _main_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(this.x, this.y, this.w,this.h);\r\n        _main_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].closePath();\r\n    };\r\n\r\n    move_platform (e) {\r\n        _main_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].clearRect(this.x - 1, this.y - 1, _main_js__WEBPACK_IMPORTED_MODULE_0__[\"canvasWidth\"] + 1, _main_js__WEBPACK_IMPORTED_MODULE_0__[\"canvasHeight\"] + 1);\r\n        if (e.keyCode === 37) {\r\n            if (this.x - 10 > 0)\r\n                this.x -= this.speed;\r\n        } else if (e.keyCode === 39) {\r\n            if (this.x + 10 < _main_js__WEBPACK_IMPORTED_MODULE_0__[\"canvasWidth\"] - this.w)\r\n                this.x += this.speed;\r\n        }\r\n        this.drawPlatform();\r\n    };\r\n    apply_bonus(bonusType){\r\n        switch (bonusType) {\r\n            case \"speed_up\":\r\n                this.speed += 2;\r\n                break;\r\n            case \"slow_down\":\r\n                this.speed -= 4;\r\n                break;\r\n            case \"grow_up\":\r\n                this.w += 15;\r\n                break;\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./js/Platform.js?");

/***/ }),

/***/ "./js/fields.js":
/*!**********************!*\
  !*** ./js/fields.js ***!
  \**********************/
/*! exports provided: draw_bricks_square, draw_bricks_ladder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"draw_bricks_square\", function() { return draw_bricks_square; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"draw_bricks_ladder\", function() { return draw_bricks_ladder; });\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ \"./js/main.js\");\n/* harmony import */ var _Brick_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Brick.js */ \"./js/Brick.js\");\n/* harmony import */ var _Bonus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Bonus.js */ \"./js/Bonus.js\");\n\r\n\r\n\r\n\r\nconst draw_bricks_square = () =>{\r\n    let bricks = [];\r\n    let brick_w = 90, brick_h = 30;\r\n    let render_x = 5, render_y = 10;\r\n    for (let i = 0; i < _main_js__WEBPACK_IMPORTED_MODULE_0__[\"bricksInCol\"]; ++i){\r\n        bricks[i] = [];\r\n        for (let j=0; j < _main_js__WEBPACK_IMPORTED_MODULE_0__[\"bricksInRow\"]; ++j){\r\n            _main_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = \"#\"+((1<<24)*Math.random()|0).toString(16); // random color generator\r\n            let brick;\r\n            if (getChance())\r\n                brick = new _Brick_js__WEBPACK_IMPORTED_MODULE_1__[\"Brick\"](render_x, render_y,brick_h,brick_w, new _Bonus_js__WEBPACK_IMPORTED_MODULE_2__[\"Bonus\"](render_x, render_y));\r\n            else\r\n                brick = new _Brick_js__WEBPACK_IMPORTED_MODULE_1__[\"Brick\"](render_x, render_y,brick_h,brick_w);\r\n            brick.render(_main_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"]);\r\n            bricks[i].push(brick);\r\n            render_x += 100;\r\n        }\r\n        render_x = 5;\r\n        render_y += 40;\r\n    }\r\n    return bricks;\r\n};\r\nconst draw_bricks_ladder = () =>{\r\n    let bricks = [];\r\n    let brick_w = 90, brick_h = 30;\r\n    let render_y = 10;\r\n    let padding = 5;\r\n    let bricksInRo = _main_js__WEBPACK_IMPORTED_MODULE_0__[\"bricksInRow\"];\r\n    for (let i = 0; i < _main_js__WEBPACK_IMPORTED_MODULE_0__[\"bricksInCol\"]; ++i){\r\n        let canvas_slice = (_main_js__WEBPACK_IMPORTED_MODULE_0__[\"canvasWidth\"] - bricksInRo * (brick_w + padding) ) / 2;\r\n        bricks[i] = [];\r\n        for (let j = bricksInRo; j > 0; --j){\r\n            _main_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = \"#\"+((1<<24)*Math.random()|0).toString(16); // random color generator\r\n            let brick;\r\n            if (getChance())\r\n                brick = new _Brick_js__WEBPACK_IMPORTED_MODULE_1__[\"Brick\"](canvas_slice, render_y,brick_h,brick_w, new _Bonus_js__WEBPACK_IMPORTED_MODULE_2__[\"Bonus\"](canvas_slice, render_y));\r\n            else\r\n                brick = new _Brick_js__WEBPACK_IMPORTED_MODULE_1__[\"Brick\"](canvas_slice, render_y,brick_h,brick_w);\r\n            brick.render(_main_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"]);\r\n            bricks[i].push(brick);\r\n            canvas_slice += padding + brick_w;\r\n        }\r\n        bricksInRo-=2;\r\n        if (bricksInRo === 0) bricksInRo = 1;\r\n        render_y += 40;\r\n    }\r\n    return bricks;\r\n};\r\n\r\nconst getChance = ()=>{let i = Math.random(); if (i < 0.2) return 1; else return 0;};\r\n\n\n//# sourceURL=webpack:///./js/fields.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! exports provided: bricksInRow, bricksInCol, ballRadius, bricks, canvasWidth, canvasHeight, ctx, bonuses_array, stop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bricksInRow\", function() { return bricksInRow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bricksInCol\", function() { return bricksInCol; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ballRadius\", function() { return ballRadius; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bricks\", function() { return bricks; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"canvasWidth\", function() { return canvasWidth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"canvasHeight\", function() { return canvasHeight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ctx\", function() { return ctx; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bonuses_array\", function() { return bonuses_array; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stop\", function() { return stop; });\n/* harmony import */ var _fields_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fields.js */ \"./js/fields.js\");\n/* harmony import */ var _Platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Platform.js */ \"./js/Platform.js\");\n/* harmony import */ var _Ball_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ball.js */ \"./js/Ball.js\");\nconst canvas = document.getElementById('main-canvas');\r\nconst ctx = canvas.getContext('2d');\r\nconst canvasWidth = 800;\r\nconst canvasHeight = 600;\r\nconst platform_w = 100;\r\n\r\n\r\n\r\n\r\n\r\nlet playable = true, onGround = true,  bricksInCol = 5, ballRadius = 15, bricksInRow = 8, bricks, bonuses_array = [];\r\n\r\nbricks = (function getBricks(){\r\n    let methodSelection = prompt(\"Please enter which field you want to play. Available options are : 1. Square 2. Ladder. Select 1 or 2\");\r\n    while (!bricks){\r\n        if(methodSelection === '1')\r\n            bricks = Object(_fields_js__WEBPACK_IMPORTED_MODULE_0__[\"draw_bricks_square\"])();\r\n        else if(methodSelection === '2')\r\n           bricks = Object(_fields_js__WEBPACK_IMPORTED_MODULE_0__[\"draw_bricks_ladder\"])();\r\n        else\r\n            methodSelection = prompt(\"Please enter which field you want to play. Available options are : 1. Square 2. Ladder. Select 1 or 2\");\r\n    }\r\n    return bricks;\r\n}());\r\nconst stop = () =>{\r\n   playable = false;\r\n};\r\n\r\n\r\n\r\nconst play_game = (e, ball, platform) =>{\r\n    if (!playable){\r\n        document.location.reload();\r\n        if(ball.y <= 0) alert(\"You won\");\r\n        else alert(\"You've lost\");\r\n    }\r\n    if (bonuses_array.length){\r\n        for (let i = 0; i < bonuses_array.length; ++i){\r\n            if (platform.x <= bonuses_array[i].x &&  bonuses_array[i].x <= platform.x + platform.w && bonuses_array[i].y >= platform.y && bonuses_array[i].y <= platform.y + platform.h){\r\n                clearInterval(bonuses_array[i].interval_handler);\r\n                platform.apply_bonus(bonuses_array[i].type);\r\n                bonuses_array.splice(i,1);\r\n                break;\r\n            }\r\n        }\r\n    }\r\n\r\n\r\n    ball.coll_detect();\r\n    if (platform.x <= ball.x &&  ball.x <= platform.x + platform.w && ball.y >= platform.y && ball.y <= platform.y + platform.h) {\r\n        ball.Yspeed *= -1;\r\n    }\r\n    ball.move();\r\n    platform.move_platform(e);\r\n};\r\nconst game = () =>{\r\n    let platform = new _Platform_js__WEBPACK_IMPORTED_MODULE_1__[\"Platform\"]();\r\n    let ball = new _Ball_js__WEBPACK_IMPORTED_MODULE_2__[\"Ball\"](platform.x , platform.y - 40);\r\n    ball.render();\r\n    platform.drawPlatform(ctx, platform_w);\r\n    document.addEventListener(\"keydown\", function (e) {\r\n            if (e.keyCode === 32 || e.keyCode === 13){ // when enter or space is pressed\r\n                onGround = false;\r\n                ball.angle =  -(Math.random() * (Math.PI / 2) + Math.PI / 4);\r\n                ball.Xspeed = 2;\r\n                ball.Yspeed = ball.Xspeed;\r\n                setInterval(()=>{play_game(e,ball,platform)}, 10);\r\n            }\r\n            platform.move_platform(e);\r\n            if (onGround)\r\n                ball.move_with_platform(e);\r\n    });\r\n};\r\nwindow.onload = () => {\r\n   game();\r\n};\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ })

/******/ });