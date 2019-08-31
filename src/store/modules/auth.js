export default{
    state: {
        users: [
            {
                id: 1,
                username: 'admin',
                password: 'admin'
            },
            {
                id: 2,
                username: 'Alexey',
                password: 'qwerty'
            },
            {
                id: 3,
                username: 'Viktor',
                password: '123321'
            },
            {
                id: 4,
                username: 'Ivan',
                password: 'Na4dsa$21'
            },
        ]
    },
    getters: {
        users: (state) => state.users,
        userById: (state) => (id) => state.users.find((user) => user.id === id),
        userByPass: (state) => (username, password) => {
            return state.users.find((user) => user.username === username && user.password === password) ? true : false
        }
    }
}