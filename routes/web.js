const express = require('express');
const UserController = require('../controller/UserController');
const TenderController = require('../controller/TenderController');
const router = express.Router()


//usercontroller

router.get('/getalluser',UserController.getalluser)
router.post('/userinsert',UserController.userinsert)
router.get('/api',UserController.login)
router.get("/logout",UserController.logout)


//tendercontroller

router.post('/Tender_insert', TenderController.Tender_insert)
router.get('/getTender',TenderController.getTender)
router.get('/ViewTender/:id',TenderController.ViewTender)
router.post('/UpdateTender/:id',TenderController.UpdateTender)
router.delete('/DeleteTender/:id',TenderController.DeleteTender)


module.exports = router;