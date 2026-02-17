import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'

const Feed = () => {

  const [post, setPost] = useState([
    {
      _id:"1",
      image:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9zdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      caption:"Beautiful sunset at the beach!"
    }
  ])

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
