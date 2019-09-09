import Vue from 'vue'
import my_header from '../my_header/my_header.vue'
import creating_ticket from './creating_ticket/creating_ticket.vue'
import helpers from '../../mixins/helpers'

export default Vue.extend({
	components: {
		my_header,
		creating_ticket
    },
    mixins: [helpers],
    created() {
        if (this.$store.getters.auth.login === 'admin') {
            this.$router.push('/')
        }
    }
})