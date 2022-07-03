canvas = document.getElementById('myCanvas');
 ctx = canvas.getContext("2d");
  rover_width = 200;
   rover_height = 150;
    background_image = "mars.jpg";
     rover_image = "rover.png";
      rover_x = 200;
       rover_y = 200;
function add(){
bg_imgTag=new Image();
bg_imgTag.onload=uploadBackground;
bg_imgTag.src=background_image;

rover_imgTag=new Image();
rover_imgTag.onload=uploadrover;
rover_imgTag.src=rover_image;
}
function uploadBackground(){
    ctx.drawImage(bg_imgTag,0,0,canvas.width,canvas.height);

}

function uploadrover()
 { ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
 }
window.addEventListener("keydown", my_keydown);
 function my_keydown(e)
  { 
    keyPressed = e.keyCode;
     console.log(keyPressed);
      if(keyPressed == '38')
       { up();
         console.log("up");
         } 
         if(keyPressed == '40') 
         { down();
             console.log("down");
             }
              if(keyPressed == '37') { 
                left();
                 console.log("left"); 
                }
                 if(keyPressed == '39') { 
                    right();
                     console.log("right");
                     }
                     }
