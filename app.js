var disp = document.getElementById("canvas")
var ctx = disp.getContext("2d")

disp.height = window.innerHeight
disp.width = window.innerWidth
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
	let fr = document.getElementById("fr").value
	let bg = document.getElementById("bg").value+"26"
  ctx.fillStyle = bg; // rgba(0, 0, 20, 0.15)
  ctx.fillRect(0, 0, disp.width, disp.height);
  ctx.fillStyle = fr; // rgb(0, 0, 20)
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
}

setInterval(draw, 50)

document.getElementById("control").addEventListener("click", ()=>document.getElementById("panel").classList.toggle('hide'))
document.getElementById("mo").addEventListener('change', ()=>{
	if (document.getElementById("mo").checked) {
		disp.classList.add('no-mouse')
	} else {
		disp.classList.remove('no-mouse')
	}
})