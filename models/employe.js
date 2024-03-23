const mysql = require('mysql');

// Connexion à la base de données MySQL
const db = mysql.createConnection({
    host: 'mysql-ibrahimadieng.alwaysdata.net',
    user: '345149_teste',
    password: 'Dieng123@',
    database: 'ibrahimadieng_teste'
  });

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Base de données connectée');
});

// Modèle pour l'employé
class Employe {
  // Méthode pour récupérer tous les employés
  static obtenirTous(callback) {
    const sql = 'SELECT * FROM employee';
    db.query(sql, (err, result) => {
      if (err) throw err;
      callback(result);
    });
  }
}

module.exports = Employe;
