// Doms Elements:
const arts = document.querySelector('body div.rooms div.arts');
const sports = document.querySelector('body div.rooms div.sports');
const mssgContiner = document.querySelector('div.massg-container');
const sendButton = document.querySelector('div.send-form div.button');
const input = document.querySelector('input');
// connect with io server:
const socket = io();
// data => userName:
socket.emit('data',window.localStorage.userName)
// join to arts:
const art = ()=>{
    socket.emit('join','Arts');
    mssgContiner.innerHTML = "";
}

// join to sports
const sport = ()=>{
    socket.emit('join','Sports');
    mssgContiner.innerHTML = "";
}

// send a massage to the server:
const sendMssg = ()=>{
    let mssg = input.value;
    input.value = "";
    let auther = window.localStorage.userName;

    socket.emit('mssge', {mssg,auther});
}
// add click event to arts button:
arts.addEventListener("click",art);

// add click event to sports button:
sports.addEventListener("click",sport);

// add click event to send button:
sendButton.addEventListener("click",sendMssg);

// 
socket.on("msssge",(data)=>{
    let divMssg = document.createElement("div");
    divMssg.classList.add('mssge');

    let h3 = document.createElement("h3");
    h3.textContent = data.auther;

    let p = document.createElement("p");
    p.textContent = data.mssg;

    divMssg.appendChild(h3);
    divMssg.appendChild(p);

    mssgContiner.appendChild(divMssg);
})