import Vue from 'vue'

export default Vue.extend({
    data() {
        return {
            login: '',
            pass: ''
        }
    },
    methods: {
        updateAuth() {
            this.$store.commit('updateAuth', {
                login: this.login,
                pass: this.pass
            })
        }
    },
    created() {
		this.$store.commit('clearAuth')
    }
})