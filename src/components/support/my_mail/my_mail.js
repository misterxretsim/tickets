import Vue 		from 'vue'
import my_msg 	from './my_msg/my_msg.vue'

export default Vue.extend({
	components: {
		my_msg
	},
	data() {
		return {
			input: ''
		}
	},
	methods: {
		changeStatus() {
			const status = this.$store.getters.status
			if (status === 'closed') {
				this.$store.commit('changeStatus', 'default')
				this.$bvToast.toast(`Ticket#${this.$store.getters.currentTicket} was opened`, {
					title: 'Notification',
					toaster: 'b-toaster-bottom-right',
					solid: true,
					appendToast: true
				})
			}
			else {
				this.$store.commit('changeStatus', 'success')
				this.$bvToast.toast(`Ticket#${this.$store.getters.currentTicket} was closed`, {
					title: 'Notification',
					toaster: 'b-toaster-bottom-right',
					solid: true,
					appendToast: true
				})
			}
		},
		onDelete() {
			this.$store.commit('changeStatus', 'deleted')
			this.$router.push('/')
		},
		printStatus() {
			if (this.$store.getters.status === 'default') 'closed'
			else 'opened'
		}
	}
})