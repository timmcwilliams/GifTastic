alert("hello");


    var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";

    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
  });
    $("#sports-view").html("<h1>" + JSON.stringify(response)) + "Sports Details</h1>";// new from Code School

});