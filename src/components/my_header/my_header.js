import Vue from 'vue'

export default Vue.extend({
	data() {
		return {
			choosen: 'all'
		}
	},
	methods: {
		location() {
			return location.hash
		},
		onChoose() {
			this.$store.commit('updateCurrentTheme', this.choosen)
		},
		clearAuth() {
			this.$store.commit('clearAuth')
		}
	}
})