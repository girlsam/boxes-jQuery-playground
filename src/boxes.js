$(document).ready(function() {
//Exercise One
  console.log("ready for DOM manipulation!");
//Exercise Two
//Find the secretBox on the page. Set the background color to white. Add an h1 tag that says, "secret box!"
  //$('#secretBox').css('background-color', 'white');
  //$('#secretBox').attr('h1','secret box!');

//Find all child divs of the first row. Set the class for each div to boxType3.
  //$('#row1 > div').removeClass('boxType1 boxType2 boxType3').addClass('boxType3');

//Make the last box in the last row disappear. (Hint, look into the display style. Also, you should only get back one element from your selector.).
  //$('#row4 > div').last().css('display', 'none');

//Change all red boxes to white.
  //$('.boxType1').css('background-color', 'white');

//Get the first two divs in the second row. Take away all styling from the divs
  //$('#row2 > div:lt(2)').removeClass();

//Get all divs inside the container that are not row divs and are not the secret box div. Set the width of the divs to 2 pixels.
  //  $("div").not("container row1 row2 row3 secretBox").css('width', '2px');

//Exercise Three
//Add an on click handler to the container div. Console log the x and y position of the click.
  // $(document).on("click", function(event) {
  // $(console.log("The X Coordinate is " + event.pageX + " and the Y Coordinate " + event.pageY));
  // });

//Add links inside all red box divs that take the user to galvanize. Then add an on click handler that alerts the user that you can never leave the page. Make sure the user won't leave the page after the alert! <<<Not sure if there's a way to do this in jquery, or I just need to instill in the clicker an insurmountable fear in god. I went with the latter.
  // $(".boxType1").html('<a href="http://www.galvanize.com">Galvanize</a>');
  // $(".boxType1").click(function() {
  // alert("Someone told me to tell you you can't leave here. Seriously, if you do Donald Trump will become president");
  // });

//For all box divs, add a click handler that adds an image of a cute puppy to the box. If the image is clicked again, remove the cute puppy.
$('.box').on("click", function() {
  $(this).html("<img src='http://cdn5.littlethings.com/app/uploads/2014/10/l-unamused-puppy.jpg'/>");
}, function() {
  $('.box > img').remove();
});

//Write a click handler on the container div. The click handler should turn the container background to black and the background of the original div that was clicked to white. If the user original div that was clicked happened to be the container div, change the background of the container div to lime green. You should not use any selectors for this exercise. You can do it completely with what is given to you in the event callback.
});
