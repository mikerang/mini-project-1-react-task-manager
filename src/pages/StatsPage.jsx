import { useQuery } from '@tanstack/react-query'
import { fetchTodos } from '../api/todos.js'
import StatCard from '../components/StatCard.jsx'

function StatsPage() {
  const { data: todos = [], isLoading, isError } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  })

  if (isLoading) {
    return <p>Loading stats...</p>
  }

  if (isError) {
    return (
      <p className="rounded border border-red-400 bg-red-50 p-4 text-red-700">
        Something went wrong loading the stats. Please try again.
      </p>
    )
  }

  if (todos.length === 0) {
    return <p>No tasks to count yet.</p>
  }

  const total = todos.length
  const done = todos.filter((todo) => todo.completed).length
  const open = total - done

  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold">Stats</h2>

      <div className="flex flex-col gap-4 sm:flex-row">
        <StatCard label="Total tasks" value={total} />
        <StatCard label="Done" value={done} />
        <StatCard label="Open" value={open} />
      </div>
    </div>
  )
}

export default StatsPage