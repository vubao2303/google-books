# Google-Book
Full stack React-app - MERN
M - MongoDB: A document-based open source database
E - Express: A Fast, unopinionated, minimalist web framework for Node.js
N - Node.js: Node.js is a JavaScript runtime built on Chrome’s V8 JavaScript engine. Node.js brings JavaScript to the server
R - React: A JavaScript front-end library for building user interfaces

A book search engine that utilizes Google's Books API, which allows the user to search for a book (initially by title, but I found that author works as well) which they can save to a 'saved books list' or view the book(s) in the Google Play Store. The application displays a picture of the cover accompanied by the title, author(s), and a brief description.

![Site Picture](public/css/pictures/readme.png)  

## Table of Contents 


|                                              |                                         |                            |
| :------------------------------------------: | :-------------------------------------: | :------------------------: |
| [Project Introduction](#fullstack-portfolio) | [Table of Contents](#table-of-contents) | [Heroku](#heroku-deployed) | [Description of Page Building](#Description-of-Page-Building) | [Code Snippets](#code-snippet) |
|   [Technologies Used](#Technologies-Used)    |            [Author](#author)            |    [License](#License)     |

---

## Heroku-Deployed

[Deployed Link](https://vu-portfolio.herokuapp.com/)

## Description of Page Building 
* M - MongoDB: A document-based open source database
  <ul> 
  <li> book.js using mongoose to create a Schema that has title, author, sysnopsis, image and link to google Book page.  
  <li> 
  </li>
  </ul>

* E - Express: A Fast, unopinionated, minimalist web framework for Node.js
 - In routes folder to handle when the user "visit" the page
  <ul> 
  <li> API routes to serve up JSON object use to populate the page 
  </li> 
  </ul>

- In server.js file
   <ul> 
  <li> Requiring necessary npm packages
  <li> Setting up port and requiring models for syncing
  <li> Creating express app and configuring middleware needed for authentication
  <li> Requiring our routes
  <li> Listen to port to activate the server 
  </li>
  </ul

* N- Node.js: Node.js is a JavaScript runtime built on Chrome’s V8 JavaScript engine. Node.js brings JavaScript to the server
* <ul> 
  <li> Controllers act as an interface between Model and View components to process all the business logic and incoming requests,
  <li> 
  </li>
  </ul>


* R React: A JavaScript front-end library for building user interfaces
* In public folder
   <ul> 
  <li> Css folder that has pictures and style.css to decorate the interface
  <li> Js file, a client-side javascript to active the button when clicked, and send signal to the back end
  <li> Html files waiting to be serverd when the routes is called 
  </li>
  </ul>
* In src (source) folder
  <ul> 
  <li> Component folders 

  - Header.js file has title and information about the page
  - Result cards shows the result when search 
  - SavedCard display info from backend data base 
  - SearchForm contains form for user input 
  
  <li> Pages folders 
  - Books.js manipulate the search form, get data target and send request to API to load books and book data from Google API : Imports all components , Create hooks, Add search funtion, Render all the necessary components to set up the page 
  - Save.js populate database from API call, and target id to delete book 

  <li> Style folder contains style.css file to decorate the interface
  <li> App.js file

  - In util folder 
  
  <li> API call to google API and database  
  <li> index.js file render App component and send it to html 
  
  </li>
  </ul>


## Code Snippet

Required variables 
``` Javascript
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes");
```

Sets up the Express app to handle data parsing
``` Javascript
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(routes);
```
Using mongoose to create database model
``` Javascript
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const googlebook = new Schema({
  title: { type: String, required: true },
  author: { type: String},
  synopsis: {type: String},
  image: { type: String},
  link: {type: String} 
});
```

const Book = mongoose.model("Book", googlebook);

module.exports = Book;
Set routes to handle when user "visit" the page 
``` Javascript
// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
```

Listen to port to activate the page
``` Javascript 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});


```

## Technologies Used

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [Bootstrap](https://getbootstrap.com/)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JS](https://www.javascript.com/)
* [GitHub](https://github.com/)
* [Git](https://git-scm.com/)
* [node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)
* [react](https://reactjs.org/)
* [react-dom](https://reactjs.org/docs/react-dom.html)
* [react-scripts](https://www.npmjs.com/package/react-scripts)
* [react-router-dom](https://reactrouter.com/web/guides/quick-start)
* [axios](https://www.npmjs.com/package/axios)
* [Nodemon](https://www.npmjs.com/package/nodemon)
* [Express](https://www.npmjs.com/package/express)
* [mongo](https://www.mongodb.com/)
* [mongoose](https://www.npmjs.com/package/mongoose)
* [heroku](https://dashboard.heroku.com/)

<br>

## Author

|               |                                                                                                                                                                                           |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **B Tram Vu** | [![Linkedin](https://i.stack.imgur.com/gVE0j.png) LinkedIn](https://www.linkedin.com/in/b-tram-vu/) [![GitHub](https://i.stack.imgur.com/tskMh.png) GitHub](https://github.com/vubao2303) | [![Portfolio](https://i.stack.imgur.com/gVE0j.png) Portfolio](https://www.linkedin.com/in/b-tram-vu-866250121/) |


---

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
