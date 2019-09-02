import Vue from 'vue'

export default Vue.extend({
    created() {
        if (!this.$store.getters.userByPass) {
            location.href = '/#/login'
        }
    }
})