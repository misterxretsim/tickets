import Vue from 'vue'

export default Vue.extend({
	data() {
		return {
			selected: null,
			text: '',
			title: ''
		}
	},
	methods: {
		onCreate() {
			let ticket = {
				id: this.$store.getters.tickets.length + 1,
				author: this.$store.getters.userIdByLogin,
				theme: this.selected,
				title: this.title,
				body: this.text,
				status: 'default'
			};
			if (ticket.theme === null) {
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
			if (ticket.title.length < 3) {
				this.$bvToast.toast('Title has less than 3 characters', {
					title: 'Notification',
					variant: 'danger',
					toaster: 'b-toaster-bottom-right',
					solid: true,
					appendToast: true
				})
			}
			if (ticket.title.length > 30) {
				this.$bvToast.toast('Title has more than 30 characters', {
					title: 'Notification',
					variant: 'danger',
					toaster: 'b-toaster-bottom-right',
					solid: true,
					appendToast: true
				})
			}
			if (ticket.theme !== null 
				&& ticket.body.length <= 140 && ticket.body.length >= 10
				&& ticket.title.length <= 30 && ticket.title.length >= 3) {
				this.$store.commit('addTicket', ticket)
				this.$router.push('/')
			}
		}
	}
})