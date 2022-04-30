export function NoteTodo({ todo, idx, onDeleteTodo }) {
	return (
		<li>
			<p>{todo.txt}</p>
			<button onClick={() => onDeleteTodo(idx)} className="btn-todo"></button>
		</li>
	)
}
