import Vue from 'vue'

export default Vue.extend({
    methods: {
        updateLogin(value) {
            this.$store.commit('updateLogin', value)
        },
        updatePass(value) {
            this.$store.commit('updatePass', value)
        }
    }
})