const express = require('express');
const { allDestinations, addDestination, bookDestination } = require('../controllers/destinationController');
const { verifyAdminToken } = require('../middleware/verifyAdminToken');
const router = express.Router();

router.get('/allDestinations',allDestinations);

router.post('/addDestination',verifyAdminToken,addDestination);

router.post('/bookDestination',bookDestination)

module.exports = router;