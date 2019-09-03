import Vue       from 'vue'
import Vuex      from 'vuex'
import tickets   from './modules/tickets'
import auth      from './modules/auth'
import support      from './modules/support'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        tickets,
        auth,
        support
    }
});