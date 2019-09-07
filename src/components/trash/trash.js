import Vue from 'vue'
import my_header from '../my_header/my_header.vue'
import trash_body from './trash_body/trash_body.vue'

export default Vue.extend({
    components: {
        my_header,
        trash_body
    },
    created() {
        if (!this.$store.getters.userByPass) {
            this.$router.push('/login')
        }
    }
})