$(document).ready(function () {
    $('#title').addClass('animated fadeIn');
    $('#quote-card').addClass('animated zoomIn');
    var theQuote = '';
    var theAuthor = '';
   newQuote();

    $('#button-1').on("click", function () {
        newQuote();
    });

    $('#button-2').on("click", function () {
        var twitterUrl = 'https://twitter.com/intent/tweet?text=' + theQuote + ' ' + theAuthor;
        window.open(twitterUrl, 'twitter');
        return false;
    });

    function newQuote()
    {
        var quotes = { 
          1: [' You know the story about the scorpion and the frog? Your friend Nino didn\'t make it across the river.', 'Drive'],
          2: [' This is from... Mathilda.', 'Leon the Professional'],
          3: ['The first rule of Fight Club is: You do not talk about Fight Club.', 'Fight Club'],
          4: ['You talkin \' to me?.', 'Taxi Driver'],
          5: [],
          6: [],
          7: [],
          8: [],
          9: [],
          19: []

        };

        var randomNumber = Math.ceil(Math.random() * Object.keys(quotes).length);

         var theQuote = $('#quote').text(quotes[randomNumber][0]);
         var theAuthor = $('#author').text(quotes[randomNumber][1]);
       
       
    }
        
});
