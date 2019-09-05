import Vue from 'vue'
import my_header from '../my_header/my_header.vue'
import my_mail from './my_mail/my_mail.vue'
import bottom_button from './bottom_button/bottom_button.vue'

export default Vue.extend({
	components: {
		my_header,
        my_mail,
        bottom_button
	},
    created() {
        if (!this.$store.getters.userByPass) {
            this.$router.push('/login')
        }
    }
})