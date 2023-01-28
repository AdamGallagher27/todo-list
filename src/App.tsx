import {useRef, useState} from 'react';
import { TodoList } from './components/TodoList';

function App() {

  const [todo, setTodo] = useState<string>('');

  const handleInput = (event: React.SyntheticEvent): void => {
    setTodo((event.target as HTMLInputElement).value)
    console.log(todo)
  }


  return (
    <div className="App">
      {/* an input field */}
      <input type="text" onChange={ event => handleInput(event) } />
      {/* creates todo component */}
      {/* inside of a todo list component */}
      {/* <TodoList  /> */}
    </div>
  );
}

export default App;
