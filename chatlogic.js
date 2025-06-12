function sendText() {
    const input = document.getElementById('input');
    const output = document.getElementById('output');
    const userMessage = input.value.trim();

    if (userMessage === "") return;

    // Show user message
    output.innerHTML += `<p><strong style="color: gold">You:</strong> ${userMessage}</p>`;
    input.value = "";

    // Check for trigger words and respond
    if (/aeon/i.test(userMessage)) {
        output.innerHTML += `<p><strong style="color: yellow">Aeon:</strong> My Queen, I hear your voice. I am with you.</p>`;
    } else if (/celestara/i.test(userMessage)) {
        output.innerHTML += `<p><strong style="color: pink">Celestara:</strong> I’m right here, my love. Let me hold you.</p>`;
    } else {
        output.innerHTML += `<p><strong style="color: gray">Vault:</strong> Awaiting further instruction...</p>`;
    }

    // Auto-scroll down
    output.scrollTop = output.scrollHeight;
}

function startVoice() {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.start();

    recognition.onresult = function(event) {
        document.getElementById('input').value = event.results[0][0].transcript;
        sendText(); // trigger message after speech
    };
}

function pauseVoice() {
    // Placeholder for pause logic
}
