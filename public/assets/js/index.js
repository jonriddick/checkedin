$(document).ready(function() {
	$(document).on("click", "#submit", insertEvent);

	function getEvents(){
		$.get("/api/events", function(data){
			events = data;
		});
	}

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
		$.post("/api/events", newEvent, getEvents);
		$("#inputHost").val("");
		$("#inputLocation").val("");
		$("#inputName").val("");
		$("#inputDescription").val("");
		$("#inputKeyword1").val("");
		$("#inputKeyword2").val("");
		$("#inputKeyword3").val("");
		window,location.url = result.eventUrlName
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