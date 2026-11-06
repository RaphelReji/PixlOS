const mainEditor = document.getElementById("main-window-editor");
const editingWindow =  document.getElementById("editing-window");


const editImg1 = document.getElementById("img-editor-img1");
editImg1.addEventListener("click",function(){
  mainEditor.style.display = "none";
  editingWindow.style.display = "block";

});

const img1backBtn = document.getElementById("img1-back");
img1backBtn.addEventListener("click", function(){
editingWindow.style.display = "none";
mainEditor.style.display = "block";
});

const img1= document.getElementById("img-editing-img1");
const img1contrastBtn = document.getElementById("img1-editing-contrast");
img1contrastBtn.addEventListener("click", function(){
  img1.style.filter = blur(2);
});