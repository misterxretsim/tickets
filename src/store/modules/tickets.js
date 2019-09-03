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
                author: 2,
                title: 'The first theme',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat dolor a ' + 
                      'purus vulputate, a aliquam magna tristique. Vivamus ut arcu vel justo pharetra ' + 
                      'volutpat. Etiam lacinia magna eget nulla euismod dictum. Donec suscipit, elit non' +
                      ' aliquet aliquam, velit tellus bibendum leo, sit amet faucibus ipsum felis sed elit.' +
                      ' Mauris ac malesuada ante. Vivamus id facilisis sapien.',
                status: 'success'
            },
            {
                id: 2,
                author: 2,
                title: 'The second theme',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat dolor a ' + 
                      'purus vulputate, a aliquam magna tristique. Vivamus ut arcu vel justo pharetra ' + 
                      'volutpat. Etiam lacinia magna eget nulla euismod dictum. Donec suscipit, elit non' +
                      ' aliquet aliquam, velit tellus bibendum leo, sit amet faucibus ipsum felis sed elit.' +
                      ' Mauris ac malesuada ante. Vivamus id facilisis sapien.',
                status: 'success'
            },
            {
                id: 3,
                author: 2,
                title: 'The fird theme',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat dolor a ' + 
                      'purus vulputate, a aliquam magna tristique. Vivamus ut arcu vel justo pharetra ' + 
                      'volutpat. Etiam lacinia magna eget nulla euismod dictum. Donec suscipit, elit non' +
                      ' aliquet aliquam, velit tellus bibendum leo, sit amet faucibus ipsum felis sed elit.' +
                      ' Mauris ac malesuada ante. Vivamus id facilisis sapien.',
                status: 'default'
            },
            {
                id: 4,
                author: 2,
                title: 'The fourth theme',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat dolor a ' + 
                      'purus vulputate, a aliquam magna tristique. Vivamus ut arcu vel justo pharetra ' + 
                      'volutpat. Etiam lacinia magna eget nulla euismod dictum. Donec suscipit, elit non' +
                      ' aliquet aliquam, velit tellus bibendum leo, sit amet faucibus ipsum felis sed elit.' +
                      ' Mauris ac malesuada ante. Vivamus id facilisis sapien.',
                status: 'success'
            },
            {
                id: 5,
                author: 3,
                title: 'The fifth theme',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat dolor a ' + 
                      'purus vulputate, a aliquam magna tristique. Vivamus ut arcu vel justo pharetra ' + 
                      'volutpat. Etiam lacinia magna eget nulla euismod dictum. Donec suscipit, elit non' +
                      ' aliquet aliquam, velit tellus bibendum leo, sit amet faucibus ipsum felis sed elit.' +
                      ' Mauris ac malesuada ante. Vivamus id facilisis sapien.',
                status: 'default'
            },
            {
                id: 6,
                author: 4,
                title: 'The sixth theme',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat dolor a ' + 
                      'purus vulputate, a aliquam magna tristique. Vivamus ut arcu vel justo pharetra ' + 
                      'volutpat. Etiam lacinia magna eget nulla euismod dictum. Donec suscipit, elit non' +
                      ' aliquet aliquam, velit tellus bibendum leo, sit amet faucibus ipsum felis sed elit.' +
                      ' Mauris ac malesuada ante. Vivamus id facilisis sapien.',
                status: 'default'
            },
            {
                id: 7,
                author: 4,
                title: 'The first theme',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat dolor a ' + 
                      'purus vulputate, a aliquam magna tristique. Vivamus ut arcu vel justo pharetra ' + 
                      'volutpat. Etiam lacinia magna eget nulla euismod dictum. Donec suscipit, elit non' +
                      ' aliquet aliquam, velit tellus bibendum leo, sit amet faucibus ipsum felis sed elit.' +
                      ' Mauris ac malesuada ante. Vivamus id facilisis sapien.',
                status: 'default'
            },
            {
                id: 8,
                author: 2,
                title: 'The second theme',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat dolor a ' + 
                      'purus vulputate, a aliquam magna tristique. Vivamus ut arcu vel justo pharetra ' + 
                      'volutpat. Etiam lacinia magna eget nulla euismod dictum. Donec suscipit, elit non' +
                      ' aliquet aliquam, velit tellus bibendum leo, sit amet faucibus ipsum felis sed elit.' +
                      ' Mauris ac malesuada ante. Vivamus id facilisis sapien.',
                status: 'default'
            },
            {
                id: 9,
                author: 3,
                title: 'The fird theme',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat dolor a ' + 
                      'purus vulputate, a aliquam magna tristique. Vivamus ut arcu vel justo pharetra ' + 
                      'volutpat. Etiam lacinia magna eget nulla euismod dictum. Donec suscipit, elit non' +
                      ' aliquet aliquam, velit tellus bibendum leo, sit amet faucibus ipsum felis sed elit.' +
                      ' Mauris ac malesuada ante. Vivamus id facilisis sapien.',
                status: 'default'
            },
            {
                id: 10,
                author: 4,
                title: 'The fourth theme',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat dolor a ' + 
                      'purus vulputate, a aliquam magna tristique. Vivamus ut arcu vel justo pharetra ' + 
                      'volutpat. Etiam lacinia magna eget nulla euismod dictum. Donec suscipit, elit non' +
                      ' aliquet aliquam, velit tellus bibendum leo, sit amet faucibus ipsum felis sed elit.' +
                      ' Mauris ac malesuada ante. Vivamus id facilisis sapien.',
                status: 'default'
            },
            {
                id: 11,
                author: 2,
                title: 'The fifth theme',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat dolor a ' + 
                      'purus vulputate, a aliquam magna tristique. Vivamus ut arcu vel justo pharetra ' + 
                      'volutpat. Etiam lacinia magna eget nulla euismod dictum. Donec suscipit, elit non' +
                      ' aliquet aliquam, velit tellus bibendum leo, sit amet faucibus ipsum felis sed elit.' +
                      ' Mauris ac malesuada ante. Vivamus id facilisis sapien.',
                status: 'success'
            },
            {
                id: 12,
                author: 3,
                title: 'The sixth theme',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat dolor a ' + 
                      'purus vulputate, a aliquam magna tristique. Vivamus ut arcu vel justo pharetra ' + 
                      'volutpat. Etiam lacinia magna eget nulla euismod dictum. Donec suscipit, elit non' +
                      ' aliquet aliquam, velit tellus bibendum leo, sit amet faucibus ipsum felis sed elit.' +
                      ' Mauris ac malesuada ante. Vivamus id facilisis sapien.',
                status: 'default'
            },
            {
                id: 13,
                author: 4,
                title: 'The first theme',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat dolor a ' + 
                      'purus vulputate, a aliquam magna tristique. Vivamus ut arcu vel justo pharetra ' + 
                      'volutpat. Etiam lacinia magna eget nulla euismod dictum. Donec suscipit, elit non' +
                      ' aliquet aliquam, velit tellus bibendum leo, sit amet faucibus ipsum felis sed elit.' +
                      ' Mauris ac malesuada ante. Vivamus id facilisis sapien.',
                status: 'deleted'
            },
            {
                id: 14,
                author: 2,
                title: 'The second theme',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat dolor a ' + 
                      'purus vulputate, a aliquam magna tristique. Vivamus ut arcu vel justo pharetra ' + 
                      'volutpat. Etiam lacinia magna eget nulla euismod dictum. Donec suscipit, elit non' +
                      ' aliquet aliquam, velit tellus bibendum leo, sit amet faucibus ipsum felis sed elit.' +
                      ' Mauris ac malesuada ante. Vivamus id facilisis sapien.',
                status: 'default'
            },
            {
                id: 15,
                author: 3,
                title: 'The fird theme',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat dolor a ' + 
                      'purus vulputate, a aliquam magna tristique. Vivamus ut arcu vel justo pharetra ' + 
                      'volutpat. Etiam lacinia magna eget nulla euismod dictum. Donec suscipit, elit non' +
                      ' aliquet aliquam, velit tellus bibendum leo, sit amet faucibus ipsum felis sed elit.' +
                      ' Mauris ac malesuada ante. Vivamus id facilisis sapien.',
                status: 'default'
            }
        ],
        themes: [
            {text: 'The first theme'},
            {text: 'The second theme'},
            {text: 'The fird theme'},
            {text: 'The fourth theme'},
            {text: 'The fifth theme'},
            {text: 'The sixth theme'},
        ],
        activeTickets: [],
        activeTicketsByLogin: []
    },
    getters: {
        tickets: (state) => state.tickets,
        themes: (state) => state.themes,
        activeTickets: (state) => {
            let arr = [];
            for (let i = 0; i < state.tickets.length; i++) {
                if (state.tickets[i].status !== 'deleted') {
                    arr.push(state.tickets[i]);
                }
            }
            state.activeTickets = arr;
            return state.activeTickets
        },
        activeTicketsById: (state) => (id) => {
            let arr = [];
            for (let i = 0; i < state.tickets.length; i++) {
                if (state.tickets[i].status !== 'deleted' && state.tickets[i].author === id) {
                    arr.push(state.tickets[i]);
                }
            }
            state.activeTicketsByLogin = arr;
            return state.activeTicketsByLogin
        }
    }
}