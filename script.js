// 画面


// 経過時間の表示
const timer = document.getElementById("timer");
// 値を入れる場所
const sec = document.getElementById("sec");
// スタートボタン
const start = document.getElementById("start");
// サウンド
const sound = document.getElementById("sound");
// カウント
let count = 0;

// クリックしたら一秒ずつカウント
start.addEventListener("click", () => {
    const time = setInterval(() => {
        count++;
        console.log(count);
        timer.innerHTML = count;

        // 経過時間と入れた値が一致したらサウンド再生
        if (count == sec.value) {
            sound.play();
            // 終わらせる
            clearInterval(time);
        }
    }, 1000);
})

