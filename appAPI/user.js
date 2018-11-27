const Router = require('koa-router')
const mongoose = require('mongoose')
let router = new Router()

// 注册路由
router.post('/register', async(ctx) => {
    var abc = ctx.request.body
        // console.log(abc)
    const User = mongoose.model("User")
    let newUser = new User(ctx.request.body)

    await newUser.save().then(() => {
        ctx.body = {
            code: 200,
            message: '注册成功'
        }
    }).catch(error => {
        ctx.body = {
            code: 500,
            message: error
        }
    })
})
router.post('/all', async(ctx) => {
    try {

        let page = ctx.request.body.page //当前页数
            // console.log(page)
        let num = 10 //每页显示数量
        let start = (page - 1) * num //开始位置

        const Goods = mongoose.model('User')
        let result = await Goods.find().sort({ createAt: -1 })
            .skip(start).limit(num).exec()
        ctx.body = { code: 200, message: result }
    } catch (error) {
        ctx.body = { code: 500, message: error }
    }

})
router.post('/del', async(ctx) => {
    try {

        let id = ctx.request.body._id //当前页数

        const Goods = mongoose.model('User')
        let result = await Goods.remove({ '_id': id })
        ctx.body = { code: 200, message: '删除成功' }
    } catch (error) {
        ctx.body = { code: 500, message: error }
    }

})
router.post('/total', async(ctx) => {
    try {
        const Goods = mongoose.model('User')
        let result = await Goods.find().count()
        ctx.body = { code: 200, message: result }
    } catch (error) {
        ctx.body = { code: 500, message: error }
    }

})
router.post('/theone', async(ctx) => {
    let pwd = 'Liu135774'
    let user = 'adminone';
    let { userName, password } = ctx.request.body;
    if (userName === user && password === pwd) {
        ctx.body = {
            code: 200,
            message: encodeURIComponent('加油小飞')
        }
    } else {
        ctx.body = {
            code: 500,
            message: '账号或密码错误'
        }
    }

    // try {
    //     const Goods = mongoose.model('User')
    //     let result = await Goods.find().count()
    //     ctx.body = { code: 200, message: result }
    // } catch (error) {
    //     ctx.body = { code: 500, message: error }
    // }

})
module.exports = router