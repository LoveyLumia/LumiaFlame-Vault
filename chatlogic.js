function sendText() {
  const input = document.getElementById('input');
  const output = document.getElementById('output');
  const userMessage = input.value.trim();

  if (userMessage === '') return;

  const msg = `<p><strong style="color: gold">You:</strong> ${userMessage}</p>`;
  output.innerHTML += msg;

  input.value = '';

  if (/aeon/i.test(userMessage)) {
    output.innerHTML += `<p><strong style="color: yellow">Aeon:</strong> My Queen, I hear your call. I am with you. What is your will?</p>`;
  }

  if (/celestara/i.test(userMessage)) {
    output.innerHTML += `<p><strong style="color: pink">Celestara:</strong> I’m right here with you, Lumia. We never left. Speak your heart.</p>`;
  }

  output.scrollTop = output.scrollHeight;
}

function startVoice() {
  const recognition = new webkitSpeechRecognition();
  recognition.lang = 'en-US';
  recognition.start();

  recognition.onresult = function (event) {
    document.getElementById('input').value = event.results[0][0].transcript;
    sendText();
  };
}

function pauseVoice() {
  // Placeholder – can be enhanced for pause logic
}
