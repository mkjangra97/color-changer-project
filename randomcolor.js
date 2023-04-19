const btn = document.getElementById("button");

const randomEmoji = () => {
    let emoji = [
        "😊",
        "😂",
        "🤣",
        "❤️",
        "😍",
        "😒",
        "👌",
        "😘",
    ]
}
function changeTheEmoji() {
    document.getElementById("button") = emojis[Math.floor(Math.random() * emojis.length)]
}

const randomColor = () => {
    let val = "0123456789ABCDEF";
    let cons = "#";
    for(let i=0; i<6; i++) {
        cons = cons + val[Math.floor(Math.random() * 16)];
    }
    return cons;
}
function changeBackgroundColor() {
    document.body.style.backgroundColor = randomColor();
}
function clicksound() {
    let sound = new Audio("./click.mp3")
    sound.play();
}
btn.addEventListener("click", changeBackgroundColor)