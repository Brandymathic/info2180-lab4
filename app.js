const httpRequest = new XMLHttpRequest();
let url = "http://localhost/info2180-lab4/superheroes.php";
httpRequest.open('GET', url, true);
httpRequest.send();

document.getElementById("search-btn").addEventListener("click", function() {
  
  httpRequest.onreadystatechange = function() {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
          if (httpRequest.status === 200) {
              const response = httpRequest.responseText;
              alert(response); // Display the list of superheroes in an alert
          } else {
              alert("There was a problem with the request");
          }
      }
  };

});
