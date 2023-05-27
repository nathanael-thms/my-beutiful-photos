document.getElementById("myVideo").controls = false;
             
             /*
             var elem = document.getElementById("myvideo");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
   /* elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    /*elem.msRequestFullscreen();
  }
}*/
             
             function playPause() { 
  if (video1.paused){ 
    video1.play(); 
  }
  else {
    video1.pause(); 
} 
             
                 
             }
             function muteUnmute() {
                 
                 if(video1.muted===true){
                     
                     video1.muted=false;
                 }
                 
                 else{
                     
                     video1.muted=true;
                 }
             }
             
             
              function playPause1() { 
                  if (video2.paused){ 
                    video2.play(); 
                  }
                  else {
                    video2.pause(); 
                } 
             
                 
             }
             function muteUnmute1() {
                 
                 if(video2.muted===true){
                     
                     video2.muted=false;
                 }
                 
                 else{
                     
                     video2.muted=true;
                 }
             }
             
             
             
           
            
           