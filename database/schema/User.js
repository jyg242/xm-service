const mongoose = require('mongoose')
const Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId //主键


//创建userschema
const userSchema = new Schema({
    UserId: ObjectId,
    userName: {
        type: String,
        require: true
    }, //unique不重复
    phone: {
        type: String,
        require: true //必须的
    },
    // 
    createAt: { type: Date, default: Date.now() },
})

//发布模型
mongoose.model('User', userSchema)