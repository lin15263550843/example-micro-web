import { AnyType } from '@/commons/dto/index.dto';
import { name } from '../../../package.json';
import Config from '@/config';
/**
 * 日志封装
 */
export class Logger {
    private logd = `[${name}]--->>>`;
    // 日志等级
    private level = {
        all: 0,
        debug: 1,
        info: 2,
        warn: 3,
        error: 4,
        none: 5,
    };

    log(...args: AnyType) {
        // this.logFun('log', ...args);
        return this.logFun('log', this.logd, ...args);
    }

    debug(...args: AnyType) {
        this.logFun('debug', this.logd, ...args);
    }

    info(...args: AnyType) {
        this.logFun('info', this.logd, ...args);
    }

    warn(...args: AnyType) {
        this.logFun('warn', this.logd, ...args);
    }

    error(...args: AnyType) {
        this.logFun('error', this.logd, ...args);
    }

    clear(...args: AnyType) {
        this.logFun('clear', this.logd, ...args);
    }

    private logFun(arg1 = 'debug', ...args: AnyType) {
        const level = arg1 as keyof Console;
        // console[level].apply(console, ...args);
        if (Config.env === 'local') {
            console[level](...args);
            return console[level];
        } else {
            if (Config.logger.enable) {
                console[level](...args);
                return console[level];
            }
        }
        // 留作备用，为以后上传简单的生产日志用
        // if (Config.logger.isUploadLog) {
        //     return;
        // }
    }
}
