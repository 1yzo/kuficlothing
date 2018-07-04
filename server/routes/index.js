const express = require('express');
const router = express.Router();

const noteController = require('../controllers/note-controller');

// Get all
router.get('/test', (req, res, next) => {
    noteController.get(req, res);
});

module.exports = router;