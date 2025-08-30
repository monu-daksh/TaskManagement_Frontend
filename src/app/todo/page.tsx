"use client"
import { initialState, todoReducers } from "@/Components/TodoReducer"
import { useReducer, useState } from "react"


function TodoList() {
    const [input, setInput] = useState("")
    const [todos, dispatch] = useReducer(todoReducers, initialState)



    return (
        <div className="max-w-md max-auto mt-10 p-4 bg-white shadow rounded">
            <h1 className="text-xl font-bold mb-4"> Simple ToDo</h1>

            <div className="flex gap-2 mb-4">
                <input className="border flex-1 p-2 rounded"
                    placeholder="Add Photo..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />

                <button className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600">Add</button>

            </div>

            <ul className="space-y-2">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className="flex items-center justify-between border p-2 rounded"
                    >
                        {todo.editing ? (
                            <div className="flex gap-2 w-full">
                                <input
                                    className="border flex-1 p-1 rounded"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                />
                                <button
                                    className="text-blue-500"
                                    onClick={() =>
                                        dispatch({ type: "SAVE", payload: { id: todo.id, todo } })
                                    }
                                >
                                    💾
                                </button>
                            </div>
                        ) : (
                            <>
                                <span>{todo.text}</span>
                                <div className="space-x-2">
                                    <button
                                        className="text-green-600"
                                        onClick={() => dispatch({ type: "EDIT", payload: todo.id })}
                                    >
                                        ✏️
                                    </button>
                                    <button
                                        className="text-red-500"
                                        onClick={() => dispatch({ type: "DELETE", payload: todo.id })}
                                    >
                                        ❌
                                    </button>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>


        </div>
    )

}



export default TodoList