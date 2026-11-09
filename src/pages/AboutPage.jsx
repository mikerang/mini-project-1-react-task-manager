import { Link } from 'react-router-dom'

const tools = [
  { name: 'React', use: 'builds the screens out of components' },
  { name: 'Vite', use: 'runs the dev server and builds the app' },
  { name: 'React Router', use: 'gives each screen its own URL' },
  { name: 'TanStack Query', use: 'fetches the tasks and keeps a saved copy' },
  { name: 'Tailwind CSS', use: 'styles everything with classes' },
  { name: 'JSONPlaceholder', use: 'the free practice API the tasks come from' },
]

function AboutPage() {
  return (
    <div className="max-w-xl">
      <h2 className="mb-2 text-2xl font-semibold">About Usad</h2>

      <p className="mb-6 text-gray-700">
        Usad is a small task manager. It loads 200 sample tasks, shows which
        ones are open or done, and lets you open any task to see its details.
      </p>

      <h3 className="mb-2 text-lg font-semibold">Built with</h3>

      <ul className="mb-6 flex flex-col gap-2">
        {tools.map((tool) => (
          <li key={tool.name} className="rounded border border-gray-200 p-3">
            <span className="font-medium">{tool.name}</span>
            <span className="text-gray-600"> — {tool.use}</span>
          </li>
        ))}
      </ul>

      <p className="mb-6 text-sm text-gray-500">Mini Project 1 · Built by MICHAEL ANG</p>

      <Link to="/" className="text-purple-700 hover:underline">
        ← Back to tasks
      </Link>
    </div>
  )
}

export default AboutPage