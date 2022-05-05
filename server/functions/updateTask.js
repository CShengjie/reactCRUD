const db = require('./dbConnect');

const updateTask = (req, res) => {
    const taskName = req.body.taskName;
    const time = req.body.time;
    const description = req.body.description;
    const reminder = req.body.reminder;
    const id = req.body.id;
    db.query(
        'UPDATE tasks SET taskName = ?, taskDescription = ?, taskTime = ?, reminder = ? WHERE id = ?',
        [taskName, description, time, reminder, id],
        (err, result) => {
            if(err){
                console.log(err)
            }else{
                res.send(result)
            }
        })
}

module.exports = updateTask