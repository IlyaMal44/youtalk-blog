import Footer from './components/Footer'
import Header from './components/Header'
import ArticlePage from './pages/ArticlePage'
import BlogPage from './pages/BlogPage'

function App() {
  const isArticle = window.location.pathname.includes('article')

  return (
    <>
      <Header />
      {isArticle ? <ArticlePage /> : <BlogPage />}
      <Footer />
    </>
  )
}

export default App
