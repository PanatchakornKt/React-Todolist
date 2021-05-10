import React from 'react'

const Form = ({input, setInput, todos, setTodos, setStatus}) => {

    const onInputChange = (e) => {
        setInput(e.target.value)
    }

    const onFormSubmit = (e) => {
        e.preventDefault()
            setTodos([...todos, {id: Math.random() * 1000, title: input, completed: false}])
            setInput('')
        }

    const statusHandle = (e) => {
        setStatus(e.target.value)
    }

    return (
        <div> 
        <form 
        className = "container mx-auto px-6 py-3"
        onSubmit={onFormSubmit}>
            TO DO :  
            <input type="text" placeholder="Add a task..."
            value= {input}
            required
            onChange={onInputChange}
            className = "rounded-sm px-2 py-2 mt-2 ml-2 focus:outline-none bg-gray-100"
            />
            <button 
            type="submit"
            className ="ml-2 puppercase font-semibold tracking-wide bg-gray-100 text-gray-700 px-2 py-2 rounded-sm mt-2 focus:outline-none hover:bg-yellow-200">
            +
            </button>
            <select 
            onChange = {statusHandle}
            name="todos" 
            className="filter-todo ml-3 border border-gray-300 rounded-full text-gray-600 h-8 pl-5 pr-5 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                <option >All Tasks ▼ </option>
                <option value = "completed">Completed</option>
                <option value = "uncompleted">Uncompleted</option>
            </select>
        </form>
        </div>
    )
}
export default Form