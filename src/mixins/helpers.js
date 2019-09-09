export default {
    created() {
        if (!this.$store.getters.userByPass) {
            this.$router.push('/login')
        }
    }
}