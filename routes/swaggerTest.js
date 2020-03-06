var express = require('express');
var router = express.Router();

// Require controller modules.
var biker_controller = require('../controllers/bikerController');

/// ROUTES ///

// URL list page.
router.get('/', function(req, res, next){
    res.send('Routes test for swagger.');
});

// GET request for bikers list.
router.get('/bikers', biker_controller.biker_list);

// POST request for creating biker. (Create)
router.post('/biker/create', biker_controller.biker_create);

// GET request for biker details.   (Read)
router.get('/biker/:id', biker_controller.biker_detail);

// POST request for update biker.   (Update)
router.put('/biker/:id/update', biker_controller.biker_update);

// POST request for delete biker.   (Delete)
router.delete('/biker/:id/delete', biker_controller.biker_delete);

module.exports = router;