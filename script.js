window.addEventListener("load", function(){
	var top_button = document.getElementById("topButton");
	var cancel_button = document.getElementById("cancelButton")
	
	top_button.addEventListener("click", function(){
		var add_note = document.getElementsByClassName("m");
			add_note[0].style.display = "flex";
	});

	cancel_button.addEventListener("click", function(){
		var add_note = document.getElementsByClassName("m");
			add_note[0].style.display = "none";
	});

});