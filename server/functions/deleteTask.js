const db = require('./dbConnect');

const deleteTask = (req, res) => {
    console.log(req.body);
    const id = req.body.id;
    db.query(
        'DELETE FROM tasks WHERE id = ?',
        id,
        (err,result) => {
            if (err) {
                console.log(err)
            }else {
                res.send('Complete')
            }
        }
    )
}
module.exports = deleteTask