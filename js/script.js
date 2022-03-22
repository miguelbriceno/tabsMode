$(".nav-link").click(function(){
  $(".nav-link").removeClass("activeMenu");
  $(this).addClass("activeMenu");
  var selectedArticle = "#" + $(this).text().toLowerCase();
  $("article").removeClass("onTop");
  $(selectedArticle).addClass("onTop");
});
