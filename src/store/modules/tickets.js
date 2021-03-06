export default {
    mutations: {
        addTicket(state, ticket) {
            state.tickets.push(ticket)
        },
        changeStatus(state, status) {
            state.tickets.find((ticket) => ticket.id === state.currentTicket).status = status
        },
        changeStatusById(state, obj) {
            state.tickets.find((ticket) => ticket.id === obj.id).status = obj.status
        },
        deleteTicket(state, id){
            state.tickets.find((ticket) => ticket.id === id).status = 'deleted'
        },
        updateCurrentTicket(state, id) {
            state.currentTicket = id
        },
        updateCurrentTheme(state, theme) {
            state.currentTheme = theme
        }
    },
    state: {
        tickets: [
            {
                id: 1,
                author: 2,
                title: 'Some title',
                theme: 'The first theme',
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
                title: 'Some title',
                theme: 'The second theme',
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
                title: 'Some title',
                theme: 'The fird theme',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat dolor a ' + 
                      'purus vulputate, a aliquam magna tristique. Vivamus ut arcu vel justo pharetra ' + 
                      'volutpat. Etiam lacinia magna eget nulla euismod dictum. Donec suscipit, elit non' +
                      ' aliquet aliquam, velit tellus bibendum leo, sit amet faucibus ipsum felis sed elit.' +
                      ' Mauris ac malesuada ante. Vivamus id facilisis sapien.',
                status: 'deleted'
            },
            {
                id: 4,
                author: 2,
                title: 'Some title',
                theme: 'The fourth theme',
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
                title: 'Some title',
                theme: 'The fifth theme',
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
                title: 'Some title',
                theme: 'The sixth theme',
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
                title: 'Some title',
                theme: 'The first theme',
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
                title: 'Some title',
                theme: 'The second theme',
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
                title: 'Some title',
                theme: 'The fird theme',
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
                title: 'Some title',
                theme: 'The fourth theme',
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
                title: 'Some title',
                theme: 'The fifth theme',
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
                title: 'Some title',
                theme: 'The sixth theme',
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
                title: 'Some title',
                theme: 'The first theme',
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
                title: 'Some title',
                theme: 'The second theme',
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
                title: 'Some title',
                theme: 'The fird theme',
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
        currentTicket: 1,
        currentTheme: 'all'
    },
    getters: {
        tickets: (state) => state.tickets,
        title: (state) => state.title,
        themes: (state) => state.themes,
        status: (state) => {
            const status = state.tickets.find(ticket => ticket.id === state.currentTicket).status
            if (status === 'default') return 'opened'
            else return 'closed'
        },
        currentTicket: (state) => state.currentTicket,
        currentTheme: (state) => state.currentTheme,
        activeTickets: (state) => {
            let arr = [], tmp = [];
            for (let i = 0; i < state.tickets.length; i++) {
                if (state.tickets[i].status !== 'deleted') {
                    arr.push(state.tickets[i]);
                }
            }
            if (state.currentTheme !== 'all') {
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i].theme === state.currentTheme) {
                        tmp.push(arr[i]);
                    }
                }
                arr = tmp;
            }
            return arr
        },
        activeTicketsById: (state) => (id) => {
            let arr = [], tmp = [];
            for (let i = 0; i < state.tickets.length; i++) {
                if (state.tickets[i].status !== 'deleted' && state.tickets[i].author === id) {
                    arr.push(state.tickets[i]);
                }
            }
            if (state.currentTheme !== 'all') {
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i].theme === state.currentTheme) {
                        tmp.push(arr[i]);
                    }
                }
                arr = tmp;
            }
            return arr
        },
        deletedTickets: (state) => {
            let arr = [], tmp = [];
            for (let i = 0; i < state.tickets.length; i++) {
                if (state.tickets[i].status === 'deleted') {
                    arr.push(state.tickets[i]);
                }
            }
            if (state.currentTheme !== 'all') {
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i].theme === state.currentTheme) {
                        tmp.push(arr[i]);
                    }
                }
                arr = tmp;
            }
            return arr
        },
        deletedTicketsWithoutTheme: (state) => {
            let arr = [];
            for (let i = 0; i < state.tickets.length; i++) {
                if (state.tickets[i].status === 'deleted') {
                    arr.push(state.tickets[i]);
                }
            }
            return arr;
        }
    }
}