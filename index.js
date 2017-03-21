$(document).ready(function(){
	$.ajax({
		type: "GET",
		url:"texto.txt"
	}).done(function(text){
		$("#second").html(text);
	});
});