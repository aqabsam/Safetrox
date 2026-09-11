import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Layout from './components/Layout'
import AboutPage from './pages/AboutPage'
import AdvancedSafetyPage from './pages/AdvancedSafetyPage'
import ContactPage from './pages/ContactPage'
import GalleryPage from './pages/GalleryPage'
import HomePage from './pages/HomePage'
import InterviewPreparationPage from './pages/InterviewPreparationPage'
import NewsPage from './pages/NewsPage'
import QuizPage from './pages/QuizPage'
import RecommendationsPage from './pages/RecommendationsPage'
import ServicesPage from './pages/ServicesPage'
import AccountPage from './pages/AccountPage'
import AdminPage from './pages/AdminPage'
import QuizTestPage from './pages/QuizTestPage'
import { AuthProvider } from './contexts/AuthContext'
import { ContentProvider } from './contexts/ContentContext'

function App() {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/'

  return (
    <AuthProvider>
      <ContentProvider>
        <BrowserRouter basename={basename}>
          <Routes>
            <Route path="/" element={<Layout><HomePage /></Layout>} />
            <Route path="/quiz" element={<Layout><QuizPage /></Layout>} />
            <Route path="/quiz/test/:testNumber" element={<Layout><QuizTestPage /></Layout>} />
            <Route path="/about" element={<Layout><AboutPage /></Layout>} />
            <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
            <Route path="/advance-safety" element={<Layout><AdvancedSafetyPage /></Layout>} />
            <Route path="/interview-preparation" element={<Layout><InterviewPreparationPage /></Layout>} />
            <Route path="/recommendations" element={<Layout><RecommendationsPage /></Layout>} />
            <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
            <Route path="/gallery" element={<Layout><GalleryPage /></Layout>} />
            <Route path="/news" element={<Layout><NewsPage /></Layout>} />
            <Route path="/account" element={<Layout><AccountPage /></Layout>} />
            <Route path="/admin" element={<Layout><AdminPage /></Layout>} />
          </Routes>
        </BrowserRouter>
      </ContentProvider>
    </AuthProvider>
  )
}

export default App
