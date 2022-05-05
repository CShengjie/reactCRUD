const db = require('./dbConnect');

const ShowTask = (req, res) => {
    db.query('SELECT * FROM tasks',
    (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
}
module.exports = ShowTask