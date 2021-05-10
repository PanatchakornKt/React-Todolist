import React from 'react'

const TodosList = ({input, todos, setTodos, filteredTodos}) => {

    const toggleComplete = (id) => {
        const updatedTodos = [...todos].map((todo) => {
            if(todo.id === id){
                todo.completed = !todo.completed
            }
            return todo
        })
        setTodos(updatedTodos)
    }
    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id){
                    return {...item, completed: !item.completed }
                }
                return item
            })
        )
    }

    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    return (
        <div>
            {filteredTodos.map((todo) => (
                <section 
                className = "flex bg-white container mx-auto px-6 py-3"
                key = {todo.id}>
                <div className="w-full rounded-lg shadow-lg p-4">
                    <input 
                    type = "checkbox"
                    onChange = {() => toggleComplete(todo.id)}
                    checked = {todo.completed}
                    />
                    <input 
                    type="text"
                    value = {todo.title}
                    className = "ml-2"
                    onChange = {(e) => e.preventDefault()}
                    />
                <div>
                    <button
                    className="puppercase font-semibold tracking-wide bg-green-100 text-green-700 px-2 py-1 rounded-lg mt-2 focus:outline-none hover:bg-green-200 text-xs"
                    onClick = {() => handleComplete(todo)}
                    >Done
                    </button>
                    <button
                    className="ml-2 puppercase font-semibold tracking-wide bg-red-100 text-red-700 px-2 py-1 rounded-lg mt-2 focus:outline-none hover:bg-red-200 text-xs"
                    onClick = {() => handleDelete(todo)}
                    >Delete
                    </button>
                </div>
                </div>
                </section>
            )
            )}
        </div>
    )
}

export default TodosList;