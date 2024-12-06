const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pizzeria'
})

function index(req, res) {

    const sql = 'SELECT * FROM post_tag.posts'

    connection.connect(sql, (err, results) => {
        if (err) throw err;
        res.json(results)
    })
}


module.exports = connection