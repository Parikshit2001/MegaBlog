import React, { useState } from 'react'
import { useSelector } from 'react-redux'
// import appwriteService from "../../appwrite/config";
import appwriteService from '../appwrite/config'
import authService from '../appwrite/auth'


function AddPost() {
  const userData = useSelector((state) => state.auth.userData)
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(userData)
    // authService.getCurrentUser()
      // .then(data => console.log(data));
    const x = await appwriteService.createPost({
      title,
      content,
      status,
      email: userData.email
    })
    setTitle('');
    setContent('');
  }

  return (
    <div className='py-8'>
      <form>
        <label htmlFor="">Title</label>
        <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
        <br />
        <label htmlFor="">Content</label>
        <input type="text" placeholder='Content' value={content} onChange={(e) => setContent(e.target.value)}/>
        <br />
        <label htmlFor="">Status</label>
        <input type="checkbox" checked={status} onChange={() => setStatus(!status)}/>
        <br />
        <button type='submit' onClick={handleSubmit}>Submit</button>

      </form>
    </div>
  )
}

export default AddPost