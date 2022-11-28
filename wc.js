const inputElement= document.getElementById("input_");
const chatContainer= document.getElementById('chatContainer');
inputElement.addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
        let mess=document.getElementById("input_").value;
        const chat=document.createElement("div");
        chatContainer.appendChild(chat);
        chat.classList.add("right-chat");
        chat.classList.add("chat-float");
        const chat_=document.createElement("div");
        chat.appendChild(chat_);
        chat_.classList.add("chat-box");
        chat_.classList.add("green");
        chat_.innerHTML=`<p>${mess}</p> <span class="mess-time">19:00 <i class="fa-solid fa-check fa-lg" style="color:#80aea5;"></i></span>`;
        const change=document.getElementById("change");
        change.innerHTML=`${mess}`;
        const up=document.getElementById("up");
        up.style.order="-1";
        up.style.transition=".3s ease-in";
        document.getElementById("input_").value="";
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
})