import Vue from 'vue'
import my_header from './my_header/my_header.vue'
import my_main from './my_main/my_main.vue'

export default Vue.extend({
    components: {
        my_header,
        my_main
    },
    created() {
        if (!this.$store.getters.userByPass) {
            location.href = '/#/login'
        }
    }
})