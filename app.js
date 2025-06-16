document.getElementById('analyzeForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const text = document.getElementById('inputText').value;

  fetch('/api/analyze', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: 'text=' + encodeURIComponent(text)
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('result').innerHTML =
      `<h3>Result:</h3><p>${data.status}</p><p>Confidence: ${data.score}%</p>`;
  });
});