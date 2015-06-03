// Instantiate a classroom:
var classroom1 = new Classroom();

// Add a student:
$(document).ready(function(){
	console.log("at least it got here");
	$(".add-student").on("click", function() {
		var student = new Student({
			first_name: $('.first_name-input').val(),
			last_name: $('.last_name-input').val(),
			gender: $('.gender-input').val(),
			classroom: $('.classrom-input').val(),
			image: $('.image-input').val(),
			parent1: $('.parent1-input').val(),
			parent2: $('.parent2-input').val()
		});
		$('.first_name-input').val(""),
		$('.last_name-input').val(""),
		$('.gender-input').val(""),
		$('.classrom-input').val(""),
		$('.image-input').val(""),
		$('.parent1-input').val(""),
		$('.parent2-input').val("")
		console.log(student.toJSON());
		classroom1.add(student);
	})
});

//seeds
var student1 = new Student({
	first_name: "Mickey",
	last_name: "Mouse",
	gender: "male",
	image: " ",
	classroom: "classroom1",
	parent1: "Walt",
	parent2: "Lillian" 
	});

var student2 = new Student({
	first_name: "River",
	last_name: "Song",
	gender: "female",
	image: " ",
	classroom: "classroom1",
	parent1: "Amelia",
	parent2: "Rory"
	});
