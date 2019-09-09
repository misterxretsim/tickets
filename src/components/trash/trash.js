import Vue from 'vue'
import my_header from '../my_header/my_header.vue'
import trash_body from './trash_body/trash_body.vue'
import helpers from '../../mixins/helpers'

export default Vue.extend({
    components: {
        my_header,
        trash_body
    },
    mixins: [helpers],
    created() {
        if (this.$store.getters.auth.login !== 'admin') {
            this.$router.push('/')
        }
    }
})