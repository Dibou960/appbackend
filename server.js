const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const employeRoutes = require('./routes/employeRoute');

const app = express();

app.use(bodyParser.json());
// Middleware pour activer les requêtes CORS
app.use((req, res, next) => {
    console.log('Requête du front-end acceptée avec succès');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Max-Age', '1800');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, Origin, X-Requested-With, Content, Accept, Accept-Version');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


// Utilisation de la route pour les employés
app.use('/api', employeRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Serveur en marche sur le port ${PORT}`);
});
