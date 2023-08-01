document.getElementById("gameSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  console.log("Entering javascript function")
  const value = document.getElementById("gameName").value;
  if (value === "")
    return;
  console.log("Value entered by user: " + value);
  const url = "https://www.cheapshark.com/api/1.0/games?title=" + value;
  console.log("Here is the url being sent to the API: " + url);
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
        let results = "";
        results += '<h2>Here are CheapShark\'s games that match "' + value + '"</h2>';
        for (let i = 0; i < json.length; i++) {
            results += '<table class=\"column\">'
            results += '<tr><td><h4>' + json[i].external + '</h4></td></tr>';
            results += '<tr><td><img src="' + json[i].thumb + '"></img></td></tr>';
            results += '<tr><td><h5>Cheapest Price: $' + json[i].cheapest + '</h5></td></tr>';
            results += '</table>'
        }
        if (results === "") {
            results += "There are no games in their catalog matching " + value;
        }
        document.getElementById("gameResults").innerHTML = results;
    });
});