const express = require('express');
const { startFlow, updateFlow, getFlow } = require('../controllers/FlowController');

const router = express.Router();

router.post('/start', startFlow);
router.put('/update/:id', updateFlow);
router.get('/:id', getFlow);

module.exports = router;
