export default {
	mutations: {
		addMessage(state) {
			state.messages.push({
				author: 2,
				ticket: state.messages.length + 1,
				support: 'Vova',
				letters: [
					{
						author: 'Vova',
						value: 'Wasssuuupp'
					},
					{
						author: 'You',
						value: 'Wasssuuupp!'
					},
					{
						author: 'You',
						value: 'AAAAAAAAAAAAAAAAA'
					},
					{
						author: 'Vova',
						value: 'AAAAAAAAAAAAAAAAA'
					}
				]
			})
		},
		updateMessage(state, msg) {
			state.messages.find((m) => m.ticket === msg.ticket).letters.push(msg.letter)
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
			},
			{
				author: 2,
				ticket: 2,
				support: 'Olga',
				letters: [
					{
						author: 'Olga',
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
			},
			{
				author: 2,
				ticket: 3,
				support: 'John',
				letters: [
					{
						author: 'John',
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
			},
			{
				author: 2,
				ticket: 4,
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
			},
			{
				author: 3,
				ticket: 5,
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
			},
			{
				author: 4,
				ticket: 6,
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
			},
			{
				author: 4,
				ticket: 7,
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
			},
			{
				author: 2,
				ticket: 8,
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
			},
			{
				author: 3,
				ticket: 9,
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
			},
			{
				author: 4,
				ticket: 10,
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
			},
			{
				author: 2,
				ticket: 11,
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
			},
			{
				author: 3,
				ticket: 12,
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
			},
			{
				author: 4,
				ticket: 13,
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
			},
			{
				author: 2,
				ticket: 14,
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
			},
			{
				author: 3,
				ticket: 15,
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
		letters: (state) => (id) => state.messages.find(msg => msg.ticket === id).letters,
		messages: (state) => state.messagess,
		msgById: (state) => (id) => state.messages.find(msg => msg.ticket === id)
	}
}