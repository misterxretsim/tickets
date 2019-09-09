import Vue          from 'vue'
import my_header    from '../my_header/my_header.vue'
import my_main      from './my_main/my_main.vue'
import add_ticket   from './add_ticket/add_ticket.vue'
import helpers      from '../../mixins/helpers'

export default Vue.extend({
    components: {
        my_header,
        my_main,
        add_ticket
    },
    mixins: [helpers],
})