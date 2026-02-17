import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'

const Feed = () => {

  const [post, setPost] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/posts')
    .then((res) => {
      setPost(res.data.posts)
    })
    .catch((err) => {
      console.log(err)
    })
  })

  return (
    <>
      <Navbar />
      <section className='feed-section'>
        <h1>Feed</h1>
        {
          post.length > 0 ? (
            post.map((post) => (
              <div className='post-card' key={post._id}>
                <img src={post.image} alt={post.caption} />
                <p>{post.caption}</p>
              </div>
            ))
          ) : (
            <p>No posts found.</p>
          )
        }
      </section>
    </>
  )
}

export default Feed
