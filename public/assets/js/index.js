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
		// $("#inputHost").val("");
		// $("#inputLocation").val("");
		// $("#inputName").val("");
		// $("#inputDescription").val("");
		// $("#inputKeyword1").val("");
		// $("#inputKeyword2").val("");
		// $("#inputKeyword3").val("");
		// window.location.url = result.eventUrlName
		
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

	// function getUsers(){
	// 	$.get("/api/users", function(data){
	// 		events = data;
	// 	});
	// }

	// function insertUser(event){
	// 	event.preventDefault();
	// 	var newUser = {
	// 		linkedin_id: ${req.body.user._json.id}.trim(),
	// 		first_name: ${req.body.user._json.name.firstName}.trim(),
	// 		last_name: ${req.body.user._json.name.lastName}.trim(),
	// 		picture: ${req.body.user._json.pictureUrl}.trim(),
	// 		email: ${req.body.user._json.emailAddress}.trim()   
	// 	};


	// 	$.post("/api/events", newUser, getEvents);
	// 	// $("#inputHost").val("");
	// 	// $("#inputLocation").val("");
	// 	// $("#inputName").val("");
	// 	// $("#inputDescription").val("");
	// 	// $("#inputKeyword1").val("");
	// 	// $("#inputKeyword2").val("");
	// 	// $("#inputKeyword3").val("");
	// }
	// function newURL(req, res){
	// 	res.redirect("event");
	// }
	// newURL();
});

	// $("#submit").on("submit", function (event) {
 //        event.preventDefault();

 //        // Make sure to preventDefault on a submit event.
 //        var newEvent = {
 //            event_host: $("#inputHost").val().trim(),
 //            event_location: $("#inputLocation").val().trim(),
 //            event_name: $("#inputName").val().trim(),
 //            event_description: $("#inputDescription").val().trim(),
 //            event_keyword1: $("#inputKeyword1").val().trim(),
 //            event_keyword2: $("#inputKeyword2").val().trim(),
 //            event_keyword3: $("#inputKeyword3").val().trim()
 //        };
 //        console.log(newEvent);
 //        // Send the POST request to add event.
 //        $.ajax("/api/events", {
 //            type: "POST",
 //            data: newEvent
 //        }).then(
 //            function () {
 //                console.log("added new event");
 //                // Reload the page to get the updated list
 //                // location.reload();

 //            }
 //        );

 //        $("#inputHost").empty();
 //        // $("#").empty();
 //        // $("#").empty();
 //        // $("#").empty();
 //        // $("#").empty();
 //        // $("#").empty();
 //        // $("#").empty();
 //    });
//};