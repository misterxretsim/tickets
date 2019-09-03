export default {
	mutations: {
		updateMessage(state, msg) {
			state.messages.find((m) => m.ticket === msg.ticket).letters.push(msg.letters)
		}
	},
	state: {
		messages: [
			{
				author: 2,
				ticket: 1,
				support: 'Elena',
				letters: [
					{
						author: 'Elena',
						value: 'Hi! How can I help?'
					},
					{
						author: 'You',
						value: 'Hello!'
					},
					{
						author: 'You',
						value: 'I need 2 boxes'
					}
				]
			}
		]
	},
	getters: {
		messages: (state) => state.messages
	}
}