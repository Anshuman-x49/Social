import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreatePost from './pages/Createpost'
import Feed from './pages/Feed'


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/" element={<Feed />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
