var disp = document.getElementById("canvas")
var ctx = disp.getContext("2d")

disp.height = window.innerHeight*1.5
disp.width = window.innerWidth*1.5
var halfH = window.innerHeight*0.5
var halfW = window.innerWidth*0.5
var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/\\~{[|`'\"']}".split("")

var font_size = 15
var columns = disp.width/font_size

var drops = []
for(var x = 0; x < columns; x++) {
	drops[x] = 0
}

window.addEventListener("resize", function() {
	disp.height = window.innerHeight*1.5;
	disp.width = window.innerWidth*1.5;
	columns = disp.width/font_size;
	for(var x = 0; x < columns; x++) {
		if (!drops[x]) {
			drops[x] = 0
		}
	}
})

//drawing the characters
function draw() {
  ctx.fillStyle = "rgba(0, 0, 20, 0.15)";
  ctx.fillRect(0, 0, disp.width, disp.height);
  ctx.fillStyle = "#a19dfc";
  ctx.font = font_size + "px monospace";
  
  for(var i = 0; i < drops.length; i++) {
    if (drops[i] == 0) {
			if (Math.random() > 0.895) {
				drops[i] = 0
			} else {
				drops[i] = -1
			}
    } else {
      var text = matrix[Math.floor(Math.random()*matrix.length)];
      ctx.fillText(text, i*font_size, drops[i]*font_size);
    }

    if(drops[i]*font_size > disp.height)
      drops[i] = -1

    drops[i]++;
  }

	disp.style.left = Math.round((x-halfW)/20) + "px";
	disp.style.top = Math.round((y-halfH)/10) + "px";
}

setInterval(draw, 50)

var x = window.innerWidth/2
var y = window.innerHeight/2

document.body.addEventListener("mousemove", (event) => {
	x = event.clientX;
	y = event.clientY;
})