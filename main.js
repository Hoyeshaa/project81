canvas = document.getElementById("My_canvas");
red = "red";
blue = "blue";
black = "black";
yellow = "yellow";
green = "green"
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = red;
ctx.lineWidth = 4;
ctx.arc(600, 200, 40, 0, 2*Math.PI);
ctx.stroke();

ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = blue;
ctx.lineWidth = 4;
ctx.arc(400, 200, 40, 0, 2*Math.PI);
ctx.stroke();

ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = black;
ctx.lineWidth = 4;
ctx.arc(500, 200, 40, 0, 2*Math.PI);
ctx.stroke();

ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = yellow;
ctx.lineWidth = 4;
ctx.arc(450, 230, 40, 0, 2*Math.PI);
ctx.stroke();

ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = green;
ctx.lineWidth = 4;
ctx.arc(550, 230, 40, 0, 2*Math.PI);
ctx.stroke();