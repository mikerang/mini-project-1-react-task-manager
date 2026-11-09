const BASE_URL = 'https://jsonplaceholder.typicode.com'

// Demo switch for the README's "See each state": null (normal), 'error' or 'empty'
const FORCE_STATE = null

export function fetchTodos() {
  return fetch(`${BASE_URL}/todos`).then((res) => {
    if (!res.ok || FORCE_STATE === 'error') {
      throw new Error('Failed to load tasks')
    }
    if (FORCE_STATE === 'empty') {
      return []
    }
    return res.json()
  })
}

export function fetchTodo(id) {
  return fetch(`${BASE_URL}/todos/${id}`).then((res) => {
    if (!res.ok) {
      throw new Error('Failed to load task')
    }
    return res.json()
  })
}