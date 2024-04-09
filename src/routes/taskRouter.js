const { Router } = require('express');
const { route } = require('express/lib/application');
const router = Router();

const { storeTask } = require('../controller/taskController');

router.post('/store/task', storeTask);

module.exports = router;

