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

var classroom1 = new Classroom([
	student1, student2])