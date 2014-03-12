window.Journal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
	Data: {},
  initialize: function() {
		Journal.Data.posts = new Journal.Collections.Posts();
		Journal.Data.posts.fetch();
		var postsIndexView = new Journal.Views.PostsIndex({ collection: Journal.Data.posts });
		$('#content').html(postsIndexView.render().$el);
  }
};

$(document).ready(function(){
  Journal.initialize();
});
