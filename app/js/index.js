
var color = $(".selected").css("background-color");
var context = $("canvas")[0].getContext("2d");
var $canvas = $("canvas") 
var lastEvent;
var mouseDown = false;

//Add or remove selected class
$(".controls").on('click', "li", function(){
	//deselect all sibling elemnts
	$(this).siblings().removeClass("selected");
	//select clicked element
	$(this).addClass("selected")
	//cache current color
	color = $(this).css("background-color");
});

//When new color is pressed
$("#revealColorSelect").click(function(){
	//show or hide color select
	changeColor()
	$("#colorSelect").toggle();
});

function changeColor(){
	var r = $("#red").val()
	var g = $("#green").val()
	var b = $("#blue").val()
	$("#newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")")
}

//when color sliders change update new color span
$("input[type=range]").change(changeColor)

//when add color is pressed add it
$("#addNewColor").click(function(){
	//append color to the control ui
	var $newColor = $("<li></li>")
	$newColor.css("background-color", $("#newColor").css("background-color"));
	$(".controls ul").append($newColor);
	$newColor.click();
});

//mouse event on canvas
$canvas.mousedown(function(e){
	lastEvent = e;
	mouseDown = true;
}).mousemove(function(e){
	//draw lines :) 
		if(mouseDown){
		context.beginPath();
		context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
		context.lineTo(e.offsetX, e.offsetY);
		context.strokeStyle = color;
		context.stroke();
		lastEvent = e;
	}
}).mouseup(function(){
	mouseDown = false;
});


