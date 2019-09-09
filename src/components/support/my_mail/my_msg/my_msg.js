import Vue from 'vue'

export default Vue.extend({
	data() {
		return {
			login: null
		}
	},
	created() {
		this.login = this.$store.getters.auth.login !== 'admin'
	},
	methods: {
		authorName() {
			return this.$store.getters.userById(this.$store.getters.msgById(this.$store.getters.currentTicket).author).username
		}
	}
})