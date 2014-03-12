Journal.Views.PostsIndex = Backbone.View.extend({

  template: JST['posts/index'],

	render: function() {
		var content = this.template({ posts: this.collection });
		this.$el.html(content);
		return this
	}

});
