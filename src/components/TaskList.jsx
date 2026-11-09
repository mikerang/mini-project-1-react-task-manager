import TaskRow from './TaskRow.jsx'

function TaskList({ todos }) {
  return (
    <ul className="flex flex-col gap-2">
      {todos.map((todo) => (
        <TaskRow key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

export default TaskList
