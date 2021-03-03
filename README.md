# Google-Book

Project description 
* Full stack application deployed to Heroku
* New Polished Resume 

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
* In public folder
   <ul> 
  <li> Css folder that has pictures and style.css to decorate the interface
  <li> Js file, a client-side javascript to active the button when clicked, and send signal to the back end
  <li> Html files waiting to be serverd when the routes is called 
  </li>
  </ul>

- In routes folder to handle when the user "visit" the page
  <ul> 
  <li> Html routes that serve up the html page when client calls
  <li> API routes to serve up JSON object use to populate the page 
  </li>
  </ul>



* In server.js file
   <ul> 
  <li> Requiring necessary npm packages
  <li> Setting up port and requiring models for syncing
  <li> Creating express app and configuring middleware needed for authentication
  <li> Requiring our routes
  <li> Listen to port to activate the server 
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

Set routes to handle when user "visit" the page 
``` Javascript
module.exports = function (app,path) {
  var path = require("path");
  app.get("/", (req,res)=>{
    res.sendFile("/index.html",{ root: path.join(__dirname, "./public") })
  });
  app.get("/projects",(req,res)=>{
    res.sendFile("./projects.html",{root: path.join(__dirname, "../public")})
  });
  app.get("/aboutme", (req,res)=>{
    res.sendFile("./BTVu.html",{root: path.join(__dirname, "../public")})
  });
}
```

Listen to port to activate the page
``` Javascript 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});


```

## Technologies Used

|                                                           |                                                         |                                                                       |                                   |                                   |
| :-------------------------------------------------------: | :-----------------------------------------------------: | :-------------------------------------------------------------------: | :-------------------------------: | :-------------------------------: |
| [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) | [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | [Node.js](https://nodejs.org/en/) | [Express](https://expressjs.com/) | [Heroku](https://heroku.com/) | [GitHub](https://github.com/) |

<br>

## Author

|               |                                                                                                                                                                                           |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **B Tram Vu** | [![Linkedin](https://i.stack.imgur.com/gVE0j.png) LinkedIn](https://www.linkedin.com/in/b-tram-vu/) [![GitHub](https://i.stack.imgur.com/tskMh.png) GitHub](https://github.com/vubao2303) | [![Portfolio](https://i.stack.imgur.com/gVE0j.png) Portfolio](https://www.linkedin.com/in/b-tram-vu-866250121/) |


---

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
