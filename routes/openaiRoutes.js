const express=require('express');


const {generateImage}=require('../brain_pic/controllers/openaicontrollers');
const router=express.Router();

router.post('/generateimage',generateImage);


module.exports=router;