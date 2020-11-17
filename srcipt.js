//ブロック一つのサイズ（ピクセル）
const BLOCK_SIZE = 30;
//テトロミノのサイズ
const TETRO_SIZE = 4;

//canvasのid取得
let can = document.getElementById("can");
//描画
let con = can.getContext("2d");

//blockの形を二次元配列で表現
let tetro = [
    [0, 0, 0, 0],
    [1, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]
];

//x,yの座標をループで座標を求めて表示(16回、回す)
for (let y = 0; y < TETRO_SIZE; y++) {
    for (let x = 0; x < TETRO_SIZE; x++) {
        if (tetro[y][x] === 1) {
            let px = x * BLOCK_SIZE;
            let py = y * BLOCK_SIZE;

            con.fillStyle = "#FF0000";
            con.fillRect(px, py, BLOCK_SIZE, BLOCK_SIZE);
            con.strokeStyle = "black";
            con.strokeRect(px, py, BLOCK_SIZE, BLOCK_SIZE);
        }
    }
}
