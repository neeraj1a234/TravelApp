const express = require('express');
const { allDestinations, addDestination, bookDestination, removeDestination, updateDestination } = require('../controllers/destinationController');
const { verifyAdminToken } = require('../middleware/verifyAdminToken');
const router = express.Router();

router.get('/allDestinations',allDestinations);

router.post('/addDestination',verifyAdminToken,addDestination);

router.post('/bookDestination',bookDestination)

router.delete('/removeDestination/:id',verifyAdminToken,removeDestination);

router.put('/updateDestination/:id', verifyAdminToken, updateDestination);

module.exports = router;