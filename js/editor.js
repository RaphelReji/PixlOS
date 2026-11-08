const mainEditor = document.getElementById("main-window-editor");
const editingWindow =  document.getElementById("editing-window");

const editingWindowimg1 = document.getElementById('editing-window-img1');
const editingWindowimg2 = document.getElementById('editing-window-img2');
const editingWindowimg3 = document.getElementById('editing-window-img3');
const editingWindowimg4 = document.getElementById('editing-window-img4');
const editingWindowimg5 = document.getElementById('editing-window-img5');


function hideAllImages(){
  editingWindowimg1.style.display = "none";
  editingWindowimg2.style.display = "none";
  editingWindowimg3.style.display = "none";
  editingWindowimg4.style.display = "none";
  editingWindowimg5.style.display = "none";
}

const editImg1 = document.getElementById("img-editor-img1");
editImg1.addEventListener("click",function(){
  mainEditor.style.display = "none";
  editingWindow.style.display = "block";

  hideAllImages();

  editingWindowimg1.style.display = "block";

});

const img1backBtn = document.getElementById("img1-back");
img1backBtn.addEventListener("click", function(){
editingWindow.style.display = "none";
mainEditor.style.display = "block";
});



const editImg2 = document.getElementById("img-editor-img2");
editImg2.addEventListener("click",function(){
  mainEditor.style.display = "none";
  editingWindow.style.display = "block";
  hideAllImages();
  editingWindowimg2.style.display = "block";

});

const img2backBtn = document.getElementById("img2-back");
img2backBtn.addEventListener("click", function(){
editingWindow.style.display = "none";
mainEditor.style.display = "block";
});


const editImg3 = document.getElementById("img-editor-img3");
editImg3.addEventListener("click",function(){
  mainEditor.style.display = "none";
  editingWindow.style.display = "block";
  hideAllImages();
  editingWindowimg3.style.display = "block";

});

const img3backBtn = document.getElementById("img3-back");
img3backBtn.addEventListener("click", function(){
editingWindow.style.display = "none";
mainEditor.style.display = "block";
});


const editImg4 = document.getElementById("img-editor-img4");
editImg4.addEventListener("click",function(){
  mainEditor.style.display = "none";
  editingWindow.style.display = "block";
  hideAllImages();

  editingWindowimg4.style.display = "block";

});

const img4backBtn = document.getElementById("img4-back");
img4backBtn.addEventListener("click", function(){
editingWindow.style.display = "none";
mainEditor.style.display = "block";
});


const editImg5 = document.getElementById("img-editor-img5");
editImg5.addEventListener("click",function(){
  mainEditor.style.display = "none";
  editingWindow.style.display = "block";
  hideAllImages();
  editingWindowimg5.style.display = "block";

});

const img5backBtn = document.getElementById("img5-back");
img5backBtn.addEventListener("click", function(){
editingWindow.style.display = "none";
mainEditor.style.display = "block";
});

editingWindow.addEventListener("click", function(event){

  const button = event.target.closest(".filter-btn");

  if(!button){
    return;
  }

   const editingSection = button.closest(".editing-window-all");

  const image = editingSection.querySelector("img");

  const filter = button.dataset.filter;

  const filterText = editingSection.querySelector(".active-filter");
  filterText.textContent = "Current filter: " + button.textContent;

  if(filter ==="contrast"){
    image.style.filter = "contrast(150%)"
  }

  else if(filter ==="blur"){
    image.style.filter = "blur(3px)"
  }

  else if(filter ==="brightness"){
    image.style.filter = "brightness(130%)"
  }

  else if(filter ==="grayscale"){
    image.style.filter = "grayscale(100%)"
  }

   else if(filter ==="none"){
    image.style.filter = "none"
  }
});