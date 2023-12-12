var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


const FormController = require('../Controller/User/form')

// // ==========================================form Section==========================
router.post("/api/add-form", FormController.addform);
router.get("/api/view-form", FormController.viewForm);
router.put("/api/update-form/:id", FormController.updateForm);




module.exports = router;

