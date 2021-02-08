import Vue from 'vue';
import vm from '@/main';
/**
 * 设置跟节点 fonst-size
 */
export const setRootHtmlFontSize = () => {
    const rootHtmlDOM = document.getElementsByTagName('html')[0];
    const w = rootHtmlDOM.offsetWidth;
    const fs = Math.round((w / 1920) * 10 * 10) / 10;
    rootHtmlDOM.style.fontSize = `${fs}px`;
    Vue.prototype.$rootFontSize = fs;
};

/**
 * 获取跟节点 fonst-size
 */
export const getRootHtmlFontSize = () => {
    // const rootHtmlDOM = document.getElementsByTagName('html')[0]
    // return parseInt(rootHtmlDOM.style.fontSize || '10')
    return vm ? vm.$rootFontSize : 10;
};

/**
 * 获取窗口可见区域大小信息
 */
export const getWindowSizeInfo = () => {
    return {
        width: window.innerWidth || window.document.body.clientWidth || window.document.documentElement.clientHeight,
        height: window.innerHeight || window.document.body.clientHeight || window.document.documentElement.clientHeight,
    };
};

/**
 * 图片加载
 * @param url 图片地址
 * @return HTMLImageElement
 */
export function loadImage(url: string) {
    // return new Promise((resolve: (value: HTMLImageElement) => void, reject) => {
    return new Promise<HTMLImageElement>((resolve, reject) => {
        try {
            const img = new Image();
            img.src = url;
            img.onload = () => {
                resolve(img);
            };
        } catch (error) {
            reject(error);
        }
    });
}

/**
 *  日期格式化
 * @param fmt 格式
 * @param fmt 时间
 */
export function dateFormat(fmt: string, date: Date) {
    let ret;
    const opt: any = {
        'Y+': date.getFullYear().toString(), // 年
        'm+': (date.getMonth() + 1).toString(), // 月
        'd+': date.getDate().toString(), // 日
        'H+': date.getHours().toString(), // 时
        'M+': date.getMinutes().toString(), // 分
        'S+': date.getSeconds().toString(), // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (const k in opt) {
        ret = new RegExp('(' + k + ')').exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], 1 === ret[1].length ? opt[k] : opt[k].padStart(ret[1].length, '0'));
        }
    }
    return fmt;
}
/**
 * 异步睡觉器
 *
 * @param duration 睡觉的毫秒数
 */
export async function asyncSleep(duration: number) {
    await new Promise(resolve => {
        setTimeout(resolve, duration);
    });
}
/**
 * 获取范围内的随机数整数
 *
 * @param min 最大边界值
 * @param maxs 最小边界值
 */
export function getRandomNumber(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
}
