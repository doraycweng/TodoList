$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// every single character has a key and enter is 13
		//grabbing bew todo text from input
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash-alt'></i></span> " + todoText + "</li>");
	}
})

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
})