import Vue from 'vue'

export default Vue.extend({
    created() {
        if (1 == this.value) location.href = '/#/login' 
    }
})