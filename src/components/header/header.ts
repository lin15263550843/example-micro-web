import { Component, Prop, Vue } from 'vue-property-decorator';
import HeaderOperating from '@/components/headerOperating';
import { RegistrableApp } from '@/commons/dto/index.dto';

@Component({ components: { HeaderOperating } })
export default class HeaderBar extends Vue {
    /**
     * 要展示在 header 上的菜单列表
     */
    @Prop({ default: [] }) private tabs!: RegistrableApp[];
    @Prop() private callback!: Function;
}
