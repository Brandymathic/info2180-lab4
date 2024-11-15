//Exercise 2 Implementation
document.getElementById("search-btn").addEventListener("click", function() {
    const httpRequest = new XMLHttpRequest();
    let url = "http://localhost/info2180-lab4/superheroes.php";
    
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                const response = httpRequest.responseText;
                alert(response); 
            } else {
                alert("There was a problem with the request");
            }
        }
    };

    httpRequest.open('GET', url);
    httpRequest.send();
});
