var mouseEvent = "empty";

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("Color").value;
    width_of_line = document.getElementById("Width_of_line").value;
    radius = document.getElementById("Radius").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e)
{
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e)
{
    mouseEvent = "mouseLeave"
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e)
{
    current_position_of_X = e.clientX - canvas.offsetLeft;
    current_position_of_Y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
       
       console.log("Current_X_and_Y_Coordinates_To_The_Variable =");
       console.log("x = " + current_position_of_X + "y = " + current_position_of_Y);

       ctx.beginPath();
       ctx.strokeStyle = color;
       ctx.lineWidth = width_of_line;
       ctx.arc(current_position_of_X, current_position_of_Y, radius, 0, 2*Math.PI);
       ctx.stroke();

    }
}