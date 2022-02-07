animationText(
  ["Fabio Petrella", "a Web Developer", "saying something"],
  "text",
  ["black"]
);

function animationText(words, id, color) {
  let visible = true;
  let letterCount = 1;
  let x = 1;
  let waiting = false;
  const heading = document.getElementById(id);
  heading.setAttribute("style", "color:" + color);
  window.setInterval(function () {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      heading.innerHTML = words[0].substring(0, letterCount);
      window.setTimeout(function () {
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        "style", (letterCount += x);
        waiting = false;
      }, 1500);
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function () {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (waiting === false) {
      heading.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, 100);
}

const trigger = document.querySelector('.trigger');
trigger.addEventListener('click', function(){
  const bars = document.querySelector('.myLinks');
  if (bars.style.display === "block") {
    bars.style.display = "none";
  } else {
    bars.style.display = "block";
  }
})
document.querySelectorAll(".sub-myLinks").forEach((item) => {
  item.addEventListener("click", (event) => {
    document.getElementById("myLinks").style.display = "none";
  });
});



let appear = document.querySelector(".fa-chevron-down");
appear.addEventListener("click", (event) => {

document.querySelector(".par-text-1").style.display = "none";
  document.querySelector(".par-text-2").style.display = "block";
  document.querySelector(".appear").style.display = "none";
  document.querySelector(".disappear").style.display = "block";
});
;


document.querySelectorAll(".disappear").forEach((item) => {
  item.addEventListener("click", (event) => {
    document.querySelector(".par-text-1").style.display = "block";
    document.querySelector(".par-text-2").style.display = "none";
    document.querySelector(".appear").style.display = "block";
    document.querySelector(".disappear").style.display = "none";
  });
});


document.querySelectorAll('.logo-box').forEach ((item) => {
  item.addEventListener('mouseover', (event) => {
    item.style.cursor = 'pointer';
  })
});
document.querySelectorAll('.logo-box').forEach ((item) => {
    item.addEventListener("click", (event) => {
    item.animate([
      { opacity: '0.7' },
      { opacity: '0', transform: 'skew(20deg, 180deg)'}
    ], {
      // timing options
      duration: 400,
      iterations: 1
    });
  item.style.opacity = "0";

     let x = setInterval(logoAppear, 1500, 'Parameter 1', 'Parameter 2'); 
    function logoAppear(){
      item.animate([
        { opacity: '0', transform: 'skew(60deg, -180deg) ' },
        { opacity: '1',}
      ], {
        // timing options
        duration: 400,
        iterations: 1
      }) 
      item.style.opacity = "1";
      clearInterval(x);
    };
    }); 
  });
  document.querySelector('.box5').addEventListener('click',(event) => {
    const myWindow = window.open("https://fbphc.github.io/Rock_Paper_Scissors/", "", "left = 300, top = 50, width=630, height=804");
  });
  //width=700,location=no,menubar=no,height=500,scrollbars=no,resizable=no,fullscreen=no'