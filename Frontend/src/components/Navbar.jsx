import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='header'>
      <h1>Socials</h1>
      <div className="links">
        <Link to="/">Feed</Link>
        <Link to="/createpost">Create Post</Link>
      </div>
    </div>
  )
}

export default Navbar
