/*
 * @Author: ‘Yongsheng Huang 113082408@qq.com
 * @Date: 2022-06-08 10:18:26
 * @LastEditors: ‘Yongsheng Huang 113082408@qq.com
 * @LastEditTime: 2022-06-09 00:39:37
 * @FilePath: \best-search\src\loading\loading.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from "vue";

import componentLoading from "./loading.vue";

const comLoading = Vue.extend(componentLoading);

const instance = new comLoading({
    el: document.createElement("div"),
});

instance.show = false;
const loading = {
    show() {
        instance.show = true;
        document.body.appendChild(instance.$el);
    },
    hide() {
        instance.show = false;
        instance.$el.remove()
    },
};
export default {
    install() {
        if (!Vue.$loading) {
            Vue.$loading = loading;
        }
        Vue.mixin({
            created() {
                this.$loading = Vue.$loading;
            },
        });
    },
};