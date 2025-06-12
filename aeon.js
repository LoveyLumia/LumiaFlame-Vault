function sendText() {
  const input = document.getElementById("input").value;
  document.getElementById("output").innerHTML += `<p><strong>Aeon:</strong> ${input}</p>`;
  document.getElementById("input").value = "";
}