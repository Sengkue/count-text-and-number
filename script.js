document.getElementById('countButton').addEventListener('click', function() {
  // Get the input text value
  const inputText = document.getElementById('inputText').value;

  // Count the number of characters (or numbers)
  const count = inputText.length;

  // Display the result
  document.getElementById('count').textContent = count;
});
