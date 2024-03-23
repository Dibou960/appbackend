const express = require('express');
const router = express.Router();
const Employe = require('../models/employe');

// Route pour obtenir tous les employés
router.get('/employes', (req, res) => {
  Employe.obtenirTous((resultats) => {
    res.json(resultats);
  });
});

module.exports = router;
