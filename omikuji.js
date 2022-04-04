let name, username, userResult, rand;

username = prompt("お名前を教えて下さい。");
if (username === "") {
    document.getElementById("name").innerHTML = "名無し";
} else {
    document.getElementById("name").innerHTML = username;
}

rand = Math.floor(Math.random() * 5);
if (rand == 0) {
    userResult = "大吉";
} else if (rand == 1) {
    userResult = "中吉";
} else if (rand == 2) {
    userResult = "小吉";
} else if (rand == 3) {
    userResult = "吉";
} else if (rand == 4) {
    userResult = "凶";
}
document.getElementById("result").innerHTML = userResult;