const express = require('express');
const router = express.Router();
const { detectTreeSpecies } = require('../controllers/treeSpeciesController'); // Ensure correct path

// Define the POST route
router.post('/tree-species/detect', detectTreeSpecies);

module.exports = router;