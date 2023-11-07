// typing animation
const typed = new Typed('.typing',{
    strings: ['Fronted Developer', 'Designer', 'Youtuber'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


let telegram_bot_id = "6547759004:AAEFuEK4EGdJtcGE5CdTvDdM63zX5QYMghI";
// https://api.telegram.org/bot6200957174:AAFI8PcmEbAkIiGbrcMp-a6_Ngci2muR8r8/getupdates
let chat_id = 1713463627;
let name, email, subject, message;
let ready = function() {
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    subject = document.getElementById("subject").value;
    message = document.getElementById("message").value;
    message = "Name: " + name + "\nEmail: " + email + "\nSubject: " + subject + "\nMessage: " + message;
};
function hasanjon() {
    event.preventDefault();
    ready();
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
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
    return false;
};