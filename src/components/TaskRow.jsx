import { Link } from 'react-router-dom'
import UserPill from './UserPill.jsx'

function TaskRow({ todo }) {
  return (
    <li className="flex items-center justify-between gap-4 rounded border border-gray-200 bg-white p-3">
      <Link to={`/tasks/${todo.id}`} className="flex-1 font-medium hover:underline">
        {todo.title}
      </Link>

      <UserPill userId={todo.userId} />

      <span
        className={
          todo.completed
            ? 'shrink-0 rounded bg-green-100 px-2 py-0.5 text-xs text-green-800'
            : 'shrink-0 rounded bg-yellow-100 px-2 py-0.5 text-xs text-yellow-800'
        }
      >
        {todo.completed ? 'Done' : 'Open'}
      </span>
    </li>
  )
}

export default TaskRow