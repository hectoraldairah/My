$(document).ready(function () {
    $('#title').addClass('animated fadeIn');
    $('#quote-card').addClass('animated zoomIn');
    $('#video').addClass('animated zoomIn');
    var theQuote = '';
    var theAuthor = '';
    var theVideo = '';    
   newQuote();
  
   
    $('#button-1').on("click", function () {
        newQuote();
    });

    $('#button-2').on("click", function () {
        
        var twitterUrl = 'https://twitter.com/intent/tweet?text=' + theQuote + '\n' + "---" + theAuthor;
        window.open(twitterUrl, 'twitter');
        return false;
    });

    function newQuote()
    {
        var quotes = { 
          1: ['"You know the story about the scorpion and the frog? Your friend Nino didn\'t make it across the river."', '- Drive','//www.youtube.com/embed/BHVbbcHWX4k'],
          2: ['"This is from... Mathilda."', '- Leon the Professional','//www.youtube.com/embed/qbvgfEaC6GM'],
          3: ['"The first rule of Fight Club is: You do not talk about Fight Club."', '- Fight Club','//www.youtube.com/embed/UK9Sb5eOb6E'],
          4: ['"You talkin \' to me?"', '- Taxi Driver','//www.youtube.com/embed/Bx4aK-YsPeU'],
          5: ['"Why are you wearing that stupid bunny suit? \n Why are you wearing that stupid man suit?"', '- Donnie Darko','//www.youtube.com/embed/Lch96GIc-WM'],
          6: ['"You don\'t get to 500 million friends without making a few enemies."','- The Social Network','//www.youtube.com/embed/9SBNCYkSceU'],
          7: ['"City of Stars, are you shining just for me?"','- La la land','//www.youtube.com/embed/GTWqwSNQCcg'],
          8: ['"You\'re a wizard, Harry."','- Harry Potter and the Philosopher\'s Stone','https://www.youtube.com/embed/Htaj3o3JD8I']
        };

        var randomNumber = Math.ceil(Math.random() * Object.keys(quotes).length);
        

         theQuote = quotes[randomNumber][0];
         $('#quote').text(theQuote);

         theAuthor = quotes[randomNumber][1];
         $('#author').text(theAuthor);

         theVideo = quotes[randomNumber][2];
         console.log(theVideo);
         $('#video').attr("src" , theVideo);
         
    
    }
        
});
