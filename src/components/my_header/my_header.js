import Vue from 'vue'

export default Vue.extend({
	data() {
		return {
			selected: null
		}
	},
	methods: {
		location() {
			return location.hash
		}
	}
})