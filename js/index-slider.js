"use strict";

// Des Variables pour pouvoir modifier facilement ce qui doit l'être
  
  var sliderImage = 1;
  var maxSliderImages = 3;
  var slider = document.querySelector('.index-slider');
  var sliderSecDuration = 6;
      
  // La fonction qui change les images. Peut pointer vers une image spécifique, ou bien être appelée vide, pour passer ç celle d'apres
  function changeImage(requiredImage) {
   
    var sliderTimeout; 
    // Début de l'algorithme  .
    if (!requiredImage && requiredImage != 0) { //Si nous n'avons pas spécifié une image
      if(sliderImage < maxSliderImages){// Si l'image n'est pas la dernière, on avance d'une image
        sliderImage++;
      } else{
        sliderImage = 1;//Si Nous sommes sur la dernière, on reviens au début 
      }
    } else { // Si nous avont spécifié une image
      if(requiredImage > maxSliderImages){//Si nous avont spécifié une image au dela de la dernière, on revient à la première
        sliderImage = 1;
      } else if(requiredImage < 1){ //Si nous avont spécifié une image 0 ou moins, on vas à la dernière image
      sliderImage = maxSliderImages;
      } else{
        sliderImage = requiredImage; // Sinon, on vas à l'image spécifiée.
      }
    }
    //On dis au slider à travers sa classe quel image il doit afficher
    slider.className = "image"+sliderImage;

    // On nettoie et relance le timeout
    clearTimeout(sliderTimeout);
    sliderTimeout = setTimeout("changeImage()",sliderSecDuration*1000);
  }
      
//Deux petites fonctions tres compréhensibles
  function nextImage(){
    changeImage(image+1);
  }
  function prevImage(){
    changeImage(image-1);
  }
      
  //On met le slide sur l'image par défaut, ici la 1ere
  changeImage(1);
 
