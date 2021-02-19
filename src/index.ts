const Koa = require('koa')
const Router =require('koa-router')
const bodyParser = require('koa-bodyparser'); 
import { PORT,baseUrl} from './config';
import AppRoutes from './routes';
const multer = require('koa-multer')
const cors = require('koa2-cors');
const path = require('path')
const staticServer = require('koa-static')
require('./db')
const app = new Koa();
const router = new Router();


            
//路由
//静态资源请求服务
app.use(staticServer(path.join(__dirname,'./public')))
app.use(cors())
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());
AppRoutes.forEach(route => router[route.method](route.path, route.action));
// 上传 图片
const storage = multer.diskStorage({
    //文件保存路径
    destination: function(req, file, cb) {
        cb(null, path.resolve(__dirname, './public'))
    },
    //修改文件名称
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
})
//加载配置
const upload = multer({
    storage: storage
});
router.post('/upload', upload.single('file'), async(ctx, next) => {
    if(ctx.req.file){
        ctx.body = {
            filename: ctx.req.file.originalname, //返回文件名
            filePath: baseUrl + '/' + ctx.req.file.originalname
        }
        // //http://test.lmytest.top/uploads
    }
})
app.listen(PORT);
console.log(`应用启动成功 端口:${PORT}`);

