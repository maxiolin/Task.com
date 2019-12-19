require('../src/db/mongoose')
const User = require('../src/models/user')

//ObjectId("5dcd8403b47cf61df060ec0c")

// User.findByIdAndUpdate('5dcd8403b47cf61df060ec0c', {age: 1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count 
}

updateAgeAndCount("5dcd8403b47cf61df060ec0c", 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})