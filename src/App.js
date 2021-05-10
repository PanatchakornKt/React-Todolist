import React, {useState, useEffect} from 'react'
import Headbar from './components/Head'
import Form from './components/Form'
import TodosList from './components/TodosList'

const App = () => {

  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
  const filterHandle = () => {
    switch(status){
      case 'completed' :
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break
      case 'uncompleted' :
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break
      default :
        setFilteredTodos(todos)
        break
    }
  }
    filterHandle() 
  }, [todos, status])

  console.log(todos)

  return(
    <div className="App">
      <div>
        <Headbar />
      </div>
      <div>
        <Form 
          input = {input}
          setInput = {setInput}
          todos = {todos}
          setTodos = {setTodos}
          status = {status}
          setStatus = {setStatus}
        />
      </div>
      <div>
        <TodosList 
          todos = {todos}
          setTodos = {setTodos}
          filteredTodos = {filteredTodos}
        />
      </div>
    </div>
  )
}
export default App

