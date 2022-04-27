

export function NoteTodo({ todo, idx, onDeleteTodo }) {
	return (
		<li>
			{todo.txt} <button onClick={() => onDeleteTodo(idx)}>X</button>
		</li>
	)
}
