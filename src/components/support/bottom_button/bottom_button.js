import Vue from 'vue'

export default Vue.extend({
	data() {
		return {
			msg: ''
		}
	},
	methods: {
		onSend() {
			if (this.msg) {
				if (this.msg.length <= 30) {
					this.$store.commit('updateMessage', {
						ticket: this.$store.getters.currentTicket,
						letter: {
							author: 'You',
							value: this.msg
						}
					})
				} else {
					let msg ='';
					while (this.msg.length > 30) {
						msg += this.msg.substr(0, 30) + '\n'
						this.msg = this.msg.substr(30)
					}
					msg += this.msg
					this.$store.commit('updateMessage', {
						ticket: this.$store.getters.currentTicket,
						letter: {
							author: 'You',
							value: msg
						}
					})
				}
				this.msg = ''
			}
		}
	}
})