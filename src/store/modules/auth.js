export default{
    mutations: {
        updateAuth(state, obj) {
            state.auth.login = obj.login
            state.auth.pass = obj.pass
        },
        clearAuth(state) {
            state.auth.login = ''
            state.auth.pass = ''
        }
    },
    state: {
        users: [
            {
                id: 1,
                username: 'admin',
                login: 'admin',
                password: 'admin'
            },
            {
                id: 2,
                username: 'Alexey',
                login: 'a',
                password: 'a'
            },
            {
                id: 3,
                username: 'Viktor',
                login: 'vitya@gmail.com',
                password: '123321'
            },
            {
                id: 4,
                username: 'Ivan',
                login: 'vanovano@protonmail.com',
                password: 'daFs32da'
            },
        ],
        auth: {
            login: '',
            pass: ''
        }
    },
    getters: {
        users: (state) => state.users,
        auth: (state) => state.auth,
        userIdByLogin: (state) => {
            const user = state.users.find((user) => user.login === state.auth.login);
            return user !== undefined ? user.id : 1
        },
        userById: (state) => (id) => state.users.find((user) => user.id === id),
        usernameById: (state) => (id) => state.users.find((user) => user.id === id),
        userByPass: (state) => {
            for (let i = 0; i < state.users.length; i++) {
                if (state.users[i].login === state.auth.login && state.users[i].password === state.auth.pass) {
                    return true
                }
            }
            return false
        }
    }
}