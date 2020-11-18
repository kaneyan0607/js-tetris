//フィールドサイズ
const FIELD_COL = 10;
const FIELD_ROW = 20;


//ブロック一つのサイズ（ピクセル）
const BLOCK_SIZE = 30;
//スクリーンサイズ
const SCREEN_W = BLOCK_SIZE * FIELD_COL;
const SCREEN_H = BLOCK_SIZE * FIELD_ROW;

//テトロミノのサイズ
const TETRO_SIZE = 4;

//canvasのid取得
let can = document.getElementById("can");
//描画
let con = can.getContext("2d");

can.width = SCREEN_W;
can.height = SCREEN_H;
can.style.border = "4px solid #555";

//blockの形を二次元配列で表現
//テトロミノの本体
let tetro = [
    [0, 0, 0, 0],
    [1, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]
];

//テトロミの座標
let tetro_x = 0;
let tetro_y = 0;

drawTetro();

//テトロミのを表示する関数
function drawTetro() {

    con.clearRect(0, 0, SCREEN_W, SCREEN_H);

    //x,yの座標をループで座標を求めて表示(16回、回す)
    for (let y = 0; y < TETRO_SIZE; y++) {
        for (let x = 0; x < TETRO_SIZE; x++) {
            if (tetro[y][x] === 1) {
                let px = (tetro_x + x) * BLOCK_SIZE;
                let py = (tetro_y + y) * BLOCK_SIZE;

                con.fillStyle = "#FF0000";
                con.fillRect(px, py, BLOCK_SIZE, BLOCK_SIZE);
                con.strokeStyle = "black";
                con.strokeRect(px, py, BLOCK_SIZE, BLOCK_SIZE);
            }
        }
    }
}

//キーボードが押された時の処理
document.onkeydown = function (e) {
    // onKeydown keycode 検索
    switch (e.keyCode) {
        case 37://　左
            tetro_x--;
            break;
        case 38://　上
            tetro_y--;
            break;
        case 39://　右
            tetro_x++;
            break;
        case 40://　下
            tetro_y++;
            break;
        case 32://　スペース
            break;
    }
    drawTetro();
}
