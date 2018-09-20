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
    }, 30000);
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

        $(document).ready(function(){
            var clicked = true;
            $('#links').click(function(){
                if (clicked === true){
                    $('#socials').stop().fadeIn(800);
                    clicked = false;

                }else{
                    $('#socials').stop().fadeOut(800);
                    clicked = true;
                }
            });
        });
      
        
   $(document).ready(function(){
        $('.nav-item').click(function(){
            $(this).next().fadeIn(800);
            // save hash in url in case back button is pushed
            var elementID = $(this).attr('id');
            elementID = '#' + elementID;
            // if back button is pushed, close box
            window.onpopstate = function(event) {
                if (!(window.location.hash === elementID)){
                     $('.content-box').fadeOut(100);
                }
            }
        });
       // else, close box with 'x'
        $('.boxclose').click(function(){
            $('.content-box').fadeOut(100);
            // then remove hash from url
            removeHash();
        });
   });
        
function removeHash () { 
    // treat box close like a back button
    window.history.back();
}
        



