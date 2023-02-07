
import { useState, useEffect } from 'react'

interface todo {
  name: string,
  id: string
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
    setTodos([...todos, { name: text, id: crypto.randomUUID() }])
    setTodo('')
  }

  const deleteTodo = (id: string) => {
    const newArr = todos.filter(object => object.id !== id)
    setTodos(newArr)
  }

  return (
    <div>
      <input type="text" value={todo} onChange={event => handleInput(event)} />
      <button type="submit" onClick={() => createTodo(todo)}>New Todo</button>
      <ul>
        {todos.map(todo => (
          <div>
            <li key={todo.id}>{todo.name}</li>
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
          </div>
        ))}
      </ul>
    </div>
  )
}
