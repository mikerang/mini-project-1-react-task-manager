import { Routes, Route, Link } from 'react-router-dom'
import TasksPage from './pages/TasksPage.jsx'
import TaskDetailPage from './pages/TaskDetailPage.jsx'
import StatsPage from './pages/StatsPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import logo from './assets/usad-logo.png'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="flex flex-col gap-2 border-b border-purple-100 bg-purple-50 p-4 sm:flex-row sm:items-center sm:justify-between">
        <Link to="/">
          <img src={logo} alt="Usad Taskboard" className="h-12 w-auto" />
        </Link>

        <div className="flex gap-4">
          <Link to="/" className="text-gray-700 hover:text-purple-700">Tasks</Link>
          <Link to="/stats" className="text-gray-700 hover:text-purple-700">Stats</Link>
          <Link to="/about" className="text-gray-700 hover:text-purple-700">About</Link>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl p-4">
        <Routes>
          <Route path="/" element={<TasksPage />} />
          <Route path="/tasks/:id" element={<TaskDetailPage />} />
          <Route path="/stats" element={<StatsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App