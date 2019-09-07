import Vue from 'vue'

export default Vue.extend({
	methods: {
		author(id) {
			return this.$store.getters.usernameById(id).username
		},
		onOpened(id) {
			this.$store.commit('changeStatusById', {
				id: id,
				status: 'default'
			})
			this.$bvToast.toast(`Ticket#${id} was opened`, {
				title: 'Notification',
				toaster: 'b-toaster-bottom-right',
				solid: true,
				appendToast: true
			})
			this.onCheck()
		},
		onClosed(id) {
			this.$store.commit('changeStatusById', {
				id: id,
				status: 'success'
			})
			this.$bvToast.toast(`Ticket#${id} was closed`, {
				title: 'Notification',
				toaster: 'b-toaster-bottom-right',
				solid: true,
				appendToast: true
			})
			this.onCheck()
		},
		onCheck() {
			if (!this.$store.getters.deletedTickets.length) {
				this.$router.push('/')
			}
		}
	}
})