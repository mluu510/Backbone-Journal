Journal.Views.PostsIndex = Backbone.View.extend({

  template: JST['posts/index'],

	initialize: function() {
		this.listenTo(Journal.Data.posts, "add", this.render);
	},

	events: {
		'click button.destroy' : "handleDestroy"
	},

	render: function() {
		var content = this.template({ posts: this.collection });
		this.$el.html(content);
		return this;
	},

	handleDestroy: function(event) {
		var id = $(event.target).data('id');
		var post = this.collection.get(id);
		post.destroy();
	}

});
