let sx = 50 
let sy = 50
let sd = "right"
let sl = 3
let st = []

function loop(){
  move()
}


function move(){
  switch(st){
    case "left":
      sx -= 10
      break;
      
    case "right":
       sx += 10
      break;
      
    case "up":
       sy += 10
      break;
      
    case "bottom":
      sy -=10
      break;
  }
}

window.onkeydown = function(e) {
   let c = e.key
   switch(c){
     case "31":
     case "32":
       break;
   }
}
