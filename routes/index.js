var express = require('express');
var router = express.Router();
const userModel = require("./users");

/* GET home page. */
// router.get('/', function(req, res,) {
//   req.session.ban = true;     //session
// res.render('index')
// });


//check the session
// router.get("/checkban",function(req,res){
//   if (  req.session.ban === true) {
//     res.send("You are banned");
//   }
//   else {
//     res.send("You are not banned");
//   }
// })


// to destroy the session
router.get("/removeban", function(req,res){
  req.session.destroy(function(err){
    if(err){
      console.log(err);
    }
    res.send("Ban removed");
  })
})


                                  //Cookie


                                  router.get('/', function(req, res,) {
                                    res.cookie("age", 25);     //cookie
                                  res.render('index')
                                  });








                                  router.get("/checkcookie",function(req,res){
                                    console.log(req.cookies);              // cookie check
                                    res.send("check")
                                  })                              



                                  router.get('/deletecookie', function(req, res,) {
                                    res.clearCookie("age");
                                    res.send("cookie deleted");           // to delete the cookie
                                  });




//To create the user
// router.get('/create', async function(req, res,) {
//  const createduser = await userModel.create({
//     username: "Abaid ullah",
//     email: "abaidullah696@gmail.com",
//     phone: 0123456789,
//     address: "pathan colony",
//     city: "lahore",
//   });
//   res.send(createduser)
//   });




// to find all values
// router.get("/allusers", async function(req,res) {
//  let allusers = await userModel.find();
//  res.send(allusers);
// })
  

//to find one user from model
// router.get("/findoneuser", async function(req,res){
//   let findone = await userModel.findOne({username: "Abaid ullah"});
//   res.send(findone);
// })

// to delete the user
// router.get("/delete", async function(req,res){
//   let deleteuser = await userModel.findOneAndDelete({
//     username: "Abaid ullah"
//   })
//   res.send(deleteuser);
// })



//sesions

// router.get("/", function(req,res){
//   req.session.ban = true;
//   res.send("index");
// })



module.exports = router;




