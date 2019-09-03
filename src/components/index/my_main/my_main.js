import Vue from 'vue'

export default Vue.extend({
	methods: {
		author(id) {
			return this.$store.getters.usernameById(id).username
		},
		onDelete (id) {
			this.$store.commit('changeStatus', {
				id: id,
				status: 'deleted'
			});
			this.$bvToast.toast(`Ticket#${id} was deleted`, {
				title: 'Notification',
				variant: 'secondary',
				toaster: 'b-toaster-bottom-right',
				solid: true,
				appendToast: true
			})
		},
		onClick() {
			this.$router.push('/support')
		}
	}
})