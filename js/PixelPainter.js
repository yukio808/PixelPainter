$(function(){

  function PixelPainter(height, width){

    var swatches = $('<div>', {"class" : "swatches"});
    // instantiate a loop to push a number of divs into our swatches div.
    var num_swatches = 25;
    var swatch_size = "20px";
    var square_size = "36px";

    for(var i = 0; i < num_swatches; i++) {
      var new_swatch = $('<div>', {"class" : "color"});
      new_swatch.css({
        'background-color' : color_str(),
        'height' : swatch_size,
        'width' : swatch_size
      });
      swatches.append(new_swatch);

    }

    var erase = $('<button>', {
      "id" : "erase",
      html : "erase"
    });
    var clear = $('<button>' ,{
      "id" : "clear",
      html : "clear"
    });

    $('#controls').append(swatches, erase, clear);
    // we have created the basic layout of the content div by appending all the neccessary tags
    var grid = $('<div>', {"class" : "grid"});
    var rowWidth = (Number(square_size.substring(0, square_size.length-2)) + 2) * width;
    console.log(square_size);


    for (var j = 0; j < height; j++) {
      for(var k = 0; k < width; k++) {
        var new_square = $('<div>', {"class" : "input"});
        new_square.css({
          'border' : "solid #000000 1px",
          'height' : square_size,
          'width' : square_size,
          'display' : 'inline-block'
        });
        grid.append(new_square);
      } 
    }
    $('.grid').css({'width' : rowWidth.toString() + 'px'});
    console.log(rowWidth);

    $('#artboard').append(grid);
  }

  function color_str (){
    var randomColor1 = Math.floor(Math.random() * 0xFF);
    var randomColor2 = Math.floor(Math.random() * 0xFF);
    var randomColor3 = Math.floor(Math.random() * 0xFF);

    return "rgb("+randomColor1+", "+randomColor2+", "+randomColor3+")";
  }


  PixelPainter(20, 20);


});//document.ready
