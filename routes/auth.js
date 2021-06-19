const express=require('express');
const passport=require('passport');
const router=express.Router();
const auth_controller=require("../controllers/auth_controller");


router.get("/login",auth_controller.login);

router.get("/logout",auth_controller.logout);

router.get("/google",passport.authenticate("google",{
    scope:['profile'],
    failureRedirect:"/auth/login"

}),auth_controller.google);


router.get("/google/redirect",passport.authenticate("google"),auth_controller.googleRedirect);

module.exports=router;