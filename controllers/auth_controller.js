module.exports.login=function(req,res){
    return res.render("login");
}

module.exports.logout=function(req,res){
    req.logout();
    return res.redirect("/");
}


module.exports.google=function(req,res){
    return res.redirect("/");
}

module.exports.googleRedirect=function(req,res){
    // return res.send("Successfully redirected to the server form Google!!")
    return res.redirect("/profile");
}


