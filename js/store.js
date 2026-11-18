
const shopButtons = document.querySelectorAll(".shop-first-grid-btns");

const homeWindow = document.getElementById("store-home-window");
const appsWindow = document.getElementById("store-apps-window");


shopButtons.forEach(function(button){
  button.addEventListener("click", function(){
    shopButtons.forEach(function(btn){
      btn.classList.remove("active");
    });

    button.classList.add("active");

    homeWindow.style.display  = "none";
    appsWindow.style.display = "none";

    const page = button.dataset.page;

    if(page === "home"){
      homeWindow.style.display= "block";
    }

    else if (page === "apps"){
      appsWindow.style.display = "block";
    }
  });
});


homeWindow.style.display ="block";
shopButtons[0].classList.add("active");

const clickSoundEffect = new Audio("assets/audios/click.mp3");

function clickSound() {
    clickSoundEffect.currentTime = 0;
    clickSoundEffect.play();
}

const browserIcon = document.getElementById("open-browser");
const browserinstallBtn = document.getElementById("browser-install-btn");
browserinstallBtn.addEventListener("click", function(){
  setTimeout(() => {
    browserinstallBtn.textContent = "Instaling.";
    browserinstallBtn.style.color = "green";
  }, 100);

   setTimeout(() => {
    browserinstallBtn.textContent = "Instaling....."
  }, 200);

    setTimeout(() => {
    browserinstallBtn.textContent = "Instaling."
  }, 300);

   setTimeout(() => {
    browserinstallBtn.textContent = "Instaling....."
  },400);

      setTimeout(() => {
    browserinstallBtn.textContent = "Instaling."
  }, 500);

   setTimeout(() => {
    browserinstallBtn.textContent = "Instaling....."
  },600);

     setTimeout(() => {
      browserIcon.style.display = "block";
      clickSound();
    browserinstallBtn.textContent = "Installed";
    browserinstallBtn.style.color = "blue";
  },800);
});


const filesIcon = document.getElementById("open-files");
const filesinstallBtn = document.getElementById("files-install-btn");
filesinstallBtn.addEventListener("click", function(){
  setTimeout(() => {
    filesinstallBtn.textContent = "Instaling.";
    filesinstallBtn.style.color = "green";
  }, 100);

   setTimeout(() => {
    filesinstallBtn.textContent = "Instaling....."
  }, 200);

    setTimeout(() => {
    filesinstallBtn.textContent = "Instaling."
  }, 300);

   setTimeout(() => {
    filesinstallBtn.textContent = "Instaling....."
  },400);

      setTimeout(() => {
    filesinstallBtn.textContent = "Instaling."
  }, 500);

   setTimeout(() => {
    filesinstallBtn.textContent = "Instaling....."
  },600);

     setTimeout(() => {
      filesIcon.style.display = "block";
      clickSound();
    filesinstallBtn.textContent = "Installed";
    filesinstallBtn.style.color = "blue";
  },800);
});



const musicIcon = document.getElementById("open-music");
const musicinstallBtn = document.getElementById("music-install-btn");
musicinstallBtn.addEventListener("click", function(){
  setTimeout(() => {
    musicinstallBtn.textContent = "Instaling.";
    musicinstallBtn.style.color = "green";
  }, 100);

   setTimeout(() => {
    musicinstallBtn.textContent = "Instaling....."
  }, 200);

    setTimeout(() => {
    musicinstallBtn.textContent = "Instaling."
  }, 300);

   setTimeout(() => {
    musicinstallBtn.textContent = "Instaling....."
  },400);

      setTimeout(() => {
    musicinstallBtn.textContent = "Instaling."
  }, 500);

   setTimeout(() => {
    musicinstallBtn.textContent = "Instaling....."
  },600);

     setTimeout(() => {
      musicIcon.style.display = "block";
      clickSound();
    musicinstallBtn.textContent = "Installed";
    musicinstallBtn.style.color = "blue";
  },800);
});




const notesIcon = document.getElementById("open-notes");
const notesinstallBtn = document.getElementById("notes-install-btn");
notesinstallBtn.addEventListener("click", function(){
  setTimeout(() => {
    notesinstallBtn.textContent = "Instaling.";
    notesinstallBtn.style.color = "green";
  }, 100);

   setTimeout(() => {
    notesinstallBtn.textContent = "Instaling....."
  }, 200);

    setTimeout(() => {
    notesinstallBtn.textContent = "Instaling."
  }, 300);

   setTimeout(() => {
    notesinstallBtn.textContent = "Instaling....."
  },400);

      setTimeout(() => {
    notesinstallBtn.textContent = "Instaling."
  }, 500);

   setTimeout(() => {
    notesinstallBtn.textContent = "Instaling....."
  },600);

     setTimeout(() => {
      notesIcon.style.display = "block";
      clickSound();
    notesinstallBtn.textContent = "Installed";
    notesinstallBtn.style.color = "blue";
  },800);
});

const editorIcon = document.getElementById("open-editor");
const editorinstallBtn = document.getElementById("editor-install-btn");
editorinstallBtn.addEventListener("click", function(){
  setTimeout(() => {
    editorinstallBtn.textContent = "Instaling.";
    editorinstallBtn.style.color = "green";
  }, 100);

   setTimeout(() => {
    editorinstallBtn.textContent = "Instaling....."
  }, 200);

    setTimeout(() => {
    editorinstallBtn.textContent = "Instaling."
  }, 300);

   setTimeout(() => {
    editorinstallBtn.textContent = "Instaling....."
  },400);

      setTimeout(() => {
    editorinstallBtn.textContent = "Instaling."
  }, 500);

   setTimeout(() => {
    editorinstallBtn.textContent = "Instaling....."
  },600);

     setTimeout(() => {
      editorIcon.style.display = "block";
      clickSound();
    editorinstallBtn.textContent = "Installed";
    editorinstallBtn.style.color = "blue";
  },800);
});


const terminalIcon = document.getElementById("open-terminal");
const terminalinstallBtn = document.getElementById("terminal-install-btn");
terminalinstallBtn.addEventListener("click", function(){
  setTimeout(() => {
    terminalinstallBtn.textContent = "Instaling.";
    terminalinstallBtn.style.color = "green";
  }, 100);

   setTimeout(() => {
    terminalinstallBtn.textContent = "Instaling....."
  }, 200);

    setTimeout(() => {
    terminalinstallBtn.textContent = "Instaling."
  }, 300);

   setTimeout(() => {
    terminalinstallBtn.textContent = "Instaling....."
  },400);

      setTimeout(() => {
    terminalinstallBtn.textContent = "Instaling."
  }, 500);

   setTimeout(() => {
    terminalinstallBtn.textContent = "Instaling....."
  },600);

     setTimeout(() => {
      terminalIcon.style.display = "block";
      clickSound();
    terminalinstallBtn.textContent = "Installed";
    terminalinstallBtn.style.color = "blue";
  },800);
});


const botIcon = document.getElementById("open-bot");
const botinstallBtn = document.getElementById("bot-install-btn");
botinstallBtn.addEventListener("click", function(){
  setTimeout(() => {
    botinstallBtn.textContent = "Instaling.";
    botinstallBtn.style.color = "green";
  }, 100);

   setTimeout(() => {
    botinstallBtn.textContent = "Instaling....."
  }, 200);

    setTimeout(() => {
    botinstallBtn.textContent = "Instaling."
  }, 300);

   setTimeout(() => {
    botinstallBtn.textContent = "Instaling....."
  },400);

      setTimeout(() => {
    botinstallBtn.textContent = "Instaling."
  }, 500);

   setTimeout(() => {
    botinstallBtn.textContent = "Instaling....."
  },600);

     setTimeout(() => {
      botIcon.style.display = "block";
      clickSound();
    botinstallBtn.textContent = "Installed";
    botinstallBtn.style.color = "blue";
  },800);
});


const gameIcon = document.getElementById("open-game");
const gameinstallBtn = document.getElementById("game-install-btn");
gameinstallBtn.addEventListener("click", function(){
  setTimeout(() => {
    gameinstallBtn.textContent = "Instaling.";
    gameinstallBtn.style.color = "green";
  }, 100);

   setTimeout(() => {
    gameinstallBtn.textContent = "Instaling....."
  }, 200);

    setTimeout(() => {
    gameinstallBtn.textContent = "Instaling."
  }, 300);

   setTimeout(() => {
    gameinstallBtn.textContent = "Instaling....."
  },400);

      setTimeout(() => {
    gameinstallBtn.textContent = "Instaling."
  }, 500);

   setTimeout(() => {
    gameinstallBtn.textContent = "Instaling....."
  },600);

     setTimeout(() => {
      gameIcon.style.display = "block";
      clickSound();
    gameinstallBtn.textContent = "Installed";
    gameinstallBtn.style.color = "blue";
  },800);
});


const pianoIcon = document.getElementById("open-piano");
const pianoinstallBtn = document.getElementById("piano-install-btn");
pianoinstallBtn.addEventListener("click", function(){
  setTimeout(() => {
    pianoinstallBtn.textContent = "Instaling.";
    pianoinstallBtn.style.color = "green";
  }, 100);

   setTimeout(() => {
    pianoinstallBtn.textContent = "Instaling....."
  }, 200);

    setTimeout(() => {
    pianoinstallBtn.textContent = "Instaling."
  }, 300);

   setTimeout(() => {
    pianoinstallBtn.textContent = "Instaling....."
  },400);

      setTimeout(() => {
    pianoinstallBtn.textContent = "Instaling."
  }, 500);

   setTimeout(() => {
    pianoinstallBtn.textContent = "Instaling....."
  },600);

     setTimeout(() => {
      pianoIcon.style.display = "block";
      clickSound();
    pianoinstallBtn.textContent = "Installed";
    pianoinstallBtn.style.color = "blue";
  },800);
});