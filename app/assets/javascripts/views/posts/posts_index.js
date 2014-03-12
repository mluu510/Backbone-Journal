Journal.Views.PostsIndex = Backbone.View.extend({

  template: JST['posts/index'],

	initialize: function() {
		this.listenTo(Journal.Data.posts, "add", this.render);
	},

	render: function() {
		var content = this.template({ posts: this.collection });
		this.$el.html(content);
		return this;
	}

});
