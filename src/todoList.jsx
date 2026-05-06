import { TodoItem } from "./todoItem"

export function TodoList({todos, toggleTodo, deleteTodoItem}){
    return (
    <ul className="list">
      {todos.length === 0 && "No todos"}
      {todos.map(todo => {
        return <TodoItem {...todo} key={todo.id} 
          toggleTodo={toggleTodo} deleteTodoItem={deleteTodoItem} /> 
      })}
    </ul>
    )
}