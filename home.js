function toggleChat() {
    const chat = document.getElementById("chatBox");
    chat.style.display = chat.style.display === "flex" ? "none" : "flex";
}

function sendMessage() {
    const msgInput = document.getElementById("userMsg");
    const messages = document.getElementById("chatMessages");
    const msg = msgInput.value.trim();
    if(!msg) return;

    // Adiciona a mensagem do usuário
    messages.innerHTML += `<div><b>Você:</b> ${msg}</div>`;
    
    // Mock da resposta da raposa
    setTimeout(() => {
        messages.innerHTML += `<div><b>FoxBot:</b> ${msg} 🤔 (resposta simulada)</div>`;
        messages.scrollTop = messages.scrollHeight;
    }, 500);

    msgInput.value = "";
}