import { Routes, Route } from 'react-router-dom'
import Feed from './pages/Feed'
import Createpost from './pages/Createpost'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={Feed} />
        <Route path="/createpost" element={Createpost} />
      </Routes>
    </>
  )
}

export default App
