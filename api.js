function ajax_get(url, callback) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      console.log('responseText:' + xmlhttp.responseText);
      try {
        var data = JSON.parse(xmlhttp.responseText);
      } catch (err) {
        console.log(err.message + " in " + xmlhttp.responseText);
        return;
      }
      callback(data);
    }
  };

  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

ajax_get('https://api.thecatapi.com/v1/images/search?size=full&fbclid=IwAR0Awb4WpaxrUrer38Xc4iH7o34yngNyjt2v0PG89yTFqwU5uL_623lXtBM', function(data) {
  document.getElementById("id").innerHTML += data[0]["id"];
  document.getElementById("url").innerHTML += data[0]["url"];

  document.getElementById("targetImage").setAttribute("src",data[0]["url"]);
});
