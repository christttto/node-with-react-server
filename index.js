const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

/*
app.get('/', (req, res) =>{
    res.send({bye: 'buddy'});
});
*/

const app = express();

//creates new instance, i need to sign in a user using google
//passport.use is some kind of generic function, but not about specific strategy, which is google
passport.use(new GoogleStrategy());




const PORT = process.env.PORT || 5000;
app.listen(PORT);