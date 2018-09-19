/* smooth scrolling */

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

  /* bouncy class */
           
$(document).ready(function(){
    setTimeout(function(){
        looper();
    }, 5000);
    setInterval(function(){
        looper();
    }, 60000);
});
        
function looper(x){
    var items = $('.nav-item');
    var shuffledItems = shuffle(items);
    $(shuffledItems).each(function(i){
        var x = $(this);
        setTimeout(function() {
            x.toggleClass('bounce');
        }, 5000*i);
    });
}
        
function shuffle(array) {
    var m = array.length, t, i;
    // While there remain elements to shuffle…
    while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}



