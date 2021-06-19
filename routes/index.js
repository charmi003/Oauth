const express=require('express');
const router=express.Router();
const passport=require("passport");
const home_controller=require("../controllers/home_controller");

router.get("/",home_controller.home);

router.get("/profile",passport.checkAuthenticated,home_controller.profile);

router.use("/auth",require("./auth"));


module.exports=router;