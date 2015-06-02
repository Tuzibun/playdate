var StudentView = Backbone.View.extend({
	model: new Student(),
	tagName: "tr",
	initialize: function() {
		this.template = _.template($('student-list-template').html());
	},
	render: function() {
		this.$el.html(this.template({model: this.model.toJSON()}))
		return this;
	}
});