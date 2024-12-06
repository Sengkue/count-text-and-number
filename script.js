document.getElementById('countButton').addEventListener('click', function () {
  // Get the input text value
  const inputText = document.getElementById('inputText').value;

  // Remove spaces and count remaining characters
  const count = inputText.replace(/\s/g, '').length;

  // Display the result
  document.getElementById('count').textContent = count;
});
