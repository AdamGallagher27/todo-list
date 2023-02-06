
import { useState, useEffect } from 'react'

interface todo {
  name: string,
  id: number
}


export const TodoList = () => {
  const [todos, setTodos] = useState<todo[]>([])
  const [todo, setTodo] = useState<string>('')

  useEffect(() => {
    console.log(todos)
  }, [todos])

  const handleInput = (event: React.SyntheticEvent): void => {
    setTodo((event.target as HTMLInputElement).value)
  }

  const createTodo = (text: string) => {
    setTodos([...todos, { name: text, id: todos.length }])
    setTodo('')
  }

  return (
    <div>
      <input type="text" value={todo} onChange={event => handleInput(event)} />
      <button type="submit" onClick={() => createTodo(todo)}>New Todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </div>
  )
}
