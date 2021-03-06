import Vue           from 'vue'
import my_header     from '../my_header/my_header.vue'
import my_mail       from './my_mail/my_mail.vue'
import bottom_button from './bottom_button/bottom_button.vue'
import helpers       from '../../mixins/helpers'

export default Vue.extend({
	components: {
		my_header,
        my_mail,
        bottom_button
    },
    mixins: [helpers]
})