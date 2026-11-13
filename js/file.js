
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

const pcpicturesBtn = document.getElementById("pc-files-pictures");
const pcdocumentsBtn = document.getElementById("pc-files-documents");
const pcmusicBtn = document.getElementById("pc-files-music");
const pcvideosBtn = document.getElementById("pc-files-videos");
const pcdownloadBtn = document.getElementById("pc-files-downloads");
const  pcdeviceBtn = document.getElementById("pc-files-devices");


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

if(documentBtn){
  documentBtn.addEventListener("click", function(){
    thispcWindow.style.display = "none";
    documentsWindow.style.display = "flex";
    picturesWindow.style.display = "none";
    musicfileWindow.style.display = "none";
    videofileWindow.style.display = "none";
    downloadsWindow.style.display = "none";
    devicesWindow.style.display = "none";

    selectedfileText.textContent = "Documents"
  })
}

if(picturesBtn){
  picturesBtn.addEventListener("click", function(){
    thispcWindow.style.display = "none";
    documentsWindow.style.display = "none";
    picturesWindow.style.display = "flex";
    musicfileWindow.style.display = "none";
    videofileWindow.style.display = "none";
    downloadsWindow.style.display = "none";
    devicesWindow.style.display = "none";

    selectedfileText.textContent = "Pictures"
  })
}

if(musicBtn){
  musicBtn.addEventListener("click", function(){
    thispcWindow.style.display = "none";
    documentsWindow.style.display = "none";
    picturesWindow.style.display = "none";
    musicfileWindow.style.display = "flex";
    videofileWindow.style.display = "none";
    downloadsWindow.style.display = "none";
    devicesWindow.style.display = "none";

    selectedfileText.textContent = "Musics"
  })
}

if(videosBtn){
  videosBtn.addEventListener("click", function(){
    thispcWindow.style.display = "none";
    documentsWindow.style.display = "none";
    picturesWindow.style.display = "none";
    musicfileWindow.style.display = "none";
    videofileWindow.style.display = "flex";
    downloadsWindow.style.display = "none";
    devicesWindow.style.display = "none";

    selectedfileText.textContent = "Videos"
  })
}

if(downloadsBtn){
  downloadsBtn.addEventListener("click", function(){
    thispcWindow.style.display = "none";
    documentsWindow.style.display = "none";
    picturesWindow.style.display = "none";
    musicfileWindow.style.display = "none";
    videofileWindow.style.display = "none";
    downloadsWindow.style.display = "flex";
    devicesWindow.style.display = "none";

    selectedfileText.textContent = "Downloads"
  })
}

if(devicesBtn){
  devicesBtn.addEventListener("click", function(){
    thispcWindow.style.display = "none";
    documentsWindow.style.display = "none";
    picturesWindow.style.display = "none";
    musicfileWindow.style.display = "none";
    videofileWindow.style.display = "none";
    downloadsWindow.style.display = "none";
    devicesWindow.style.display = "flex";

    selectedfileText.textContent = "Devices"
  })
}



// this pc file
if(pcdocumentsBtn){
  pcdocumentsBtn.addEventListener("click", function(){
    thispcWindow.style.display = "none";
    documentsWindow.style.display = "flex";
    picturesWindow.style.display = "none";
    musicfileWindow.style.display = "none";
    videofileWindow.style.display = "none";
    downloadsWindow.style.display = "none";
    devicesWindow.style.display = "none";

    selectedfileText.textContent = "Documents"
  })
}

if(pcpicturesBtn){
  pcpicturesBtn.addEventListener("click", function(){
    thispcWindow.style.display = "none";
    documentsWindow.style.display = "none";
    picturesWindow.style.display = "flex";
    musicfileWindow.style.display = "none";
    videofileWindow.style.display = "none";
    downloadsWindow.style.display = "none";
    devicesWindow.style.display = "none";

    selectedfileText.textContent = "Pictures"
  })
}

if(pcmusicBtn){
  pcmusicBtn.addEventListener("click", function(){
    thispcWindow.style.display = "none";
    documentsWindow.style.display = "none";
    picturesWindow.style.display = "none";
    musicfileWindow.style.display = "flex";
    videofileWindow.style.display = "none";
    downloadsWindow.style.display = "none";
    devicesWindow.style.display = "none";

    selectedfileText.textContent = "Musics"
  })
}

if(pcvideosBtn){
  pcvideosBtn.addEventListener("click", function(){
    thispcWindow.style.display = "none";
    documentsWindow.style.display = "none";
    picturesWindow.style.display = "none";
    musicfileWindow.style.display = "none";
    videofileWindow.style.display = "flex";
    downloadsWindow.style.display = "none";
    devicesWindow.style.display = "none";

    selectedfileText.textContent = "Videos"
  })
}

if(pcdownloadBtn){
  pcdownloadBtn.addEventListener("click", function(){
    thispcWindow.style.display = "none";
    documentsWindow.style.display = "none";
    picturesWindow.style.display = "none";
    musicfileWindow.style.display = "none";
    videofileWindow.style.display = "none";
    downloadsWindow.style.display = "flex";
    devicesWindow.style.display = "none";

    selectedfileText.textContent = "Downloads"
  })
}

if(pcdeviceBtn){
  pcdeviceBtn.addEventListener("click", function(){
    thispcWindow.style.display = "none";
    documentsWindow.style.display = "none";
    picturesWindow.style.display = "none";
    musicfileWindow.style.display = "none";
    videofileWindow.style.display = "none";
    downloadsWindow.style.display = "none";
    devicesWindow.style.display = "flex";

    selectedfileText.textContent = "Devices"
  })
}