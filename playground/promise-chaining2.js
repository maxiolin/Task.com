require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete("5dc2e0f5664ed215a0fb51a6").then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('5dcc2aa2d65cdc3500021d56').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})

