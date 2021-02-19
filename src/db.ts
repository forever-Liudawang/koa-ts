import * as mongoose from 'mongoose'
mongoose.connect("mongodb://127.0.0.1:27017/HUPU",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(res=>{
    console.log('服务器连接成功')
})