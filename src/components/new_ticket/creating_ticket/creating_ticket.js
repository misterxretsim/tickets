import Vue from 'vue'

export default Vue.extend({
	data() {
		return {
			selected: null,
			text: ''
		}
	},
	methods: {
		onCreate() {
			let ticket = {
				id: this.$store.getters.tickets.length + 1,
				author: this.$store.getters.userIdByLogin,
				title: this.selected,
				body: this.text,
				status: 'default'
			};
			if (ticket.title === null) {
				this.$bvToast.toast('Please select a theme', {
					title: 'Notification',
					variant: 'danger',
					toaster: 'b-toaster-bottom-right',
					solid: true,
					appendToast: true
				})
			}
			if (ticket.body.length > 140) {
				this.$bvToast.toast('Description has more than 140 characters', {
					title: 'Notification',
					variant: 'danger',
					toaster: 'b-toaster-bottom-right',
					solid: true,
					appendToast: true
				})
			}
			if (ticket.body.length < 10) {
				this.$bvToast.toast('Description has less than 10 characters', {
					title: 'Notification',
					variant: 'danger',
					toaster: 'b-toaster-bottom-right',
					solid: true,
					appendToast: true
				})
			}
			if (ticket.title !== null && ticket.body.length <= 140 && ticket.body.length >= 10) {
				this.$store.commit('addTicket', ticket)
				this.$router.push('/')
			}
		}
	}
})