var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.json([
        { foodName: 'test', calorieAmount: '123' },
        { foodName: 'test 2', calorieAmount: '234' },
        { foodName: 'test 3', calorieAmount: '456' },
    ]);
});

module.exports = router;
