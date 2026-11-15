
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
})