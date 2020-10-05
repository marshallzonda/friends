const SEND_MESSAGE = 'SEND_MESSAGE';
let initialState = {
    messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Hello what are you doing?" },
        { id: 3, message: "It is what you hear listen." },
    ],
    dialogs: [
        { id: 1, name: "Katya" },
        { id: 2, name: "Marina" },
        { id: 3, name: "Andrew" },
        { id: 4, name: "Bohdan" },
        { id: 5, name: "Vika" },
    ],
}

const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
           return {
                ...state,
                  messages:[...state.messages,{ id: 6, message: body }],
            };

        default:
            return state;
    }

}
export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer