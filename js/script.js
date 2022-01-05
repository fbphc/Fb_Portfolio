animationText(['Fabio Petrella', 'a Web Developer', 'saying something'], 'text',['rgb(248, 41, 5)']);

function animationText(words, id, color) {
  let visible = true;
  let letterCount = 1;
  let x = 1;
  let waiting = false;
  const target = document.getElementById(id)
  target.setAttribute('style', 'color:' + color)
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;'style', 
        letterCount += x;
        waiting = false;
      }, 1500)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 100)
}
