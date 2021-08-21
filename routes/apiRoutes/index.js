const router = require('express').Router();
const notesRoutes = require('./newRoutes');

router.use(notesRoutes);

module.exports = router;