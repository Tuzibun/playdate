var Student = Backbone.Model.extend({
  initialize: function(){
    console.log('New Student Model Created');
  },
  defaults: {
    first_name: '',
		last_name: '',
		gender: '',
		image: '',
		classroom: '',
		parent1: '',
		parent2: ''
  },
  urlRoot: '/students'
});