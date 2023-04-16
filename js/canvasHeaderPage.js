const canvas = document.querySelector(".main-header__canvas")
const ctx = canvas.getContext("2d")

canvas.height = 500
canvas.width = 425

const shieldImage = new Image()
shieldImage.height = canvas.height;
shieldImage.width = canvas.width;
shieldImage.src = "./images/shield.svg"

shieldImage.onload = function() {
    ctx.shadowBlur = 20;
    ctx.shadowColor = "white";
    ctx.drawImage(shieldImage, 0, 0,);
}
      
//// Draw the white parts of the shield
//ctx.fillStyle = "black";
//ctx.beginPath();
//ctx.moveTo(70, 40);
//ctx.lineTo(130, 40);
//ctx.lineTo(130, 80);
//ctx.lineTo(100, 100);
//ctx.lineTo(70, 80);
//ctx.closePath();
//ctx.fill();