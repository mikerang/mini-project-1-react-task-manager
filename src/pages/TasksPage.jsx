import { useQuery } from '@tanstack/react-query'
import { fetchTodos } from '../api/todos.js'
import TaskList from '../components/TaskList.jsx'

function TasksPage() {
  const { data: todos = [], isLoading, isError } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  })

  if (isLoading) {
    return (
      <div className="flex flex-col gap-2">
        <div className="h-12 animate-pulse rounded bg-gray-200"></div>
        <div className="h-12 animate-pulse rounded bg-gray-200"></div>
        <div className="h-12 animate-pulse rounded bg-gray-200"></div>
        <p className="text-gray-500">Loading tasks...</p>
      </div>
    )
  }

  if (isError) {
    return (
      <p className="rounded border border-red-400 bg-red-50 p-4 text-red-700">
        Something went wrong loading tasks. Please try again.
      </p>
    )
  }

  if (todos.length === 0) {
    return <p>No tasks found.</p>
  }

  return (
    <div>
      <h2 className="mb-2 text-xl font-semibold">Tasks</h2>
      <p className="mb-4 text-sm text-gray-500">Showing {todos.length} tasks</p>
      <TaskList todos={todos} />
      <p className="mt-4 text-sm text-gray-500">Click a title to open the task.</p>
    </div>
  )
}

export default TasksPage