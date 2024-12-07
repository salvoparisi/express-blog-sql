const connection = require('../data/db.js')

const show = (req, res) => {
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


const destroy = (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM posts WHERE id = ${id}`

    connection.query(sql, [id], (err, results) => {
        if (err) {
            console.error('Errore durante l\'eliminazione:', err.message);
            return res.status(500).send('Errore del server');
        }

        res.send(`Record con ID ${id} eliminato con successo`)
    })
}
module.exports = {
    show,

    destroy
}