import { AnyType } from '@/commons/dto/index.dto';
/**
 * 用来进行应用间传播数据
 */
export default class Transmission {
    private params: AnyType = null; // 数据主体
    private singleAccess = true; // 单次存取，防止读取不需要的旧数据

    public setParams(params: AnyType) {
        this.singleAccess = true;
        this.params = params;
    }

    public getParams() {
        const p = this.singleAccess ? this.params : null;
        this.singleAccess = false;
        return p;
    }

    public clearParams() {
        this.params = null;
    }
}
