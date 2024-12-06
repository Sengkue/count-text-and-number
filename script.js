// First Counter: Count all characters including spaces
document.getElementById('countButton').addEventListener('click', function () {
  // Get the input text from the first textarea
  const inputText = document.getElementById('inputText').value;

  // Count the total number of characters
  const count = inputText.length;

  // Display the result
  document.getElementById('count').textContent = count;
});

// Second Counter: Count only text and numbers, ignoring spaces
document.getElementById('countNoSpacesButton').addEventListener('click', function () {
  // Get the input text from the second textarea
  const inputTextNoSpaces = document.getElementById('inputTextNoSpaces').value;

  // Remove all spaces and count the remaining characters
  const countNoSpaces = inputTextNoSpaces.replace(/\s/g, '').length;

  // Display the result
  document.getElementById('countNoSpaces').textContent = countNoSpaces;
});
