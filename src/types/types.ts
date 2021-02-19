import * as Koa from 'koa';
import Router = require('koa-router');
import * as mongoose from 'mongoose';
type ctxType = Koa.ParameterizedContext<any, Router.IRouterParamContext<any, {}>>
type Model = mongoose.Model<mongoose.Document<any>>
export {
    ctxType,
    Model
}
