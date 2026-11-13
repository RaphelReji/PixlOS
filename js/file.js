
const thispcBtn = document.getElementById("file-btn-thispc");
const  documentBtn = document.getElementById("file-btn-documents");
const  picturesBtn = document.getElementById("file-btn-pictures");
const musicBtn = document.getElementById("file-btn-music");
const videosBtn = document.getElementById("file-btn-videos");
const downloadsBtn = document.getElementById("file-btn-downloads");
const devicesBtn = document.getElementById("file-btn-devices");


const thispcWindow = document.getElementById("thispc-filewindow");
const documentsWindow = document.getElementById("documents-filewindow");
const picturesWindow = document.getElementById("pictures-filewindow");
const musicfileWindow = document.getElementById("music-filewindow");
const  videofileWindow = document.getElementById("videos-filewindow");
const  downloadsWindow = document.getElementById("downloads-filewindow");
const devicesWindow = document.getElementById("devices-filewindow");


const previousfileBtn = document.getElementById("previous-file");
const selectedfileText = document.getElementById("selected-file-show");

if(thispcBtn){
  thispcBtn.addEventListener("click", function(){
    thispcWindow.style.display = "flex";
    documentsWindow.style.display = "none";
    picturesWindow.style.display = "none";
    musicfileWindow.style.display = "none";
    videofileWindow.style.display = "none";
    downloadsWindow.style.display = "none";
    devicesWindow.style.display = "none";

    selectedfileText.textContent = "This Pc"
  })
}