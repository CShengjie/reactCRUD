const db = require('./dbConnect');

const AddTask = (req,res) => {
    const taskName = req.body.taskName;
    const time = req.body.time;
    const description = req.body.description;
    const reminder = req.body.reminder;
    db.query(
        'INSERT INTO tasks(taskName, taskDescription, taskTime ,reminder) value (?, ? ,? ,?)',
        [taskName,description,time,reminder], 
        (err,result) => {
            if (err) {
                console.log(err)
            }else {
                res.send('Complete')
            }
        }
    )
}

module.exports = AddTask;