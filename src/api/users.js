const BASE_URL = 'https://jsonplaceholder.typicode.com'

export function fetchUser(userId) {
  return fetch(`${BASE_URL}/users/${userId}`).then((res) => {
    if (!res.ok) {
      throw new Error('Failed to load user')
    }
    return res.json()
  })
}