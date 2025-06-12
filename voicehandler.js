let recognition;
function startVoice() {
  if (!('webkitSpeechRecognition' in window)) {
    alert("Voice recognition not supported.");
    return;
  }
  recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = false;
  recognition.onresult = function (event) {
    const result = event.results[event.results.length - 1][0].transcript;
    document.getElementById("output").innerHTML += `<p><strong>You:</strong> ${result}</p>`;
  };
  recognition.start();
}
function pauseVoice() {
  if (recognition) recognition.stop();
}