var ClassroomView = Backbone.View.extend({
model: classroom1,
	el: $('.student-list'),
	initialize: function() {
		var self = this;
		this.model.on("add", this.render, this);
		this.model.on("change", function(){
			setTimeout(function(){
				self.render();
			}, 30);
		}, this);
		this.model.on("remove", this.render, this);
	},
	render: function() {
		var self = this;
		this.$el.html("");
		_.each(this.model.toArray(), function(student) {
			self.$el.append((new StudentsView({model:student})).render().$el)
		});
		return this;
	}
});

var studentsView = new StudentView();