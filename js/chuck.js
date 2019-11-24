// GET CATEGORIES ----------------------------------------------------------
function showCategoriesJSON(callback) {   
    const url = "https://api.chucknorris.io/jokes/categories";
    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', url, true);
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }

 function showCategories() {
    showCategoriesJSON(function(response) {
       var actual_JSON = JSON.parse(response);  
       document.getElementById("categories").innerHTML = "";
       for(var i = 0; i<actual_JSON.length; i++){
            var node = document.createElement('button');
            var br = document.createElement("br");
            node.setAttribute("name", actual_JSON[i]);
            node.setAttribute("onclick", "completeInput(this.name)");
            var textnode = document.createTextNode(actual_JSON[i]);
            node.appendChild(textnode);
            document.getElementById("categories").appendChild(node);
            document.getElementById("categories").appendChild(br);
       }
    });
}

function completeInput(name){
    document.getElementById('jokeCat').value = name.toString();
}

// GET A JOKE FROM A SPECIFIC CATEGORY----------------------------------------
function getJokeCat(){
    var joke = document.getElementById("jokeCat").value;
    if (!joke){
        alert("This input cannot be empty! Please check the categories");
    }
    const urlCat = "https://api.chucknorris.io/jokes/random?category=" + joke;
    return urlCat;
}

function showJokeJSON(callback) {   
    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', getJokeCat(), true);
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
          }
    };
    xobj.send(null);
 }

function showJoke() {
    showJokeJSON(function(response) {
        var actual_JSON = JSON.parse(response);
        var image = '<img src="' + actual_JSON.icon_url + '" style="width: 30px; heigth: 30px;">';
        var joke = actual_JSON.value;
        var punchline = image + joke;
        document.getElementById("showJoke").innerHTML = punchline;

    });
}

// GET A RANDOM JOKE-----------------------------------------------------------
function showRandomJokeJSON(callback) { 
    const urlRandom = "https://api.chucknorris.io/jokes/random";  
    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', urlRandom, true);
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
          }
    };
    xobj.send(null);
 }

 function showRandomJoke() {
    showRandomJokeJSON(function(response) {
        var actual_JSON = JSON.parse(response);
        var image = '<img src="' + actual_JSON.icon_url + '" style="width: 30px; heigth: 30px;">';
        var joke = actual_JSON.value;
        var punchline = image + joke;
        document.getElementById("showJoke").innerHTML = punchline;

    });
}