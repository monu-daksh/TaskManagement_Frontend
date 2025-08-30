"use client"


export const initialState = []


export function todoReducers(state, action){
     switch(action.type){
        case "ADD_TODO" :
            return[
                ...state,
                {id: Date.now(), text:action.payload, editing:false}
            ]
         case "DELETE_TODO":
            return state.filter((todo) => todo.id !== action.payload)

        case "EDIT_TODO" :
            return state.map((todo) => todo.id === action.payload ? {...todo, editing: !todo.editing} : todo)

        case "SAVE_TODO":
            return state.map((todo) => todo.id === action.payload.id ? {...todo,  text: action.payload.text, editing: false} : todo)

        default:
            return state
     }
}