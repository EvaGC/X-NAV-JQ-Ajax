$("#first").click(function(){
	$.ajax({
		type: "GET",
		url:"texto.txt",
		beforeSend: function( xhr ) {
    xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
  }
})
	.done(function(text){
		$("#second").html(text);
	});
});