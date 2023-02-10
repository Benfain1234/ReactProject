const express = require("express");
const router=express.Router();
const admins = require("../controllers/admins")
router.get('/',(req,res)=>{
    res.send('TOP vaction');
})

router.get('/admins',admins.getAdmins);

module.exports = router