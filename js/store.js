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
      appsWindow.style.display = "block"
    }
  });
});


homeWindow.style.display ="block";
shopButtons[0].classList.add("active");