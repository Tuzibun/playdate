var StudentListView = Backbone.View.extend({
	model: students,
	el: $('student-list'),
	initialize: function() {
		this.model.on('add', this.render, this);
	},
	render: function() {
		var self = this;
		this.$el.html('');
		_each.(this.model.toArray(), function(student){
			self.$el.append((new StudentView({model:student})).render().$el)
		});
		return this;
	}
});


