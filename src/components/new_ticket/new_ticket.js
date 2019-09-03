import Vue from 'vue'
import my_header from '../my_header/my_header.vue'
import creating_ticket from './creating_ticket/creating_ticket.vue'

export default Vue.extend({
	components: {
		my_header,
		creating_ticket
	},
    created() {
        if (!this.$store.getters.userByPass) {
            this.$router.push('/login')
        } else if (this.$store.getters.auth.login === 'admin') {
            this.$router.push('/')
        }
    }
})