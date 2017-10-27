$(document).ready(function() {
	$(document).on("click", "#submit", insertEvent);

	// var newURL = sanitized(event_name)

	// function sanitize(event_name) {
	//   var event_name = event_name.replace(/\s+/g, '');
	//   var event_name = event_name.toLowerCase();
	//   return event_name;
	// }


	// function getEvents(){
	// 	$.get("/api/events", function(data){
	// 		events = data;
	// 	});
	// }

	function insertEvent(event){
		event.preventDefault();
		var newEvent = {
			event_host: $("#inputHost").val().trim(),
	        event_location: $("#inputLocation").val().trim(),
	        event_name: $("#inputName").val().trim(),
	        event_description: $("#inputDescription").val().trim(),
	        event_keyword1: $("#inputKeyword1").val().trim(),
	        event_keyword2: $("#inputKeyword2").val().trim(),
	        event_keyword3: $("#inputKeyword3").val().trim()
		};
		$.post("/api/events", newEvent);
		
		var unsanitized_event_name = $("#inputName").val().trim();
		// var unsanitized_event_name = "test event";

		function sanitize(event_name) {
		  var event_name = event_name.replace(/\s+/g, '');
		  var event_name = event_name.toLowerCase();
		  console.log(event_name);
		  return event_name;
		}
		var newURL = sanitize(unsanitized_event_name);
		var finalURL = '/event/' + newURL;
		console.log(finalURL);
		window.location.replace(finalURL);
	}
});
