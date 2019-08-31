export default {
    mutations: {
        addTicket(state, ticket) {
            state.tickets.push(ticket)
        },
        changeStatus(state, obj) {
            state.tickets.find((ticket) => ticket.id === obj.id).status = obj.status
        }
    },
    state: {
        tickets: [
            {
                id: 1,
                title: 'Название',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat dolor a ' + 
                      'purus vulputate, a aliquam magna tristique. Vivamus ut arcu vel justo pharetra ' + 
                      'volutpat. Etiam lacinia magna eget nulla euismod dictum. Donec suscipit, elit non' +
                      ' aliquet aliquam, velit tellus bibendum leo, sit amet faucibus ipsum felis sed elit.' +
                      ' Mauris ac malesuada ante. Vivamus id facilisis sapien.',
                status: 'active'
            },
            {
                id: 2,
                title: 'Название',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat dolor a ' + 
                      'purus vulputate, a aliquam magna tristique. Vivamus ut arcu vel justo pharetra ' + 
                      'volutpat. Etiam lacinia magna eget nulla euismod dictum. Donec suscipit, elit non' +
                      ' aliquet aliquam, velit tellus bibendum leo, sit amet faucibus ipsum felis sed elit.' +
                      ' Mauris ac malesuada ante. Vivamus id facilisis sapien.',
                status: 'active'
            },
            {
                id: 3,
                title: 'Название',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat dolor a ' + 
                      'purus vulputate, a aliquam magna tristique. Vivamus ut arcu vel justo pharetra ' + 
                      'volutpat. Etiam lacinia magna eget nulla euismod dictum. Donec suscipit, elit non' +
                      ' aliquet aliquam, velit tellus bibendum leo, sit amet faucibus ipsum felis sed elit.' +
                      ' Mauris ac malesuada ante. Vivamus id facilisis sapien.',
                status: 'closed'
            },
            {
                id: 4,
                title: 'Название',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat dolor a ' + 
                      'purus vulputate, a aliquam magna tristique. Vivamus ut arcu vel justo pharetra ' + 
                      'volutpat. Etiam lacinia magna eget nulla euismod dictum. Donec suscipit, elit non' +
                      ' aliquet aliquam, velit tellus bibendum leo, sit amet faucibus ipsum felis sed elit.' +
                      ' Mauris ac malesuada ante. Vivamus id facilisis sapien.',
                status: 'active'
            },
        ]
    },
    getters: {
        tickets: (state) => state.tickets
    }
}