const startButton = document.getElementById("start-button");
const welcomeScreen = document.getElementById("welcome-screen");
const desktop = document.getElementById("desktop");

const bootScreen = document.getElementById("boot-screen");
const bootText = document.getElementById("boot-text");
const bootMusic = document.getElementById("boot-mp3");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("boot-progress-bar");

startButton.addEventListener("click", function(){

  welcomeScreen.style.display = "none";
  bootScreen.style.display = "flex";

  bootMusic.play();

  let progress=0

  const loading = setInterval(function(){

    progress++;

    progressText.textContent = progress + "%";
    progressBar.style.width = progress + "%";

    if(progress>=100){

      clearInterval(loading);

      bootScreen.style.display = "none";
      desktop.style.display = "block";

      bootMusic.pause();
      bootMusic.currentTime= 0;

    }

  },50);

  bootText.textContent = "> Starting PIXLOS...";

  setTimeout(function(){

        bootText.textContent =
            "> Starting PIXLOS...\n> Loading desktop...";

    }, 1000);

   setTimeout(function(){

        bootText.textContent =
            "> Starting PIXLOS...\n> Loading desktop... \n> Fetching data...";

    }, 1500);

       setTimeout(function(){

        bootText.textContent =
            "> Starting PIXLOS...\n> Loading desktop... \n> Fetching data... \n> Connecting......";

    }, 2000);



    setTimeout(function(){

        bootText.textContent =
            "> Starting PIXLOS...\n> Loading desktop... \n> Fetching data... \n> Connecting...... \n> Server located...";

    }, 2500);


    setTimeout(function(){

        bootText.textContent =
            "> Starting PIXLOS...\n> Loading desktop... \n> Fetching data... \n> Connecting...... \n> Server located... \n> Running Commands...";

    }, 3000);


    setTimeout(function(){

        bootText.textContent =
            "> Starting PIXLOS...\n> Loading desktop... \n> Fetching data... \n> Connecting...... \n> Server located... \n> Running Commands... \n> Instalising.....";

    }, 3500);


});