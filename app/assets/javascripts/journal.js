window.Journal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		var posts = new Journal.Collections.Posts();
		console.log(posts);
  }
};

$(document).ready(function(){
  Journal.initialize();
});
