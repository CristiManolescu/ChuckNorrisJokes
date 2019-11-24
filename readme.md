# ChuckNorrisJokes

ChuckNorrisJokes is an project for the interview challenge.
This script is doing requests on api.chucknorris.io to get different informations.

# How to run

Run it in any browser to see the final result. Run Visual Code or any other IDE to see the whole code.

# API Endpoints

**Get jokes categories**
----
  Get all the categories.

* **URL**
https://api.chucknorris.io/jokes/categories

* **Method:**
  `GET`

* **Success Response:**

  * **Code:** 200
  *  **Content:** `
        [
    "animal",
    "career",
    "celebrity",
    "dev",
    "explicit",
    "fashion",
    "food",
    "history",
    "money",
    "movie",
    "music",
    "political",
    "religion",
    "science",
    "sport",
    "travel"
    ]
    `

* **Sample Call:**

```sh
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
```

**Get a random joke by category**
----
  Allow the user to get only a random joke from a specific category.

* **URL**
  https://api.chucknorris.io/jokes/random?category={category}

* **Method:**
  `GET`

*  **URL Params**
   **Required:**
   `category=[string]`

* **Success Response:**

  * **Code:** 200
  *  **Content:** `
{
    "categories": [
        "animal"
    ],
    "created_at": "2016-05-01 10:51:41.584544",
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "bmom6jqftpqgokh8adtolw",
    "updated_at": "2016-05-01 10:51:41.584544",
    "url": "https://api.chucknorris.io/jokes/bmom6jqftpqgokh8adtolw",
    "value": "Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower."
}
    `

* **Sample Call:**

```sh
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
```