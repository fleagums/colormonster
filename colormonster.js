$(document).ready(function() {
  $("header").append('<a id="color-monster" href="#">Random Color Palette</a><div id="palette-name"></div>');

  $('#color-monster').click(function() {
    $.getJSON("random-palette.php", function(data) {
        $('#palette-name').html("Current palette is: " + data[0].title);
        var colors = data[0].colors;
        for (var i in colors) {
            var color = '#' + colors[i];
            if (i == 0) {
          $('body').css("background-color", color);
            }
            if (i == 1) {
          $('h1').css("color", color);
            }
            if (i == 2) {
          $('h2, h3').css("color", color);
            }
            if (i == 3) {
          $('p').css("color", color);
            }
            if (i == 4) {
          $('a').css("color", color);
            }
        }
    });
  });
});
