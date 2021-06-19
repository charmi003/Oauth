const express=require('express');
const port=3000;
const app = express();

//Connect to the database
const db=require("./config/mongoose");  


//passport for authentication
const session=require("express-session");
const passport=require("passport");
const passportGoogle=require("./config/passport-google");
const MongoDbStore=require("connect-mongo");

//Middleware that takes session cookie and encrypts it 
app.use(session({
    name:"user_id",
    secret:"blahhh",
    saveUninitialized:false,
    resave:false,
    cookie:{ 
        maxAge:(24*60*60*1000)
    },
    store: MongoDbStore.create({
        mongoUrl:'mongodb://localhost/oauth_db'

    })
}))


//ask the app to use passport
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);


//Middleware for getting the form data encoded
app.use(express.urlencoded());

//Middleware for accessing the static files
app.use(express.static("assets"));


/*Using layout*/
const expressLayouts=require("express-ejs-layouts");
app.use(expressLayouts);

//Extract styles and scripts from the sub-pages into the layout
app.set("layout extractStyles",true);
app.set("layout extractScripts",true);

//setting up the view engine and the view path
app.set("view engine","ejs");
app.set("views","./views");



//Routing all the requests with root as / to routes/index.js
app.use("/",require("./routes/index"));


//Firing the express application
app.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log(`Express listening on port ${port}`);
})