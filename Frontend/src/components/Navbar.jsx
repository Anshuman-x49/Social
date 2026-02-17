import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>Socials</h1>
      <div className="links">
        <Link to="/feed">Feed</Link>
        <Link to="/create-post">Create Post</Link>
      </div>
    </div>
  )
}

export default Navbar
