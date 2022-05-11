const date = new Date();
const [month, day, year]       = [date.getMonth(), date.getDate(), date.getFullYear()];
const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];


function log(msg) {
    console.log(`${year}-${month}-${day} ${hour}:${minutes}:${seconds} - ${msg}`)
}

module.exports = log;

/* log("message 2") */