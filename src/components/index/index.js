import Vue from 'vue'
import my_header from '../my_header/my_header.vue'
import my_main from './my_main/my_main.vue'
import add_ticket from './add_ticket/add_ticket.vue'

export default Vue.extend({
    components: {
        my_header,
        my_main,
        add_ticket
    },
    created() {
        if (!this.$store.getters.userByPass) {
            this.$router.push('/login')
        }
    }
})