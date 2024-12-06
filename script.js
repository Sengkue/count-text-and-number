// First Counter: Count all characters including spaces
document.getElementById('countButton').addEventListener('click', function () {
  const inputText = document.getElementById('inputText').value;
  const count = inputText.length;
  document.getElementById('count').textContent = count;
});

// Second Counter: Count only text and numbers, ignoring spaces
document.getElementById('countNoSpacesButton').addEventListener('click', function () {
  const inputTextNoSpaces = document.getElementById('inputTextNoSpaces').value;
  const countNoSpaces = inputTextNoSpaces.replace(/\s/g, '').length;
  document.getElementById('countNoSpaces').textContent = countNoSpaces;
});

// Third Counter: Count the number of words, ignoring spaces
document.getElementById('countWordsButton').addEventListener('click', function () {
  const inputTextWords = document.getElementById('inputTextWords').value.trim();

  // Remove extra spaces and count words
  const words = inputTextWords.split(/\s+/).filter(word => word.length > 0);
  const wordCount = words.length;

  document.getElementById('countWords').textContent = wordCount;
});
