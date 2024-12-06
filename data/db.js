const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'post_tag',
});

function show(req, res) {
    const sql = 'SELECT * FROM post_tag.posts';

    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Errore durante l\'esecuzione della query:', err.message);
            res.status(500).send('Errore nel server');
            return;
        }

        res.json(results);
    });
}

module.exports = { show };
