export function TodoItem({completed, id, title, toggleTodo, deleteTodoItem}) {
    return (
        <li>
        <label>
          <input type="checkbox" checked={completed} 
            onChange={e => toggleTodo(id, e.target.checked)}
            />
          {title}
        </label>
        <button onClick={() => deleteTodoItem(id)} className="btn btn-danger">Delete</button>
      </li>
    )
}