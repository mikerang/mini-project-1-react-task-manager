import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchTodo } from '../api/todos.js'
import AssignedUser from '../components/AssignedUser.jsx'

function TaskDetailPage() {
  const { id } = useParams()
  const [markedDone, setMarkedDone] = useState(false)

  const { data: todo, isLoading, isError } = useQuery({
    queryKey: ['todo', id],
    queryFn: () => fetchTodo(id),
  })

  if (isLoading) {
    return <p>Loading task...</p>
  }

  if (isError) {
    return (
      <div>
        <p className="mb-4 rounded border border-red-400 bg-red-50 p-4 text-red-700">
          Something went wrong loading this task. Please try again.
        </p>
        <Link to="/" className="text-purple-700 hover:underline">
          ← Back to tasks
        </Link>
      </div>
    )
  }

  const isDone = todo.completed || markedDone

  return (
    <div className="max-w-xl">
      <Link to="/" className="text-purple-700 hover:underline">
        ← Back to tasks
      </Link>

      <h2 className="mt-4 mb-2 text-2xl font-semibold">{todo.title}</h2>

      <span
        className={
          isDone
            ? 'rounded bg-green-100 px-2 py-0.5 text-xs text-green-800'
            : 'rounded bg-yellow-100 px-2 py-0.5 text-xs text-yellow-800'
        }
      >
        {isDone ? 'Done' : 'Open'}
      </span>

      <hr className="my-6 border-gray-200" />

      <p className="text-sm text-gray-500">Assigned to</p>
      <AssignedUser userId={todo.userId} />

      <p className="mt-4 text-sm text-gray-500">Task number</p>
      <p className="text-lg font-medium">{todo.id}</p>

      {todo.completed ? null : (
        <button
          onClick={() => setMarkedDone(!markedDone)}
          className="mt-6 rounded border border-purple-600 px-4 py-2 text-purple-700 hover:bg-purple-50"
        >
          {markedDone ? 'Undo' : 'Mark done'}
        </button>
      )}
    </div>
  )
}

export default TaskDetailPage