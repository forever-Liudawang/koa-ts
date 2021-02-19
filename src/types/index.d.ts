import { Connection} from 'typeorm';
declare module 'koa' {
    interface DefaultState {
        stateProperty: boolean;
    }

    interface DefaultContext {
        connect: Connection
    }
}
