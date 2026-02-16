import React from 'react'
import Navbar from '../components/Navbar'

const Createpost = () => {
  return (
    <div>
      <Navbar />
      <form action="/createpost" method="post">
        <input type="image" name="image" placeholder="Image" />
        <input type="text" name="caption" placeholder="Caption" />
        <button type="submit">Create Post</button>
      </form>
    </div>
  )
}

export default Createpost
