window.Journal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		var posts = new Journal.Collections.Posts();
		posts.fetch({
			success: function() {
				console.log(posts);
			}
		});
		var postsIndexView = new Journal.Views.PostsIndex({ collection: posts });
		$('.content').html(postsIndexView.render().$el);
  }
};

$(document).ready(function(){
  Journal.initialize();
});
