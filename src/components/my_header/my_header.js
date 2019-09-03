import Vue from 'vue'

export default Vue.extend({
	methods: {
		location() {
			return location.hash
		}
	}
})