const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const createJwtToken = require("./app/helper/token_helper.js");
const dotenv = require('dotenv');
const cors = require('cors');
var expressSession = require('express-session');

// app.use(session({
//   secret: 'admin adda',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: true }
// }))

// app.use(passport.initialize());
// app.use(passport.session());
// passport.serializeUser(AdminLogin.serializeUser());
// passport.deserializeUser(AdminLogin.deserializeUser());


// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

var corsOptions = {
  origin: "http://localhost:3000"
};
//listen to specific rout
app.use(cors(corsOptions));

// app.use('/login', (req, res) => {
//   res.send({
//     token: 'test123'
//   });
// });


// simple route
app.get("/", (req, res) => {
  //console.log(res);
  res.json({ message: "Welcome to my application." });
});
require("./app/routes/routes.js")(app);
// set port, listen for requests

 //redirect dashboard
//  app.get("/admin_login", (req, res) => {
//   console.log(res);
//   // res.render("Dashboard");
//   res.send("Dashboard");
// });




// const token = createJwtToken.createJwtToken('677687');
// const tokenResult = createJwtToken.verifyJwtToken(token);


app.listen(3001, () => {
  console.log("Server is running on port 3001.");
});

// noclks