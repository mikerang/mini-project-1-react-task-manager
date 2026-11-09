import { useQuery } from '@tanstack/react-query'
import { fetchUser } from '../api/users.js'

function UserPill({ userId }) {
  const { data: user, isLoading, isError } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
  })

  if (isLoading) {
    return (
      <span className="hidden shrink-0 rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-400 sm:inline">
        Loading...
      </span>
    )
  }

  if (isError) {
    return null
  }

  return (
    <span className="hidden shrink-0 rounded-full border border-purple-200 bg-purple-50 px-2 py-0.5 text-xs text-purple-700 sm:inline">
      {user.name}
    </span>
  )
}

export default UserPill