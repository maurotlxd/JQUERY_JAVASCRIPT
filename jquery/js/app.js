$(function(){
$(document).on("click","#seleccion_elementos",funcion_text);
$(document).on("click","#btn1",recorrer_dom);

function recorrer_dom(){
	console.log($(this).next("button"))
	console.log($(".padre").children())
	console.log($(this).siblings())
	console.log($(this).parent())
	console.log($(this).closest("div"))
}

function funcion_file(){
	var file = $(":file")
	for (var i = 0; i < file.length; i++) {
		console.log(file[i])
	}
	$.each(file,function(index,element){
		console.log(element)
	});
}

function funcion_checkbox(){
	var checkbox = $(":checkbox")
	for (var i = 0; i < checkbox.length; i++) {
		console.log(checkbox[i])
	}
	$.each(checkbox,function(index,element){
		console.log(element)
	});
}

function funcion_checked(){
	var checkbox = $(":checked")
	for (var i = 0; i < checkbox.length; i++) {
		console.log(checkbox[i])
	}
	$.each(checkbox,function(index,element){
		console.log(element)
	});
}
function funcion_text(){
	var text = $(":text.campo")
	for (var i = 0; i < text.length; i++) {
		console.log(text[i])
	}
	$.each(text,function(index,element){
		console.log(element)
	});
}





































	$("#boton").click(function(){
		$("#data").toggle()
	});
	$("#boton2").click(function(){
		$("#data").show()
	});
	$("#boton1").click(function(){
		$("#data").hide()
	});
		$("#boton3").click(function(){
		$("#data").fadeIn(4000)
	});
		$("#boton4").click(function(){
		$("#data").fadeOut(4000)
	});
		$("#boton5").click(function(){
		//$("#data").fadeTo('slow',1)
		$("#data").fadeTo(3000, .25)
	});

		$("#boton6").click(function(){
		//$("#data").fadeTo('slow',1)
	

		$("#data").animate({height : 550}, "slow").animate({ width : 150},"slow")
 
});
	$("#boton7").click(function(){
		//$("#data").fadeTo('slow',1)
		$("#data").html("<h1>MAURO ENRIQUE CANALES ZAPATA</h1>")
	});
$("#boton8").click(function(){
		//$("#data").fadeTo('slow',1)
		$("#data").append("<h1>APPEND</h1>")
	});

$("#boton9").click(function(){
		//$("#data").fadeTo('slow',1)
		$("#data").prepend("<h1>PREPEND</h1>")
	});
$("#boton10").click(function(){
		//$("#data").fadeTo('slow',1)
		$("#data").before("<h1>BEFORE</h1>")
	});
$("#boton11").click(function(){
		//$("#data").fadeTo('slow',1)
		$("#data").after("<h1>AFTER</h1>")
	});

$("#boton12").click(function(){
		//$("#data").fadeTo('slow',1)
		$("#data").css({ 
			backgroundColor : "red",
			borderRadius : "3px",
			border : "2px solid blue" ,
			fontSize : "1.2em",
			fontWeight	 : "bold"
		});
	});
$("#boton13").on({
	click:function(){
		alert("click")
	},
	mouseover:function(){
		$(".cuadrado").css("background-color","blue")
	},
	mouseout:function(){
		$(".cuadrado").css("background-color","yellow")
	}
})



$(document).on("keyup",function(event){

	switch(event.keyCode){
		case 37:
		event.preventDefault();
			$(".cuadrado").animate({ left: "-=2rem"},"slow")
			break
		case 39:
		event.preventDefault();
			$(".cuadrado").animate({ left: "+=2rem"},"slow")
			break
		case 38:
		event.preventDefault();
			$(".cuadrado").animate({ top: "-=2rem"},"slow")
			break

		case 40:
		event.preventDefault();
			$(".cuadrado").animate({ top: "+=2rem"},"slow")
			break
	}
});



$(document).on("click",".subir",function(){
	$("html,body").animate({ scrollTop : 0,scrollLeft : 0},1000)
});




});

$(window).on("scroll",detectarScroll);

function detectarScroll(event){
	//console.log($(window).scrollLeft())
	console.log($(window).scrollTop())
	//console.log($(".cuadrado").offset().top)

	if ($(window).scrollTop() > 600){
		$(".subir").css({display : "block"})
	}else{
		$(".subir").css({display : "none"})
	}
}