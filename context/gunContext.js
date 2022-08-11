import Gun from "gun"
import { createContext, useReducer } from "react"
const gun = Gun(['https://discord-gun-node.herokuapp.com/gun'])

export const GunContext = createContext()

const initialState = (state, action) => {
    try {
        if(action.type == 'clear') return { messages: []}
        if(action.type == 'add') {
            return {messages: [...state.messages, action.data]}
        }
    }
    catch (error) {
        console.error(error)
    }
}

export const GunProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const getMessages = (_name) => {
        const messageRef = gun.get(_name)

        messageRef.map().once(message => {
            dispatch({
                type: 'add',
                data: {
                    sender: message.sender,
                    content: message.content,
                    avatar: message.avatar,
                    createdAt: message.createdAt,
                    messageId: message.messageId,
                    isBullish: message.isBullish,
                }
            })
        })
    }
    return (
        <GunContext.Provider
        value={{
            gun, getMessages, state
        }}
        >
            {children}
        </GunContext.Provider>
    )
}