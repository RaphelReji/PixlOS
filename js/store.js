
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