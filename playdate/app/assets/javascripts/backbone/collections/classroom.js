var Classroom = Backbone.Collection.extend({
  initialize: function() {
    console.log('New Classroom Created');
  },
  model: Student,
  url: '/students'
});