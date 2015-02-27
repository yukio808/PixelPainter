$(function(){

  function PixelPainter(height, width){

    var swatches = $('<div>', {"class" : "swatches"});
    // instantiate a loop to push a number of divs into our swatches div.
    var num_swatches = 25;
    var swatch_size = "20px";
    var square_size = "36px";

    var colors = [
      "rgb(243, 67, 222)",
      "rgb(47, 238, 218)", 
      "rgb(176, 245, 109)", 
      "rgb(29, 242, 87)", 
      "rgb(61, 138, 218)", 
      "rgb(188, 226, 136)", 
      "rgb(173, 180, 104)", 
      "rgb(72, 40, 234)", 
      "rgb(24, 166, 37)", 
      "rgb(222, 2, 50)", 
      "rgb(134, 92, 174)", 
      "rgb(219, 170, 207)", 
      "rgb(75, 136, 51)", 
      "rgb(194, 94, 98)", 
      "rgb(29, 112, 157)", 
      "rgb(137, 237, 183)", 
      "rgb(218, 65, 168)", 
      "rgb(187, 18, 211)", 
      "rgb(93, 87, 175)", 
      "rgb(66, 221, 132)", 
      "rgb(2, 224, 217)", 
      "rgb(47, 108, 101)", 
      "rgb(25, 142, 52)", 
      "rgb(127, 172, 154)", 
      "rgb(122, 191, 12)"
    ];

    for(var i = 0; i < num_swatches; i++) {
      var new_swatch = $('<div>', {"class" : "color"});
      new_swatch.css({
        'background-color' : colors[i],
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
    // console.log((Number(square_size.substring(0, square_size.length-2)) + 2) * width);


    for (var j = 0; j < height; j++) {
      for(var k = 0; k < width; k++) {
        var new_square = $('<div>', {"class" : "square"});
        new_square.css({
          'border' : "solid #000000 1px",
          'height' : square_size,
          'width' : square_size,
          'display' : 'inline-block'
        });
        grid.append(new_square);
      } 
    }
    // console.log(rowWidth.toString() + 'px');
    $('#artboard').append(grid);
    // we instantiated the width of the .grid to early because the functiuon did not even create the grid till after we defined the width that did not apply because it applied to an imaginary div.grid
    $('.grid').css({"width" : rowWidth.toString() + "px"});
  }

  function color_str (){
    // var randomColor1 = Math.floor(Math.random() * 0xFF);
    // var randomColor2 = Math.floor(Math.random() * 0xFF);
    // var randomColor3 = Math.floor(Math.random() * 0xFF);

    // return "rgb("+randomColor1+", "+randomColor2+", "+randomColor3+")";


  }


  PixelPainter(20, 20);

  $('#clear').click(function(){
    $('.square').css({"background-color" : "#FFFFFF"});
  });

  // added a function to clear the board of all css colors other than white.
  var curr_color = "rgb(255, 255, 255)";
  $('.color').click(function(){
    curr_color = $(this).css("background-color");
    $('.color').css({"border" : "none"});
    $(this).css({"border" : "solid #000000 1px"});
  });

  $('.square').click(function (){
    $(this).css({"background-color" : curr_color});
  });

  $('#erase').click(function(){
    curr_color = "rgb(255, 255, 255)";
  });

});//document.ready
