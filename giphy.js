

var gifSearches = ["Dogs", "Cats", "The Office", "Parks and Rec"];

function renderGifs() {

    var gify = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=qstL5suQ3qs005eQyRMVqrap6j9YAUTQ&q=" + gify + "&limit=10&offset=0&rating=G&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (gif) {
        console.log(gif);
     var gifsRendered = gif.data;

     for (var i = 0; i < gifsRendered.length; i++) {

        var gifDiv = $("<div>").addClass("card col-sm-3");
        var newP = $("<p>");

        var rating = gifsRendered[i].rating;
        newP.text("Rating: " + rating);

        var gifImage = $("<img>");

        gifImage.attr("src", gifsRendered[i].images.fixed_height.url);

        gifDiv.append(newP);
        gifDiv.append(gifImage);

        $(".giphy-render").prepend(gifDiv);

     }

    });
}

function renderButtons() {
    $(".button-area").empty();
    for (var i = 0; i < gifSearches.length; i++) {

        var selection = $("<button>").addClass("myGif").attr("data-name", gifSearches[i]).text(gifSearches[i]);

        $(".button-area").append(selection);



    }


}

$("#add-gif").on("click", function (event){
event.preventDefault();

var gif = $("#gif-input").val().trim();

gifSearches.push(gif);

renderButtons();


})

$(document).on("click", ".myGif", renderGifs);

renderButtons();
