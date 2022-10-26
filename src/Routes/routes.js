const { Router } = require('express');
const HomeController = require('../Controllers/HomeController');

const router = Router();

router.get('/', HomeController.index);

module.exports = router;
