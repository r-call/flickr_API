$(document).ready(function(){
  
  $("#main-pic").click(function(){
    $('#main-pic').attr('src','assets/2.png');
    alert("main-pic clicked");
  });

  var rotateImages;

  $("#get-photos").submit(function (event) {
    event.preventDefault();
    var searchTerm = $("#sbx").val();
    var Flickurl = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=b53dad880669082a429ac3bcd133b682";
    var tags = "&tags=" + searchTerm;
    var tagmode = "&tagmode=any";
    var jsonFormat = "&format=json&nojsoncallback=1";
    var FinalURL = Flickurl + tags + tagmode + jsonFormat;
    $.getJSON(FinalURL, function(photos) {
      var i = 0;
      
      clearInterval(rotateImages);
      rotateImages = setInterval(function(){

        var photo = photos.photos.photo[i];
        i+=1;
        console.log(photo);
           
        var photoUrl = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg";
           
        $('#main-pic').attr('src', photoUrl);

      }, 1000);
  

      $("#st-btn").unbind().click(function(){
        alert("stop button");
        clearInterval(rotateImages);
      });

    });   
    

  });

});

