import { useEffect, useState } from 'react'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import AdminPage from './pages/AdminPage'
import HomePage from './pages/HomePage'

function App() {
  const [currentPage, setCurrentPage] = useState(() =>
    window.location.hash === '#admin' ? 'admin' : 'home',
  )

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(window.location.hash === '#admin' ? 'admin' : 'home')
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <div className="app-layout">
      <Header />
      {currentPage === 'admin' ? <AdminPage /> : <HomePage />}
      <Footer />
    </div>
  )
}

export default App
