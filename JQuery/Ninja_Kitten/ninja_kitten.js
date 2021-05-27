$(document).ready(function () {
  $("img").click(function () {
    var image = $(this).attr("src");
    var kitten = $(this).attr("data-alt-src");
    $(this).attr("src", kitten);
    $(this).attr("data-alt-src", image);
  });
});