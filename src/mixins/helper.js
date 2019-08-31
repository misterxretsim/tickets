export default {
    methods: {
        logTest(ctx) {
            console.log('Я helper из примисей!')
            console.log('Users: ', this.$store.getters.users)
            console.log('Viktor by ID: ', this.$store.getters.userById(3))
            console.log('Alexey by pass: ', this.$store.getters.userByPass('Alexey', 'qwerty'))
            console.log('Tickets: ', this.$store.getters.tickets)
            this.$store.commit('addTicket', {
                id: 5,
                title: 'Название',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat dolor a ' + 
                      'purus vulputate, a aliquam magna tristique. Vivamus ut arcu vel justo pharetra ' + 
                      'volutpat. Etiam lacinia magna eget nulla euismod dictum. Donec suscipit, elit non' +
                      ' aliquet aliquam, velit tellus bibendum leo, sit amet faucibus ipsum felis sed elit.' +
                      ' Mauris ac malesuada ante. Vivamus id facilisis sapien.',
                status: 'closed'
            })
            console.log('Tickets after add: ', this.$store.getters.tickets)
            this.$store.commit('changeStatus', {
                id: 1,
                status: 'delete'
            })
            console.log('Tickets after change: ', this.$store.getters.tickets)
        }
    }
}