// typing animation
const typed = new Typed('.typing', {
    strings: ['Fronted Developer', 'Designer', 'Youtuber'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


let telegram_bot_id = "6547759004:AAEFuEK4EGdJtcGE5CdTvDdM63zX5QYMghI";
// https://api.telegram.org/bot6200957174:AAFI8PcmEbAkIiGbrcMp-a6_Ngci2muR8r8/getupdates
let chat_id = 1713463627;

function hasanjon() {
    event.preventDefault();
    let username, email, subject, message;

    username = document.getElementById("username");
    console.log(username);
    email = document.getElementById("email");
    subject = document.getElementById("subject");
    message = document.getElementById("message");
    message = "username: " + username.value + "\nEmail: " + email.value + "\nSubject: " + subject.value + "\nMessage: " + message.value;
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
    return false;
};