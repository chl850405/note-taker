const router = require('express').Router();
const apiRoutes = require('../api-routes');
const htmlRoutes = require('../html-routes');

router.use(apiRoutes);
router.use(htmlRoutes);

module.exports = router;