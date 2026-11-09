import { useQuery } from '@tanstack/react-query'
import { fetchUser } from '../api/users.js'

function AssignedUser({ userId }) {
  const { data: user, isLoading, isError } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
  })

  if (isLoading) {
    return <p className="text-gray-500">Loading...</p>
  }

  if (isError) {
    return <p className="text-red-700">Could not load user</p>
  }

  return <p className="text-lg font-medium">{user.name}</p>
}

export default AssignedUser