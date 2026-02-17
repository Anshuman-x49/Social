import React from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Createpost = () => {

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target);

    await axios.post('http://localhost:3000/create-post', formData)
    .then(() => {

      navigate('/feed')
      console.log('Post created successfully!')
      e.target.reset()

    })
    .catch((err) => {
      console.log(err)
      alert('Error creating post. Please try again.')
    })
  }

  return (
    <>
        <Navbar />
        <section className='create-post-section'>
            <h1>Create Post</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type='file' name='image' accept='image/*' />
                <input type="text" name='caption' placeholder='Add a caption...' />
                <button type='submit'>Submit</button>
            </form>
        </section>
    </>
  )
}

export default Createpost
