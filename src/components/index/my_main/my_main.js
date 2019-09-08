import Vue from 'vue'

export default Vue.extend({
	methods: {
		author(id) {
			return this.$store.getters.usernameById(id).username
		},
		onDelete (id) {
			this.$store.commit('deleteTicket', id)
			this.$bvToast.toast(`Ticket#${id} was deleted`, {
				title: 'Notification',
				toaster: 'b-toaster-bottom-right',
				solid: true,
				appendToast: true
			})
		},
		onClick(id, e) {
			if (e.target.classList[0] !== 'close') {
				this.$store.commit('updateCurrentTicket', id);
				this.$router.push('/support')
			}
		}
	},
	created() {
		this.$store.commit('updateCurrentTheme', 'all')
	}
})